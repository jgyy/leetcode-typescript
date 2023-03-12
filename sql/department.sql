USE mysql;
DROP TABLE IF EXISTS Department;
Create table If Not Exists Department (
    id int,
    dept_id int,
    name varchar(255),
    dept_name varchar(255)
);
Truncate table Department;
insert into Department (id, name)
values ('1', 'IT');
insert into Department (id, name)
values ('2', 'Sales');
insert into Department (dept_id, dept_name)
values ('1', 'Engineering');
insert into Department (dept_id, dept_name)
values ('2', 'Science');
insert into Department (dept_id, dept_name)
values ('3', 'Law');
SELECT *
FROM Department;