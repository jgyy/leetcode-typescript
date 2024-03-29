USE mysql;
DROP TABLE IF EXISTS Employees;
Create table If Not Exists Employees (
    id int,
    team_id int,
    manager_id int,
    name varchar(30),
    company varchar(255),
    department varchar(255),
    month int,
    salary int,
    experience_years int,
    age int,
    event_day date,
    in_time int,
    out_time int,
    primary_flag ENUM('Y', 'N')
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
insert into Employees (id, name, salary, team_id)
values ('1', 'Joe', '70000', '1');
insert into Employees (id, name, salary, team_id)
values ('2', 'Jim', '90000', '1');
insert into Employees (id, name, salary, team_id)
values ('3', 'Henry', '80000', '2');
insert into Employees (id, name, salary, team_id)
values ('4', 'Sam', '60000', '2');
insert into Employees (id, name, salary, team_id)
values ('5', 'Max', '90000', '1');
insert into Employees (id, name, salary, team_id)
values ('1', 'Joe', '85000', '1');
insert into Employees (id, name, salary, team_id)
values ('2', 'Henry', '80000', '2');
insert into Employees (id, name, salary, team_id)
values ('3', 'Sam', '60000', '2');
insert into Employees (id, name, salary, team_id)
values ('4', 'Max', '90000', '1');
insert into Employees (id, name, salary, team_id)
values ('5', 'Janet', '69000', '1');
insert into Employees (id, name, salary, team_id)
values ('6', 'Randy', '85000', '1');
insert into Employees (id, name, salary, team_id)
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
insert into Employees (id, name, team_id, salary)
values ('3', 'Brad', Null, '4000');
insert into Employees (id, name, team_id, salary)
values ('1', 'John', '3', '1000');
insert into Employees (id, name, team_id, salary)
values ('2', 'Dan', '3', '2000');
insert into Employees (id, name, team_id, salary)
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
insert into Employees (id, team_id)
values ('1', '1');
insert into Employees (id, team_id)
values ('2', '2');
insert into Employees (id, team_id)
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
insert into Employees (id, team_id)
values ('1', '8');
insert into Employees (id, team_id)
values ('2', '8');
insert into Employees (id, team_id)
values ('3', '8');
insert into Employees (id, team_id)
values ('4', '7');
insert into Employees (id, team_id)
values ('5', '9');
insert into Employees (id, team_id)
values ('6', '9');
insert into Employees (id, name)
values ('1', 'Alice');
insert into Employees (id, name)
values ('7', 'Bob');
insert into Employees (id, name)
values ('11', 'Meir');
insert into Employees (id, name)
values ('90', 'Winston');
insert into Employees (id, name)
values ('3', 'Jonathan');
insert into Employees (id, name, team_id, age)
values ('9', 'Hercy', NULL, '43');
insert into Employees (id, name, team_id, age)
values ('6', 'Alice', '9', '41');
insert into Employees (id, name, team_id, age)
values ('4', 'Bob', '9', '36');
insert into Employees (id, name, team_id, age)
values ('2', 'Winston', NULL, '37');
insert into Employees (id, event_day, in_time, out_time)
values ('1', '2020-11-28', '4', '32');
insert into Employees (id, event_day, in_time, out_time)
values ('1', '2020-11-28', '55', '200');
insert into Employees (id, event_day, in_time, out_time)
values ('1', '2020-12-3', '1', '42');
insert into Employees (id, event_day, in_time, out_time)
values ('2', '2020-11-28', '3', '33');
insert into Employees (id, event_day, in_time, out_time)
values ('2', '2020-12-9', '47', '74');
insert into Employees (id, team_id, primary_flag)
values ('1', '1', 'N');
insert into Employees (id, team_id, primary_flag)
values ('2', '1', 'Y');
insert into Employees (id, team_id, primary_flag)
values ('2', '2', 'N');
insert into Employees (id, team_id, primary_flag)
values ('3', '3', 'N');
insert into Employees (id, team_id, primary_flag)
values ('4', '2', 'N');
insert into Employees (id, team_id, primary_flag)
values ('4', '3', 'Y');
insert into Employees (id, team_id, primary_flag)
values ('4', '4', 'N');
insert into Employees (id, name, salary)
values ('2', 'Meir', '3000');
insert into Employees (id, name, salary)
values ('3', 'Michael', '3800');
insert into Employees (id, name, salary)
values ('7', 'Addilyn', '7400');
insert into Employees (id, name, salary)
values ('8', 'Juan', '6100');
insert into Employees (id, name, salary)
values ('9', 'Kannon', '7700');
insert into Employees (id, name)
values ('2', 'Crew');
insert into Employees (id, name)
values ('4', 'Haven');
insert into Employees (id, name)
values ('5', 'Kristian');
insert into Employees (id, name, manager_id, salary)
values ('3', 'Mila', '9', '60301');
insert into Employees (id, name, manager_id, salary)
values ('12', 'Antonella', NULL, '31000');
insert into Employees (id, name, manager_id, salary)
values ('13', 'Emery', NULL, '67084');
insert into Employees (id, name, manager_id, salary)
values ('1', 'Kalel', '11', '21241');
insert into Employees (id, name, manager_id, salary)
values ('9', 'Mikaela', NULL, '50937');
insert into Employees (id, name, manager_id, salary)
values ('11', 'Joziah', '6', '28485');
SELECT *
FROM Employees;