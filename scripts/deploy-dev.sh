#!/bin/bash
ssh root@46.149.66.57 "rm -rf /var/www/atomic_frontend/"
rsync -avz ~/Developer/atomic-tech-frontend/ root@46.149.66.57:/var/www/atomic_frontend/