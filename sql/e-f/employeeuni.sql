USE mysql;
DROP TABLE IF EXISTS EmployeeUNI;
Create table If Not Exists EmployeeUNI (id int, unique_id int);
Truncate table EmployeeUNI;
insert into EmployeeUNI (id, unique_id)
values ('3', '1');
insert into EmployeeUNI (id, unique_id)
values ('11', '2');
insert into EmployeeUNI (id, unique_id)
values ('90', '3');
SELECT *
FROM EmployeeUNI;