USE mysql;
DROP TABLE IF EXISTS SchoolA;
Create table If Not Exists SchoolA (student_id int, student_name varchar(20));
Truncate table SchoolA;
insert into SchoolA (student_id, student_name)
values ('1', 'Alice');
insert into SchoolA (student_id, student_name)
values ('2', 'Bob');
SELECT *
FROM SchoolA;