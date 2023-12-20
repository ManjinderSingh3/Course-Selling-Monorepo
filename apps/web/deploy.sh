#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.1/bin
# node version might be: v21.4.0 on AWS EC2 instance

cd /home/ubuntu/Course-Selling-Monorepo
git pull origin main
yarn install
yarn build
pm2 stop next
pm2 start npm --name "next" --run "start:next"
# The above command is starting a new PM2 process named "next" and running the NPM script "start:next". 