USE mysql;
DROP TABLE IF EXISTS SchoolC;
Create table If Not Exists SchoolC (student_id int, student_name varchar(20));
Truncate table SchoolC;
insert into SchoolC (student_id, student_name)
values ('3', 'Tom');
insert into SchoolC (student_id, student_name)
values ('2', 'Jerry');
insert into SchoolC (student_id, student_name)
values ('10', 'Alice');
SELECT *
FROM SchoolC;