USE mysql;
DROP TABLE IF EXISTS SchoolB;
Create table If Not Exists SchoolB (student_id int, student_name varchar(20));
Truncate table SchoolB;
insert into SchoolB (student_id, student_name)
values ('3', 'Tom');
SELECT *
FROM SchoolB;