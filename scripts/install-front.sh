#!/bin/bash

set -e
echo "INSTALL FRONT"
cd front
pnpm install && pnpm run build
echo "END INSTALL FRONT"
