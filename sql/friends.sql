USE mysql;
DROP TABLE IF EXISTS Friends;
Create table If Not Exists Friends (id int, name varchar(30), activity varchar(30));
Truncate table Friends;
insert into Friends (id, name, activity)
values ('1', 'Jonathan D.', 'Eating');
insert into Friends (id, name, activity)
values ('2', 'Jade W.', 'Singing');
insert into Friends (id, name, activity)
values ('3', 'Victor J.', 'Singing');
insert into Friends (id, name, activity)
values ('4', 'Elvis Q.', 'Eating');
insert into Friends (id, name, activity)
values ('5', 'Daniel A.', 'Eating');
insert into Friends (id, name, activity)
values ('6', 'Bob B.', 'Horse Riding');
SELECT *
FROM Friends;