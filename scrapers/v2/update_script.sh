#!/bin/bash

source /etc/bash.bashrc
source /home/ubuntu/.bashrc


python /home/ec2-user/bikeshare/scrapers/v2/database_scraper.py http://divvybikes.com/stations/json chicago
python /home/ec2-user/bikeshare/scrapers/v2/database_scraper.py http://citibikenyc.com/stations/json newyork
