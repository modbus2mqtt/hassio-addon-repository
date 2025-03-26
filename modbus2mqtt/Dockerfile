ARG BUILD_FROM
# Build arguments
ARG BUILD_ARCH
ARG BUILD_DATE
ARG BUILD_DESCRIPTION
ARG BUILD_NAME
ARG BUILD_REF
ARG BUILD_REPOSITORY
ARG BUILD_VERSION
FROM $BUILD_FROM
WORKDIR /usr/app
RUN apk add --update --no-cache git py3-psutil \   
    openssh-client 
COPY rootfs/ /
RUN echo '{}' >package.json && \
    npm install --omit-dev @modbus2mqtt/server@${BUILD_VERSION} 

# @serialport/bindings-cpp might need recompilation. 
# Otherwise one could use npx @modbus2mqtt/server directly
RUN apk --print-arch && \
    alpineArch="$(apk --print-arch)" && \
    if [ "x86_64" != "${alpineArch}"  ] ; then \
    apk update && \
    apk upgrade && \
    apk add  --update --no-cache && \
    echo "Start installing build components" \
    apk add g++ make build-base linux-headers udev  && \
    fi
RUN apk --print-arch && \
    alpineArch="$(apk --print-arch)" && \
    if [ "x86_64" != "${alpineArch}"  ] ; then \
    echo "Start rebuild components" \
    npm rebuild @serialport/bindings-cpp --build-from-source; \
    fi
# Health check
HEALTHCHECK --start-period=10m \
    CMD curl --fail http://127.0.0.1:3000 || exit 1



# Labels
LABEL \
    io.hass.name="${BUILD_NAME}" \
    io.hass.description="${BUILD_DESCRIPTION}" \
    io.hass.arch="${BUILD_ARCH}" \
    io.hass.type="addon" \
    io.hass.version=${BUILD_VERSION}  
LABEL \    
    maintainer="Volkmar Nissen <volkmar.nissen@gmail.com>" \
    org.opencontainers.image.title="${BUILD_NAME}" \
    org.opencontainers.image.description="${BUILD_DESCRIPTION}" \
    org.opencontainers.image.vendor="Carcam 360" \
    org.opencontainers.image.authors="Volkmar Nissen <volkmar.nissen@gmail.com>" \
    org.opencontainers.image.licenses="MIT" \
    org.opencontainers.image.url="https://github.com/modbus2mqtt/hassio-addon-repository" \
    org.opencontainers.image.source="https://github.com/${BUILD_REPOSITORY}" 
LABEL \    
    org.opencontainers.image.documentation="https://github.com/${BUILD_REPOSITORY}/blob/main/README.md" \
    org.opencontainers.image.created=${BUILD_DATE} \
    org.opencontainers.image.revision=${BUILD_REF} \
    org.opencontainers.image.version=${BUILD_VERSION} 
