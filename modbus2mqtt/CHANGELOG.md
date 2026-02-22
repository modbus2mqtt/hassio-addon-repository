## Changelog for Modbus <=> MQTT

## [v0.18.0](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.18.0) (2026-02-22)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.17.12...v0.18.0)

**Fixed bugs:**

- haos web ui don't start [\#156](https://github.com/modbus2mqtt/modbus2mqtt/issues/156)

**Closed issues:**

- Newly added registers/entities disappear after restart \(configuration not persisted\) [\#188](https://github.com/modbus2mqtt/modbus2mqtt/issues/188)
- I am not able to select created "specification" [\#180](https://github.com/modbus2mqtt/modbus2mqtt/issues/180)
- Problem setting modbus addresses [\#178](https://github.com/modbus2mqtt/modbus2mqtt/issues/178)
- modbus polling [\#134](https://github.com/modbus2mqtt/modbus2mqtt/issues/134)

**Merged pull requests:**

- Important Refactoring of Specification and Persistence [\#205](https://github.com/modbus2mqtt/modbus2mqtt/pull/205) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix issue with french language \#156 [\#204](https://github.com/modbus2mqtt/modbus2mqtt/pull/204) ([modbus2mqtt](https://github.com/modbus2mqtt))

## [v0.17.12](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.17.12) (2026-02-20)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.17.11...v0.17.12)

**Merged pull requests:**

- Fix health check [\#203](https://github.com/modbus2mqtt/modbus2mqtt/pull/203) ([modbus2mqtt](https://github.com/modbus2mqtt))

## [v0.17.11](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.17.11) (2026-02-20)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.17.10...v0.17.11)

**Merged pull requests:**

- Fix health check in dockerfile [\#202](https://github.com/modbus2mqtt/modbus2mqtt/pull/202) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.17.10](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.17.10) (2026-02-20)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.17.9...v0.17.10)

**Merged pull requests:**

- Fix healthcheck in npmpack dockerfile [\#201](https://github.com/modbus2mqtt/modbus2mqtt/pull/201) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.17.9](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.17.9) (2026-02-20)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.17.8...v0.17.9)

**Merged pull requests:**

- Fix health check in dockerfile [\#200](https://github.com/modbus2mqtt/modbus2mqtt/pull/200) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.17.8](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.17.8) (2026-02-20)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.17.7...v0.17.8)

**Merged pull requests:**

- Avoid polling when no MQTT is configured. [\#199](https://github.com/modbus2mqtt/modbus2mqtt/pull/199) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.17.7](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.17.7) (2026-02-20)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.17.6...v0.17.7)

**Merged pull requests:**

- Fix git clone issue in public directory [\#198](https://github.com/modbus2mqtt/modbus2mqtt/pull/198) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.17.6](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.17.6) (2026-02-20)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.17.5...v0.17.6)

**Merged pull requests:**

- Fixes for noisy logging and empty public directories [\#197](https://github.com/modbus2mqtt/modbus2mqtt/pull/197) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.17.5](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.17.5) (2026-02-20)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/vpatch...v0.17.5)

**Merged pull requests:**

- Fixed release workflow [\#196](https://github.com/modbus2mqtt/modbus2mqtt/pull/196) ([volkmarnissen](https://github.com/volkmarnissen))

## [vpatch](https://github.com/modbus2mqtt/modbus2mqtt/tree/vpatch) (2026-02-19)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.17.2...vpatch)

**Closed issues:**

- modbus2mqtt connection does not reconnect to mqtt server after connection loss. [\#191](https://github.com/modbus2mqtt/modbus2mqtt/issues/191)
- Contributing from UI failed [\#190](https://github.com/modbus2mqtt/modbus2mqtt/issues/190)
- docker-compose install failing [\#189](https://github.com/modbus2mqtt/modbus2mqtt/issues/189)
- Devices are not polled -fatal: detected dubious ownership in repository at '/data/public' [\#177](https://github.com/modbus2mqtt/modbus2mqtt/issues/177)
- /dev/ttyUSB0 permission not granted [\#175](https://github.com/modbus2mqtt/modbus2mqtt/issues/175)
- How to setup Modbus RTU over TCP? [\#171](https://github.com/modbus2mqtt/modbus2mqtt/issues/171)

**Merged pull requests:**

- Replace APK Build in release workflow with npm tar build [\#195](https://github.com/modbus2mqtt/modbus2mqtt/pull/195) ([volkmarnissen](https://github.com/volkmarnissen))
- Refactored frontend build use @shared instead of symbolic link, refactored modbus2mqtt.config [\#194](https://github.com/modbus2mqtt/modbus2mqtt/pull/194) ([volkmarnissen](https://github.com/volkmarnissen))
- Playwright introduction and Fix for issues \#191 [\#193](https://github.com/modbus2mqtt/modbus2mqtt/pull/193) ([volkmarnissen](https://github.com/volkmarnissen))
- Refactoring to improve code quality [\#192](https://github.com/modbus2mqtt/modbus2mqtt/pull/192) ([volkmarnissen](https://github.com/volkmarnissen))
- Refactor/backend frontend split 2026 01 22 [\#187](https://github.com/modbus2mqtt/modbus2mqtt/pull/187) ([volkmarnissen](https://github.com/volkmarnissen))
- Refactor/backend frontend split 2026 01 22 [\#186](https://github.com/modbus2mqtt/modbus2mqtt/pull/186) ([volkmarnissen](https://github.com/volkmarnissen))
- Refactor/backend frontend split 2026 01 22 [\#185](https://github.com/modbus2mqtt/modbus2mqtt/pull/185) ([volkmarnissen](https://github.com/volkmarnissen))
- Refacroting and Migration to ESM [\#184](https://github.com/modbus2mqtt/modbus2mqtt/pull/184) ([volkmarnissen](https://github.com/volkmarnissen))
- Add binary to package.json [\#182](https://github.com/modbus2mqtt/modbus2mqtt/pull/182) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix: devices now poll continuously instead of only once [\#179](https://github.com/modbus2mqtt/modbus2mqtt/pull/179) ([chrissnow](https://github.com/chrissnow))
- Improve english language test. Refactored git hooks [\#176](https://github.com/modbus2mqtt/modbus2mqtt/pull/176) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.17.2](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.17.2) (2025-11-27)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.17.1...v0.17.2)

**Closed issues:**

- Hassio Addon does not have access to serial [\#169](https://github.com/modbus2mqtt/modbus2mqtt/issues/169)
- Read coils actually reads discrete inputs [\#145](https://github.com/modbus2mqtt/modbus2mqtt/issues/145)

**Merged pull requests:**

- ESLint improvements [\#174](https://github.com/modbus2mqtt/modbus2mqtt/pull/174) ([volkmarnissen](https://github.com/volkmarnissen))
- Modbus RTU read coils: Fix read from coils instead of discreteInput [\#173](https://github.com/modbus2mqtt/modbus2mqtt/pull/173) ([volkmarnissen](https://github.com/volkmarnissen))
- Migrate to new file system structure [\#172](https://github.com/modbus2mqtt/modbus2mqtt/pull/172) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.17.1](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.17.1) (2025-11-17)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.17.0...v0.17.1)

**Merged pull requests:**

- Fix migration Problem [\#170](https://github.com/modbus2mqtt/modbus2mqtt/pull/170) ([volkmarnissen](https://github.com/volkmarnissen))
- Add more understandable comment for checout hassio and modbus2mqtt [\#168](https://github.com/modbus2mqtt/modbus2mqtt/pull/168) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.17.0](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.17.0) (2025-11-15)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/true...v0.17.0)

**Merged pull requests:**

- Check apkbuild changes and package.json version number changes. They should not happen in forked repos [\#167](https://github.com/modbus2mqtt/modbus2mqtt/pull/167) ([volkmarnissen](https://github.com/volkmarnissen))
- Translate to english [\#166](https://github.com/modbus2mqtt/modbus2mqtt/pull/166) ([volkmarnissen](https://github.com/volkmarnissen))
- New CI/CD Workflows [\#165](https://github.com/modbus2mqtt/modbus2mqtt/pull/165) ([volkmarnissen](https://github.com/volkmarnissen))
- Added release-assets.yml - workflow for releasing the Dockerfile [\#164](https://github.com/modbus2mqtt/modbus2mqtt/pull/164) ([volkmarnissen](https://github.com/volkmarnissen))
- Try to run release-assets.yml [\#163](https://github.com/modbus2mqtt/modbus2mqtt/pull/163) ([volkmarnissen](https://github.com/volkmarnissen))
- Prepare Homeassistant Addon refactoring [\#162](https://github.com/modbus2mqtt/modbus2mqtt/pull/162) ([volkmarnissen](https://github.com/volkmarnissen))
- Fixing, Restructuring and improving file and document structure [\#161](https://github.com/modbus2mqtt/modbus2mqtt/pull/161) ([volkmarnissen](https://github.com/volkmarnissen))
- Fixed cypress tests [\#160](https://github.com/modbus2mqtt/modbus2mqtt/pull/160) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix cypress errors [\#159](https://github.com/modbus2mqtt/modbus2mqtt/pull/159) ([volkmarnissen](https://github.com/volkmarnissen))
- Alpine and docker improvements [\#158](https://github.com/modbus2mqtt/modbus2mqtt/pull/158) ([volkmarnissen](https://github.com/volkmarnissen))
- APK Build and Angular 20 migration [\#157](https://github.com/modbus2mqtt/modbus2mqtt/pull/157) ([volkmarnissen](https://github.com/volkmarnissen))
- Docker Install s6-overlay service [\#155](https://github.com/modbus2mqtt/modbus2mqtt/pull/155) ([volkmarnissen](https://github.com/volkmarnissen))
-  Fix finding angulardir [\#154](https://github.com/modbus2mqtt/modbus2mqtt/pull/154) ([volkmarnissen](https://github.com/volkmarnissen))

## [true](https://github.com/modbus2mqtt/modbus2mqtt/tree/true) (2025-11-04)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.41...true)

**Closed issues:**

- Update failing [\#140](https://github.com/modbus2mqtt/modbus2mqtt/issues/140)

**Merged pull requests:**

- Remove latest dependency [\#153](https://github.com/modbus2mqtt/modbus2mqtt/pull/153) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix ingress scenario [\#152](https://github.com/modbus2mqtt/modbus2mqtt/pull/152) ([volkmarnissen](https://github.com/volkmarnissen))
- Log message for hassio environment [\#151](https://github.com/modbus2mqtt/modbus2mqtt/pull/151) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix cypress e2e tests [\#150](https://github.com/modbus2mqtt/modbus2mqtt/pull/150) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix startServers [\#149](https://github.com/modbus2mqtt/modbus2mqtt/pull/149) ([volkmarnissen](https://github.com/volkmarnissen))
- remove e2eReset [\#148](https://github.com/modbus2mqtt/modbus2mqtt/pull/148) ([volkmarnissen](https://github.com/volkmarnissen))
- Test pull action [\#147](https://github.com/modbus2mqtt/modbus2mqtt/pull/147) ([volkmarnissen](https://github.com/volkmarnissen))
- Fixes for running w/o parameter and w/o development components [\#146](https://github.com/modbus2mqtt/modbus2mqtt/pull/146) ([volkmarnissen](https://github.com/volkmarnissen))
- Change command line [\#144](https://github.com/modbus2mqtt/modbus2mqtt/pull/144) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.41](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.41) (2025-10-24)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.38...v0.16.41)

**Merged pull requests:**

- Fix regex match/search .latest [\#139](https://github.com/modbus2mqtt/modbus2mqtt/pull/139) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.38](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.38) (2025-10-24)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.37...v0.16.38)

## [v0.16.37](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.37) (2025-10-24)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.36...v0.16.37)

## [v0.16.36](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.36) (2025-10-23)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.35...v0.16.36)

## [v0.16.35](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.35) (2025-10-23)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.34...v0.16.35)

## [v0.16.34](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.34) (2025-10-23)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.33...v0.16.34)

## [v0.16.33](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.33) (2025-10-23)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.32...v0.16.33)

## [v0.16.32](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.32) (2025-10-23)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/0.16.27...v0.16.32)

**Fixed bugs:**

- Baud rate 2400? [\#127](https://github.com/modbus2mqtt/modbus2mqtt/issues/127)

**Closed issues:**

- no polling outside of webUI [\#133](https://github.com/modbus2mqtt/modbus2mqtt/issues/133)
- Support for DVI Heating pumps [\#129](https://github.com/modbus2mqtt/modbus2mqtt/issues/129)
- Data is not updated [\#124](https://github.com/modbus2mqtt/modbus2mqtt/issues/124)
- \[Feature\] Add number of processed calls to Modbus Status [\#111](https://github.com/modbus2mqtt/modbus2mqtt/issues/111)
- Add possibility to convert the byte and the word order for numbers and also for texts [\#91](https://github.com/modbus2mqtt/modbus2mqtt/issues/91)
- Looks like that Unsigned Int32 and Signed Int32 is mixed [\#90](https://github.com/modbus2mqtt/modbus2mqtt/issues/90)

**Merged pull requests:**

- Sync to upstream [\#138](https://github.com/modbus2mqtt/modbus2mqtt/pull/138) ([volkmarnissen](https://github.com/volkmarnissen))
- Mergepkgs [\#136](https://github.com/modbus2mqtt/modbus2mqtt/pull/136) ([volkmarnissen](https://github.com/volkmarnissen))
- Mergepkgs [\#135](https://github.com/modbus2mqtt/modbus2mqtt/pull/135) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix after release: Removed version numbers in package.json [\#132](https://github.com/modbus2mqtt/modbus2mqtt/pull/132) ([volkmarnissen](https://github.com/volkmarnissen))
- Update push.yml [\#131](https://github.com/modbus2mqtt/modbus2mqtt/pull/131) ([volkmarnissen](https://github.com/volkmarnissen))
- Merge pull request \#5 from modbus2mqtt/main [\#130](https://github.com/modbus2mqtt/modbus2mqtt/pull/130) ([volkmarnissen](https://github.com/volkmarnissen))

## [0.16.27](https://github.com/modbus2mqtt/modbus2mqtt/tree/0.16.27) (2025-09-03)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.27...0.16.27)

## [v0.16.27](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.27) (2025-09-03)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.26...v0.16.27)

**Implemented enhancements:**

- \[BUG\] TCP-Connection not kept alive [\#32](https://github.com/modbus2mqtt/modbus2mqtt/issues/32)

**Closed issues:**

- Run modbus2mqtt as Node application [\#125](https://github.com/modbus2mqtt/modbus2mqtt/issues/125)
- No entity defined for this specification [\#123](https://github.com/modbus2mqtt/modbus2mqtt/issues/123)
- Topic error / Change Topic [\#122](https://github.com/modbus2mqtt/modbus2mqtt/issues/122)
- \[BUG\] Modbus-Connection fails on high input load [\#109](https://github.com/modbus2mqtt/modbus2mqtt/issues/109)
- Timeout after docker restart [\#107](https://github.com/modbus2mqtt/modbus2mqtt/issues/107)
- Error on starting the add-on [\#89](https://github.com/modbus2mqtt/modbus2mqtt/issues/89)
- \[BUG\] Variable Properties -\> Unit of Measurement -\> Referenced Entity not selectable [\#87](https://github.com/modbus2mqtt/modbus2mqtt/issues/87)
- \[BUG\] no latest-tag on docker image [\#86](https://github.com/modbus2mqtt/modbus2mqtt/issues/86)

**Merged pull requests:**

- Modbus RTU Bridge: One configured RTU \(Mod\)bus can be used as Modbus TCP slave [\#120](https://github.com/modbus2mqtt/modbus2mqtt/pull/120) ([volkmarnissen](https://github.com/volkmarnissen))
- \[Feature\] Add number of processed calls to Modbus Status [\#119](https://github.com/modbus2mqtt/modbus2mqtt/pull/119) ([volkmarnissen](https://github.com/volkmarnissen))
- \[Feature\] Add number of processed calls to Modbus Status [\#118](https://github.com/modbus2mqtt/modbus2mqtt/pull/118) ([volkmarnissen](https://github.com/volkmarnissen))
- Add debug message queue length [\#117](https://github.com/modbus2mqtt/modbus2mqtt/pull/117) ([volkmarnissen](https://github.com/volkmarnissen))
- Trigger new build to add tcp bridge port to hassio [\#116](https://github.com/modbus2mqtt/modbus2mqtt/pull/116) ([volkmarnissen](https://github.com/volkmarnissen))
- \[bug\]Modbus Error Handling, Slave Specification Detection, TCP RTU bridge, Fixes [\#115](https://github.com/modbus2mqtt/modbus2mqtt/pull/115) ([volkmarnissen](https://github.com/volkmarnissen))
- \[bug\]Modbus Error Handling, Slave Specification Detection, TCP RTU bridge, Fixes [\#114](https://github.com/modbus2mqtt/modbus2mqtt/pull/114) ([volkmarnissen](https://github.com/volkmarnissen))
- No Internet access, Poll [\#113](https://github.com/modbus2mqtt/modbus2mqtt/pull/113) ([volkmarnissen](https://github.com/volkmarnissen))
- \[bug\]Modbus Error Handling, Slave Specification Detection, TCP RTU bridge, Fixes [\#112](https://github.com/modbus2mqtt/modbus2mqtt/pull/112) ([volkmarnissen](https://github.com/volkmarnissen))
- Modbus Error Handling and Monitoring/tree/modbuscache [\#110](https://github.com/modbus2mqtt/modbus2mqtt/pull/110) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix Modbuscache, Add caching for modbusRTU [\#108](https://github.com/modbus2mqtt/modbus2mqtt/pull/108) ([volkmarnissen](https://github.com/volkmarnissen))
- Modbuscache [\#106](https://github.com/modbus2mqtt/modbus2mqtt/pull/106) ([modbus2mqtt](https://github.com/modbus2mqtt))

## [v0.16.26](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.26) (2025-04-14)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.25...v0.16.26)

**Closed issues:**

- Add-on "removed from repository" notification [\#100](https://github.com/modbus2mqtt/modbus2mqtt/issues/100)

**Merged pull requests:**

- Modbuscache [\#105](https://github.com/modbus2mqtt/modbus2mqtt/pull/105) ([volkmarnissen](https://github.com/volkmarnissen))
- introduce junit reports for test output [\#104](https://github.com/modbus2mqtt/modbus2mqtt/pull/104) ([volkmarnissen](https://github.com/volkmarnissen))
- Disable failing test [\#103](https://github.com/modbus2mqtt/modbus2mqtt/pull/103) ([volkmarnissen](https://github.com/volkmarnissen))
- Jest coverage report and markdown preparation [\#102](https://github.com/modbus2mqtt/modbus2mqtt/pull/102) ([volkmarnissen](https://github.com/volkmarnissen))
- Add ModbusCache draft. Not productive [\#101](https://github.com/modbus2mqtt/modbus2mqtt/pull/101) ([volkmarnissen](https://github.com/volkmarnissen))
- Update introduction.md [\#99](https://github.com/modbus2mqtt/modbus2mqtt/pull/99) ([modbus2mqtt](https://github.com/modbus2mqtt))
- Adding test to check if specifications with discrete inputs and coils… [\#98](https://github.com/modbus2mqtt/modbus2mqtt/pull/98) ([arturmietek](https://github.com/arturmietek))
- rename backendTCP Test because it's failing [\#97](https://github.com/modbus2mqtt/modbus2mqtt/pull/97) ([volkmarnissen](https://github.com/volkmarnissen))
- rename backendTCP Test because it's failing [\#96](https://github.com/modbus2mqtt/modbus2mqtt/pull/96) ([volkmarnissen](https://github.com/volkmarnissen))
- Modbus2mqtt [\#95](https://github.com/modbus2mqtt/modbus2mqtt/pull/95) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix BackendTCP [\#94](https://github.com/modbus2mqtt/modbus2mqtt/pull/94) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix BackendTCP [\#93](https://github.com/modbus2mqtt/modbus2mqtt/pull/93) ([volkmarnissen](https://github.com/volkmarnissen))
- Added status page for modbus errors per slave, cypress tests [\#92](https://github.com/modbus2mqtt/modbus2mqtt/pull/92) ([volkmarnissen](https://github.com/volkmarnissen))
- Adding discrete inputs, rewriten logic for writing registers [\#88](https://github.com/modbus2mqtt/modbus2mqtt/pull/88) ([arturmietek](https://github.com/arturmietek))

## [v0.16.25](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.25) (2025-01-16)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.24...v0.16.25)

**Merged pull requests:**

- v0.16.25: Fix decimal places: Passing unchanged value to payload [\#85](https://github.com/modbus2mqtt/modbus2mqtt/pull/85) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.24](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.24) (2025-01-15)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.23...v0.16.24)

**Closed issues:**

- HA discovery messages are published without retain flag [\#82](https://github.com/modbus2mqtt/modbus2mqtt/issues/82)
- Number precision missing in HA [\#81](https://github.com/modbus2mqtt/modbus2mqtt/issues/81)
- \[BUG\] changing UOM doesn't work via GUI [\#80](https://github.com/modbus2mqtt/modbus2mqtt/issues/80)
- \[BUG\] Variable Properties -\> Unit of Measurement -\> Referenced Entity not selectable [\#79](https://github.com/modbus2mqtt/modbus2mqtt/issues/79)

**Merged pull requests:**

- v0.16.24: Fix package.json [\#84](https://github.com/modbus2mqtt/modbus2mqtt/pull/84) ([volkmarnissen](https://github.com/volkmarnissen))
- Fixes [\#83](https://github.com/modbus2mqtt/modbus2mqtt/pull/83) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.23](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.23) (2025-01-02)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.22...v0.16.23)

**Closed issues:**

- Unable to read uint23 [\#70](https://github.com/modbus2mqtt/modbus2mqtt/issues/70)

**Merged pull requests:**

- MQTT: Fix sending ModbusValues parsing errors [\#77](https://github.com/modbus2mqtt/modbus2mqtt/pull/77) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.22](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.22) (2025-01-02)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.21...v0.16.22)

**Merged pull requests:**

- v0.16.21 Add int32 and unsigned int 32 [\#76](https://github.com/modbus2mqtt/modbus2mqtt/pull/76) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.21](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.21) (2024-12-31)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.20...v0.16.21)

**Merged pull requests:**

- v0.16.21 [\#75](https://github.com/modbus2mqtt/modbus2mqtt/pull/75) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.20](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.20) (2024-12-30)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.19...v0.16.20)

**Merged pull requests:**

- v0.16.20 [\#74](https://github.com/modbus2mqtt/modbus2mqtt/pull/74) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.19](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.19) (2024-12-29)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.18...v0.16.19)

**Implemented enhancements:**

- standalone Docker Version [\#25](https://github.com/modbus2mqtt/modbus2mqtt/issues/25)

**Closed issues:**

- Update Modbus \<=\> MQTT from 0.16.16 to version 0.16.17 fails [\#71](https://github.com/modbus2mqtt/modbus2mqtt/issues/71)
- Addon cannot start after github token expiration [\#68](https://github.com/modbus2mqtt/modbus2mqtt/issues/68)

**Merged pull requests:**

- v0.16.19: Fix poll issue [\#73](https://github.com/modbus2mqtt/modbus2mqtt/pull/73) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.18](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.18) (2024-12-28)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.17...v0.16.18)

## [v0.16.17](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.17) (2024-12-28)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.16...v0.16.17)

**Closed issues:**

- Crash on new 0.16.16 version [\#67](https://github.com/modbus2mqtt/modbus2mqtt/issues/67)

**Merged pull requests:**

- Remove npm Dependency from server [\#72](https://github.com/modbus2mqtt/modbus2mqtt/pull/72) ([modbus2mqtt](https://github.com/modbus2mqtt))
- root Topic, web service, precision, MQTT Discovery fixes [\#69](https://github.com/modbus2mqtt/modbus2mqtt/pull/69) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.16](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.16) (2024-12-13)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.15...v0.16.16)

**Implemented enhancements:**

- \[FEAT\] support for special values in Number registers [\#36](https://github.com/modbus2mqtt/modbus2mqtt/issues/36)

**Fixed bugs:**

- Template variable warning: 'dict object' has no attribute 'ch3c1currentvalue' when rendering '{{ value\_json.ch3c1currentvalue }}' [\#63](https://github.com/modbus2mqtt/modbus2mqtt/issues/63)

**Closed issues:**

- Set Unit of measurement for selected device classes [\#62](https://github.com/modbus2mqtt/modbus2mqtt/issues/62)
- Add MQTT qos to discovery and subscription [\#61](https://github.com/modbus2mqtt/modbus2mqtt/issues/61)

**Merged pull requests:**

- Fix cypress test [\#66](https://github.com/modbus2mqtt/modbus2mqtt/pull/66) ([volkmarnissen](https://github.com/volkmarnissen))
- value template, decimal places and fixes for mqtt discovery, contribution [\#65](https://github.com/modbus2mqtt/modbus2mqtt/pull/65) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.15](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.15) (2024-12-11)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.14...v0.16.15)

**Closed issues:**

- Set Github Personal Token in Addon Scenario not possible [\#59](https://github.com/modbus2mqtt/modbus2mqtt/issues/59)

**Merged pull requests:**

- Hassio addon [\#64](https://github.com/modbus2mqtt/modbus2mqtt/pull/64) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.14](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.14) (2024-11-22)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.13...v0.16.14)

**Merged pull requests:**

- Fixes for MQTT discovery and minor UI changes [\#60](https://github.com/modbus2mqtt/modbus2mqtt/pull/60) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.13](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.13) (2024-11-19)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.12...v0.16.13)

**Merged pull requests:**

- Fix e2e Test [\#58](https://github.com/modbus2mqtt/modbus2mqtt/pull/58) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix e2e test [\#57](https://github.com/modbus2mqtt/modbus2mqtt/pull/57) ([volkmarnissen](https://github.com/volkmarnissen))
- E2e Test [\#56](https://github.com/modbus2mqtt/modbus2mqtt/pull/56) ([volkmarnissen](https://github.com/volkmarnissen))
- E2e Test [\#55](https://github.com/modbus2mqtt/modbus2mqtt/pull/55) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix e2e test [\#54](https://github.com/modbus2mqtt/modbus2mqtt/pull/54) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix e2e Test [\#53](https://github.com/modbus2mqtt/modbus2mqtt/pull/53) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix e2e test [\#52](https://github.com/modbus2mqtt/modbus2mqtt/pull/52) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix e2e test [\#51](https://github.com/modbus2mqtt/modbus2mqtt/pull/51) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix e2e test [\#50](https://github.com/modbus2mqtt/modbus2mqtt/pull/50) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix 2e2e test [\#49](https://github.com/modbus2mqtt/modbus2mqtt/pull/49) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix e2e test [\#48](https://github.com/modbus2mqtt/modbus2mqtt/pull/48) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix e2e Test [\#47](https://github.com/modbus2mqtt/modbus2mqtt/pull/47) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix package.json [\#46](https://github.com/modbus2mqtt/modbus2mqtt/pull/46) ([volkmarnissen](https://github.com/volkmarnissen))
- Fix for signed int16 data, Restore public version in specifications, Update validation messages after modbus value change [\#45](https://github.com/modbus2mqtt/modbus2mqtt/pull/45) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.12](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.12) (2024-11-15)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.11...v0.16.12)

**Fixed bugs:**

- Standalone docker container: No registration of user possible [\#26](https://github.com/modbus2mqtt/modbus2mqtt/issues/26)

**Closed issues:**

- Conflict with zigbee2mqtt - zigbee devices disappears [\#40](https://github.com/modbus2mqtt/modbus2mqtt/issues/40)
- \[Manufacturer related\] Unable to use negative temperatures [\#39](https://github.com/modbus2mqtt/modbus2mqtt/issues/39)
- \[FEAT\] Set availability of datapoint based on config-value [\#35](https://github.com/modbus2mqtt/modbus2mqtt/issues/35)
- \[BUG\] Measurements missing "state\_class: measurement" [\#34](https://github.com/modbus2mqtt/modbus2mqtt/issues/34)
- \[BUG\] Poll Interval not shown on creating slave [\#33](https://github.com/modbus2mqtt/modbus2mqtt/issues/33)
- \[FEAT\] disable auth [\#31](https://github.com/modbus2mqtt/modbus2mqtt/issues/31)
- \[FEAT\] support anonymous mqtt-connection [\#30](https://github.com/modbus2mqtt/modbus2mqtt/issues/30)

**Merged pull requests:**

- Check all user services after reset [\#44](https://github.com/modbus2mqtt/modbus2mqtt/pull/44) ([volkmarnissen](https://github.com/volkmarnissen))
- MQTT discovery state\_class, logon/MQTT no authentication [\#43](https://github.com/modbus2mqtt/modbus2mqtt/pull/43) ([volkmarnissen](https://github.com/volkmarnissen))
- Merge pull request \#2 from modbus2mqtt/main [\#42](https://github.com/modbus2mqtt/modbus2mqtt/pull/42) ([volkmarnissen](https://github.com/volkmarnissen))
- Add cypress tests in ci [\#41](https://github.com/modbus2mqtt/modbus2mqtt/pull/41) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.11](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.11) (2024-10-26)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.10...v0.16.11)

**Merged pull requests:**

- Fix for Hassio addon logon should not be required [\#29](https://github.com/modbus2mqtt/modbus2mqtt/pull/29) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.10](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.10) (2024-10-26)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.9...v0.16.10)

**Closed issues:**

- Unable to download local setting zip [\#23](https://github.com/modbus2mqtt/modbus2mqtt/issues/23)
- Number is not updated, when value changes in home assistant [\#22](https://github.com/modbus2mqtt/modbus2mqtt/issues/22)
- Uploaded image files are not visible in specification image gallery [\#21](https://github.com/modbus2mqtt/modbus2mqtt/issues/21)
- Version 0.16.8 bus poll error [\#20](https://github.com/modbus2mqtt/modbus2mqtt/issues/20)

**Merged pull requests:**

- Fix for hassio Addon [\#28](https://github.com/modbus2mqtt/modbus2mqtt/pull/28) ([volkmarnissen](https://github.com/volkmarnissen))
- Fixes: standalone container: register user was not allowed [\#27](https://github.com/modbus2mqtt/modbus2mqtt/pull/27) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.9](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.9) (2024-10-23)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.8...v0.16.9)

**Merged pull requests:**

- Add step property for Discovery, fix modbus TCP, Fix file uploads, fix authentication [\#24](https://github.com/modbus2mqtt/modbus2mqtt/pull/24) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.8](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.8) (2024-10-16)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.7...v0.16.8)

**Closed issues:**

- Unable to change modbus poll interval [\#17](https://github.com/modbus2mqtt/modbus2mqtt/issues/17)
- Unable to start modbus2mqtt on HA - error "MQTT client is not connected" [\#15](https://github.com/modbus2mqtt/modbus2mqtt/issues/15)

**Merged pull requests:**

- Fix build issues with octokit [\#19](https://github.com/modbus2mqtt/modbus2mqtt/pull/19) ([volkmarnissen](https://github.com/volkmarnissen))
- New Features and fix for tcp/ip timeout [\#18](https://github.com/modbus2mqtt/modbus2mqtt/pull/18) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.7](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.7) (2024-09-24)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.6...v0.16.7)

**Merged pull requests:**

- Add Topics and Payload to select slave UI [\#16](https://github.com/modbus2mqtt/modbus2mqtt/pull/16) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.6](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.6) (2024-09-16)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.5...v0.16.6)

**Closed issues:**

- unable to edit specification [\#13](https://github.com/modbus2mqtt/modbus2mqtt/issues/13)
- Default modbus2mqtt.yaml [\#11](https://github.com/modbus2mqtt/modbus2mqtt/issues/11)

**Merged pull requests:**

- Hassio addon [\#14](https://github.com/modbus2mqtt/modbus2mqtt/pull/14) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.5](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.5) (2024-09-06)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.4...v0.16.5)

**Merged pull requests:**

- Fixes for Validation, Contribution and Specification Detection [\#12](https://github.com/modbus2mqtt/modbus2mqtt/pull/12) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.4](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.4) (2024-08-28)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.3...v0.16.4)

**Merged pull requests:**

- Fixes for Homeassistant Addon MQTT processing [\#10](https://github.com/modbus2mqtt/modbus2mqtt/pull/10) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.3](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.3) (2024-08-23)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.2...v0.16.3)

**Fixed bugs:**

- Fixes for Unit Tests\(and CI/CD\) [\#9](https://github.com/modbus2mqtt/modbus2mqtt/pull/9) ([volkmarnissen](https://github.com/volkmarnissen))

**Merged pull requests:**

- Increment supervisor http request timeout [\#8](https://github.com/modbus2mqtt/modbus2mqtt/pull/8) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.2](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.2) (2024-08-23)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.1...v0.16.2)

**Merged pull requests:**

- When MQTT fails during startup, the server stops is fixed [\#7](https://github.com/modbus2mqtt/modbus2mqtt/pull/7) ([volkmarnissen](https://github.com/volkmarnissen))
- Working version of release.py [\#6](https://github.com/modbus2mqtt/modbus2mqtt/pull/6) ([volkmarnissen](https://github.com/volkmarnissen))
- Add release.py script [\#5](https://github.com/modbus2mqtt/modbus2mqtt/pull/5) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.1](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.1) (2024-08-21)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.16.0...v0.16.1)

**Merged pull requests:**

- Add sript for release process [\#4](https://github.com/modbus2mqtt/modbus2mqtt/pull/4) ([volkmarnissen](https://github.com/volkmarnissen))
- Homeassistant Addon doesn't start [\#3](https://github.com/modbus2mqtt/modbus2mqtt/pull/3) ([volkmarnissen](https://github.com/volkmarnissen))
- Copy rootfs fix [\#2](https://github.com/modbus2mqtt/modbus2mqtt/pull/2) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.16.0](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.16.0) (2024-08-19)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.15.0...v0.16.0)

**Merged pull requests:**

- Added Release Process [\#1](https://github.com/modbus2mqtt/modbus2mqtt/pull/1) ([volkmarnissen](https://github.com/volkmarnissen))

## [v0.15.0](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.15.0) (2024-08-16)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.13.0...v0.15.0)

## [v0.13.0](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.13.0) (2024-08-16)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.12.0...v0.13.0)

## [v0.12.0](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.12.0) (2024-08-06)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/v0.11.0...v0.12.0)

## [v0.11.0](https://github.com/modbus2mqtt/modbus2mqtt/tree/v0.11.0) (2024-08-05)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/0.10.0...v0.11.0)

## [0.10.0](https://github.com/modbus2mqtt/modbus2mqtt/tree/0.10.0) (2024-07-26)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/0.9.0...0.10.0)

## [0.9.0](https://github.com/modbus2mqtt/modbus2mqtt/tree/0.9.0) (2024-07-25)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/0.8.0...0.9.0)

## [0.8.0](https://github.com/modbus2mqtt/modbus2mqtt/tree/0.8.0) (2024-06-21)

[Full Changelog](https://github.com/modbus2mqtt/modbus2mqtt/compare/b6bee56df33b93d55bdf24b8406309787967d879...0.8.0)



\* *This Changelog was automatically generated by [github_changelog_generator](https://github.com/github-changelog-generator/github-changelog-generator)*
