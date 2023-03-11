USE mysql;
DROP TABLE IF EXISTS Department;
Create table If Not Exists Department (id int, name varchar(255));
Truncate table Department;
insert into Department (id, name)
values ('1', 'IT');
insert into Department (id, name)
values ('2', 'Sales');
SELECT *
FROM Department;