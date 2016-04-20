#!/bin/bash
# Usage:
# Go to your git project:
#   cd my_project
# Then run:
#   ./encrypt-deploy-key.sh <path to deploy key>

SSH_KEY_PATH=$1

if [[ ! $(which travis) ]]; then
    gem install travis
fi

travis login --pro --auto
travis encrypt-file ${SSH_KEY_PATH} --add
