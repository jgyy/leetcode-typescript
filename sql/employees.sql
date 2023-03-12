USE mysql;
DROP TABLE IF EXISTS Employees;
Create table If Not Exists Employees (
    id int,
    department_id int,
    manager_id int,
    employee_id int,
    team_id int,
    name varchar(30),
    company varchar(255),
    department varchar(255),
    supervisor int,
    month int,
    salary int,
    experience_years int
);
Truncate table Employees;
insert into Employees (id, salary)
values ('1', '100');
insert into Employees (id, salary)
values ('2', '200');
insert into Employees (id, salary)
values ('3', '300');
insert into Employees (id, name, salary, manager_id)
values ('1', 'Joe', '70000', '3');
insert into Employees (id, name, salary, manager_id)
values ('2', 'Henry', '80000', '4');
insert into Employees (id, name, salary, manager_id)
values ('3', 'Sam', '60000', NULL);
insert into Employees (id, name, salary, manager_id)
values ('4', 'Max', '90000', NULL);
insert into Employees (id, name, salary, department_id)
values ('1', 'Joe', '70000', '1');
insert into Employees (id, name, salary, department_id)
values ('2', 'Jim', '90000', '1');
insert into Employees (id, name, salary, department_id)
values ('3', 'Henry', '80000', '2');
insert into Employees (id, name, salary, department_id)
values ('4', 'Sam', '60000', '2');
insert into Employees (id, name, salary, department_id)
values ('5', 'Max', '90000', '1');
insert into Employees (id, name, salary, department_id)
values ('1', 'Joe', '85000', '1');
insert into Employees (id, name, salary, department_id)
values ('2', 'Henry', '80000', '2');
insert into Employees (id, name, salary, department_id)
values ('3', 'Sam', '60000', '2');
insert into Employees (id, name, salary, department_id)
values ('4', 'Max', '90000', '1');
insert into Employees (id, name, salary, department_id)
values ('5', 'Janet', '69000', '1');
insert into Employees (id, name, salary, department_id)
values ('6', 'Randy', '85000', '1');
insert into Employees (id, name, salary, department_id)
values ('7', 'Will', '70000', '1');
insert into Employees (id, company, salary)
values ('1', 'A', '2341');
insert into Employees (id, company, salary)
values ('2', 'A', '341');
insert into Employees (id, company, salary)
values ('3', 'A', '15');
insert into Employees (id, company, salary)
values ('4', 'A', '15314');
insert into Employees (id, company, salary)
values ('5', 'A', '451');
insert into Employees (id, company, salary)
values ('6', 'A', '513');
insert into Employees (id, company, salary)
values ('7', 'B', '15');
insert into Employees (id, company, salary)
values ('8', 'B', '13');
insert into Employees (id, company, salary)
values ('9', 'B', '1154');
insert into Employees (id, company, salary)
values ('10', 'B', '1345');
insert into Employees (id, company, salary)
values ('11', 'B', '1221');
insert into Employees (id, company, salary)
values ('12', 'B', '234');
insert into Employees (id, company, salary)
values ('13', 'C', '2345');
insert into Employees (id, company, salary)
values ('14', 'C', '2645');
insert into Employees (id, company, salary)
values ('15', 'C', '2645');
insert into Employees (id, company, salary)
values ('16', 'C', '2652');
insert into Employees (id, company, salary)
values ('17', 'C', '65');
insert into Employees (id, name, department, manager_id)
values ('101', 'John', 'A', Null);
insert into Employees (id, name, department, manager_id)
values ('102', 'Dan', 'A', '101');
insert into Employees (id, name, department, manager_id)
values ('103', 'James', 'A', '101');
insert into Employees (id, name, department, manager_id)
values ('104', 'Amy', 'A', '101');
insert into Employees (id, name, department, manager_id)
values ('105', 'Anne', 'A', '101');
insert into Employees (id, name, department, manager_id)
values ('106', 'Ron', 'B', '101');
insert into Employees (id, name, supervisor, salary)
values ('3', 'Brad', Null, '4000');
insert into Employees (id, name, supervisor, salary)
values ('1', 'John', '3', '1000');
insert into Employees (id, name, supervisor, salary)
values ('2', 'Dan', '3', '2000');
insert into Employees (id, name, supervisor, salary)
values ('4', 'Thomas', '3', '4000');
insert into Employees (id, month, salary)
values ('1', '1', '20');
insert into Employees (id, month, salary)
values ('2', '1', '20');
insert into Employees (id, month, salary)
values ('1', '2', '30');
insert into Employees (id, month, salary)
values ('2', '2', '30');
insert into Employees (id, month, salary)
values ('3', '2', '40');
insert into Employees (id, month, salary)
values ('1', '3', '40');
insert into Employees (id, month, salary)
values ('3', '3', '60');
insert into Employees (id, month, salary)
values ('1', '4', '60');
insert into Employees (id, month, salary)
values ('3', '4', '70');
insert into Employees (id, month, salary)
values ('1', '7', '90');
insert into Employees (id, month, salary)
values ('1', '8', '90');
insert into Employees (id, department_id)
values ('1', '1');
insert into Employees (id, department_id)
values ('2', '2');
insert into Employees (id, department_id)
values ('3', '2');
insert into Employees (id, name, experience_years)
values ('1', 'Khaled', '3');
insert into Employees (id, name, experience_years)
values ('2', 'Ali', '2');
insert into Employees (id, name, experience_years)
values ('3', 'John', '1');
insert into Employees (id, name, experience_years)
values ('4', 'Doe', '2');
insert into Employees (id, name, manager_id)
values ('1', 'Boss', '1');
insert into Employees (id, name, manager_id)
values ('3', 'Alice', '3');
insert into Employees (id, name, manager_id)
values ('2', 'Bob', '1');
insert into Employees (id, name, manager_id)
values ('4', 'Daniel', '2');
insert into Employees (id, name, manager_id)
values ('7', 'Luis', '4');
insert into Employees (id, name, manager_id)
values ('8', 'John', '3');
insert into Employees (id, name, manager_id)
values ('9', 'Angela', '8');
insert into Employees (id, name, manager_id)
values ('77', 'Robert', '1');
insert into Employees (employee_id, team_id)
values ('1', '8');
insert into Employees (employee_id, team_id)
values ('2', '8');
insert into Employees (employee_id, team_id)
values ('3', '8');
insert into Employees (employee_id, team_id)
values ('4', '7');
insert into Employees (employee_id, team_id)
values ('5', '9');
insert into Employees (employee_id, team_id)
values ('6', '9');
SELECT *
FROM Employees;