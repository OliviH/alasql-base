#!/bin/bash

set -e

./scripts/remove-simlink.sh
sudo rm -Rf datas
sudo rm -Rf node_modules
sudo rm -Rf front/node_modules
sudo rm -Rf front/public/build
