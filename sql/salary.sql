USE mysql;
DROP TABLE IF EXISTS Salary;
Create table If Not Exists Salary (
    id int,
    employee_id int,
    amount int,
    pay_date date,
    name varchar(100),
    sex char(1),
    salary int
);
Truncate table Salary;
insert into Salary (id, employee_id, amount, pay_date)
values ('1', '1', '9000', '2017/03/31');
insert into Salary (id, employee_id, amount, pay_date)
values ('2', '2', '6000', '2017/03/31');
insert into Salary (id, employee_id, amount, pay_date)
values ('3', '3', '10000', '2017/03/31');
insert into Salary (id, employee_id, amount, pay_date)
values ('4', '1', '7000', '2017/02/28');
insert into Salary (id, employee_id, amount, pay_date)
values ('5', '2', '6000', '2017/02/28');
insert into Salary (id, employee_id, amount, pay_date)
values ('6', '3', '8000', '2017/02/28');
insert into Salary (id, name, sex, salary)
values ('1', 'A', 'm', '2500');
insert into Salary (id, name, sex, salary)
values ('2', 'B', 'f', '1500');
insert into Salary (id, name, sex, salary)
values ('3', 'C', 'm', '5500');
insert into Salary (id, name, sex, salary)
values ('4', 'D', 'f', '500');
SELECT *
FROM Salary;