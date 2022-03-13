#!/bin/bash

set -e

mkdir datas public || echo "nothing to create"
./scripts/create-simlink.sh

./scripts/install-engine.sh

./scripts/install-front.sh
