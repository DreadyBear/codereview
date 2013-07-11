from bs4 import BeautifulSoup
from types import NoneType
from sys import argv
import os
import datetime
import calendar
from psycopg2 import *

def extract_str(element):
    if type(element) is NoneType:
        return element
    else:
        return element.string

def main(url):
    try:
        conn = psycopg2.connect("dbname="+os.environ.get('dbname')+" user="+os.environ.get('dbuser')+ " host="+os.environ.get('dburl'))
    except:
        print "I am unable to connect to the database"
    r = requests.get(url)

    fulltext = r.text

    soup = BeautifulSoup(fulltext,"xml")
    print soup.find_all("station")[1]
    for station in soup.find_all("station"):
        ident = extract_str(station.find("id"))
        bikes = extract_str(station.find("nbBikes"))
        stations = extract_str(station.find("nbEmptyDocks"))
        timestamp = datetime.datetime.utcnow()
        print "{0},{1},{2},{3}".format(ident, bikes, stations, timestamp)




# #urls = ("http://www.thehubway.com/data/stations/bikeStations.xml", "https://secure.niceridemn.org/data2/bikeStations.xml",
#        "http://www.thehubway.com/data/stations/bikeStations.xml")

main(argv[1])
    
