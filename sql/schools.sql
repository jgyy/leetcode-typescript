USE mysql;
DROP TABLE IF EXISTS Schools;
Create table If Not Exists Schools (school_id int, capacity int);
Truncate table Schools;
insert into Schools (school_id, capacity)
values ('11', '151');
insert into Schools (school_id, capacity)
values ('5', '48');
insert into Schools (school_id, capacity)
values ('9', '9');
insert into Schools (school_id, capacity)
values ('10', '99');
SELECT *
FROM Schools;