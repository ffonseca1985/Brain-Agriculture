#!/bin/bash

GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GREEN}RUN FRONTEND.${NC}"
cd ./frontend

npm install
npm run start