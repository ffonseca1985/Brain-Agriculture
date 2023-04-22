#!/bin/bash

BLUE='\033[34m'
NC='\033[0m'

echo -e "${BLUE}initializing projects.${NC}"
./init/back.sh & ./init/front.sh