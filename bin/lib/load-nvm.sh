#!/usr/bin/bash

if [ `command -v nvm` ]; then
  bash lib/prepare-lib.sh;
else
  source ~/.nvm/nvm.sh;
  if [ ! `command -v nvm` ]; then
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  fi;
  bash lib/prepare-lib.sh;
fi;