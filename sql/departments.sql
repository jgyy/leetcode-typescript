USE mysql;
DROP TABLE IF EXISTS Departments;
Create table If Not Exists Departments (
    id int,
    dept_id int,
    name varchar(30),
    dept_name varchar(255),
    revenue int,
    month varchar(5)
);
Truncate table Departments;
insert into Departments (id, name)
values ('1', 'IT');
insert into Departments (id, name)
values ('2', 'Sales');
insert into Departments (dept_id, dept_name)
values ('1', 'Engineering');
insert into Departments (dept_id, dept_name)
values ('2', 'Science');
insert into Departments (dept_id, dept_name)
values ('3', 'Law');
insert into Departments (id, revenue, month)
values ('1', '8000', 'Jan');
insert into Departments (id, revenue, month)
values ('2', '9000', 'Jan');
insert into Departments (id, revenue, month)
values ('3', '10000', 'Feb');
insert into Departments (id, revenue, month)
values ('1', '7000', 'Feb');
insert into Departments (id, revenue, month)
values ('1', '6000', 'Mar');
insert into Departments (id, name)
values ('1', 'Electrical Engineering');
insert into Departments (id, name)
values ('7', 'Computer Engineering');
insert into Departments (id, name)
values ('13', 'Bussiness Administration');
SELECT *
FROM Departments;