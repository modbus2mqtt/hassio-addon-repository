#!/usr/bin/env python3
from dataclasses import dataclass
from enum import Enum
import functools
import io
import json
import argparse
import os
import subprocess
import sys
import re
import time
from typing import Any, Dict
import typing
import time
from threading import Thread

owner = "modbus2mqtt"
  

class SyncException(Exception):
    pass

def eprint(*args, **kwargs):
    print(*args, file=sys.stderr, **kwargs)

def executeCommand(cmdArgs: list[str], *args, **kwargs)-> str:
    ignoreErrors = kwargs.get('ignoreErrors', None)
    result = subprocess.Popen(cmdArgs,
	cwd=os.getcwd(),
 	stdout=subprocess.PIPE,
 	stderr=subprocess.PIPE) 
    out, err = result.communicate()
    err = err.decode("utf-8")
    return_code = result.returncode
    if err != b'' and err != '' and not ignoreErrors:
        eprint(err)
    if return_code != 0:
        if out != b'':
            eprint(out.decode("utf-8"))
        return "".encode('utf-8')
    else:
        if out.decode("utf-8") == '':
            return '{"status": "OK"}'.encode('utf-8')
    return out

class StreamThread ( Thread ):
    def __init__(self, buffer):
        Thread.__init__(self)
        self.buffer = buffer
    def run ( self ):
        while 1:
            line = self.buffer.readline()
            eprint(line,end="")
            sys.stderr.flush()
            if line == '':
                break
def executeSyncCommandWithCwd(cmdArgs: list[str], cwdP:str, *args, **kwargs)-> str:
            
    if cwdP == None:
        cwdP = os.getcwd()
    proc = subprocess.Popen(cmdArgs,
    cwd=cwdP,
    stdout=subprocess.PIPE,
 	stderr=subprocess.PIPE) 
    out, err = proc.communicate()
    proc.returncode
    if proc.returncode != 0:
        raise SyncException( cwdP +':'+ err.decode("utf-8"), ' '.join(cmdArgs), out.decode("utf-8"))
    if len(err)>0:    
        eprint(err.decode("utf-8"))
    return out
def executeCommandWithOutputs(cmdArgs: list[str], stdout, stderr,  *args, **kwargs):
   proc = subprocess.Popen(cmdArgs, stdout=stdout, stderr=stderr)
   proc.wait()
   if proc.returncode != 0:
        raise SyncException( os.getcwd() +':'+' '.join(cmdArgs) + " exited with rc= " + str( proc.returncode))

def executeSyncCommand(cmdArgs: list[str], *args, **kwargs)-> str:
    return executeSyncCommandWithCwd(cmdArgs, os.getcwd(), *args, **kwargs)
   
def ghapi(method:str, url:str, *args)->str:

    return executeSyncCommand(['gh','api','-H', "Accept: application/vnd.github+json",
                           '-H',"X-GitHub-Api-Version: 2022-11-28",
                           '-X', method,
                           url ]+ list(*args))

def isRepositoryForked( repositoryName )->bool:
    forked = json.loads(executeCommand(['gh', 'repo' , 'list', '--fork', '--json', 'name'] ))
    for repository in forked:
        if repository['name'] == repositoryName :
            return True
    return False


def readPackageJson( dir:str)->Dict[str,any]:
    try:
        with open(dir) as json_data:
            return  json.load( json_data)
    except Exception as err:
        msg = "Try to open package.json in " + os.getcwd() + '\n' +  dir
        while not os.path.exists( dir):
            dir = os.path.dirname(dir)
        if  dir != '':
            eprint("Exception directory found: " + dir )

        raise SyncException(os.getcwd() + ": " +msg)
 
def prepareGitForReleaseRepository(login:str, reponame:str):
    if login != "modbus2mqtt":
       raise SyncException(os.getcwd() + ": Release is allowed for " + owner + " only")
    js = executeSyncCommand(['git', 'remote', '-v']).decode("utf-8")
    match = re.search(r'' + owner + '/', js)
    if not match:
       raise SyncException(os.getcwd() + ": Git origin is not " + owner + '/' + reponame )
    try:
        executeSyncCommand(['git', 'fetch',owner,'release'] )
    except SyncException as err:
        try:
            executeSyncCommand(['git', 'branch', 'release']).decode("utf-8")
        except SyncException as err:
            eprint(os.getcwd() + ": release branch existed")
    executeSyncCommand(['git', 'checkout', owner + '/release']).decode("utf-8")

