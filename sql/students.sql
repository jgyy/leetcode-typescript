USE mysql;
DROP TABLE IF EXISTS Students;
Create table If Not Exists Students (
    student_id int,
    student_name varchar(45),
    name varchar(50),
    continent varchar(7),
    gender varchar(6),
    dept_id int,
    id int,
    department_id int
);
Truncate table Students;
insert into Students (student_id, student_name, gender, dept_id)
values ('1', 'Jack', 'M', '1');
insert into Students (student_id, student_name, gender, dept_id)
values ('2', 'Jane', 'F', '1');
insert into Students (student_id, student_name, gender, dept_id)
values ('3', 'Mark', 'M', '2');
insert into Students (name, continent)
values ('Jane', 'America');
insert into Students (name, continent)
values ('Pascal', 'Europe');
insert into Students (name, continent)
values ('Xi', 'Asia');
insert into Students (name, continent)
values ('Jack', 'America');
insert into Students (student_id, student_name)
values ('1', 'Alice');
insert into Students (student_id, student_name)
values ('2', 'Bob');
insert into Students (student_id, student_name)
values ('13', 'John');
insert into Students (student_id, student_name)
values ('6', 'Alex');
insert into Students (id, name, department_id)
values ('23', 'Alice', '1');
insert into Students (id, name, department_id)
values ('1', 'Bob', '7');
insert into Students (id, name, department_id)
values ('5', 'Jennifer', '13');
insert into Students (id, name, department_id)
values ('2', 'John', '14');
insert into Students (id, name, department_id)
values ('4', 'Jasmine', '77');
insert into Students (id, name, department_id)
values ('3', 'Steve', '74');
insert into Students (id, name, department_id)
values ('6', 'Luis', '1');
insert into Students (id, name, department_id)
values ('8', 'Jonathan', '7');
insert into Students (id, name, department_id)
values ('7', 'Daiana', '33');
insert into Students (id, name, department_id)
values ('11', 'Madelynn', '1');
SELECT *
FROM Students;