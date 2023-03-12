USE mysql;
DROP TABLE IF EXISTS Student;
Create table If Not Exists Student (
    student_id int,
    student_name varchar(45),
    name varchar(50),
    continent varchar(7),
    gender varchar(6),
    dept_id int
);
Truncate table Student;
insert into Student (student_id, student_name, gender, dept_id)
values ('1', 'Jack', 'M', '1');
insert into Student (student_id, student_name, gender, dept_id)
values ('2', 'Jane', 'F', '1');
insert into Student (student_id, student_name, gender, dept_id)
values ('3', 'Mark', 'M', '2');
insert into Student (name, continent)
values ('Jane', 'America');
insert into Student (name, continent)
values ('Pascal', 'Europe');
insert into Student (name, continent)
values ('Xi', 'Asia');
insert into Student (name, continent)
values ('Jack', 'America');
SELECT *
FROM Student;