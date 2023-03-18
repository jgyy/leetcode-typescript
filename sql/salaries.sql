USE mysql;
DROP TABLE IF EXISTS Salaries;
Create table If Not Exists Salaries (
    id int,
    employee_id int,
    amount int,
    pay_date date,
    name varchar(100),
    sex char(1),
    salary int,
    company_id int,
    employee_name varchar(13)
);
Truncate table Salaries;
insert into Salaries (id, employee_id, amount, pay_date)
values ('1', '1', '9000', '2017/03/31');
insert into Salaries (id, employee_id, amount, pay_date)
values ('2', '2', '6000', '2017/03/31');
insert into Salaries (id, employee_id, amount, pay_date)
values ('3', '3', '10000', '2017/03/31');
insert into Salaries (id, employee_id, amount, pay_date)
values ('4', '1', '7000', '2017/02/28');
insert into Salaries (id, employee_id, amount, pay_date)
values ('5', '2', '6000', '2017/02/28');
insert into Salaries (id, employee_id, amount, pay_date)
values ('6', '3', '8000', '2017/02/28');
insert into Salaries (id, name, sex, salary)
values ('1', 'A', 'm', '2500');
insert into Salaries (id, name, sex, salary)
values ('2', 'B', 'f', '1500');
insert into Salaries (id, name, sex, salary)
values ('3', 'C', 'm', '5500');
insert into Salaries (id, name, sex, salary)
values ('4', 'D', 'f', '500');
insert into Salaries (company_id, employee_id, employee_name, salary)
values ('1', '1', 'Tony', '2000');
insert into Salaries (company_id, employee_id, employee_name, salary)
values ('1', '2', 'Pronub', '21300');
insert into Salaries (company_id, employee_id, employee_name, salary)
values ('1', '3', 'Tyrrox', '10800');
insert into Salaries (company_id, employee_id, employee_name, salary)
values ('2', '1', 'Pam', '300');
insert into Salaries (company_id, employee_id, employee_name, salary)
values ('2', '7', 'Bassem', '450');
insert into Salaries (company_id, employee_id, employee_name, salary)
values ('2', '9', 'Hermione', '700');
insert into Salaries (company_id, employee_id, employee_name, salary)
values ('3', '7', 'Bocaben', '100');
insert into Salaries (company_id, employee_id, employee_name, salary)
values ('3', '2', 'Ognjen', '2200');
insert into Salaries (company_id, employee_id, employee_name, salary)
values ('3', '13', 'Nyancat', '3300');
insert into Salaries (company_id, employee_id, employee_name, salary)
values ('3', '15', 'Morninngcat', '7777');
SELECT *
FROM Salaries;