#!/usr/bin/python3
# -*- coding: UTF-8 -*-
import pymysql
import sys
import json

db = pymysql.connect(host='localhost', user='phpmyadmin', password='@!Phmyp99', database='life')
cursor = db.cursor()
cursor.execute("select * from learn")

data = []
results = cursor.fetchall()
for row in results:
    item = {}
    item['id'] = row[0]
    item['name'] = row[1]
    item['pageAll'] = row[2]
    item['pageNow'] = row[3]
    item['done'] = row[4]
    item['todo'] = row[5]
    data.append(item);
cursor.close()
db.close()

print("Content-type: text/html;charset=utf-8\n\n")
print(json.dumps(data))
