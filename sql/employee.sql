USE mysql;
DROP TABLE IF EXISTS ;
Create table If Not Exists Employee (
    id int,
    name varchar(255),
    company varchar(255),
    department varchar(255),
    salary int,
    managerId int,
    departmentId int
);
Truncate table Employee;
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('1', 'Joe', 'A', '234100', '3', '1');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('2', 'Henry', 'A', '341000', '4', '2');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('3', 'Sam', 'A', '150000', 'None', '2');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('4', 'Max', 'A', '153140', 'None', '1');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('5', 'Jim', 'A', '451000', 'None', '1');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('6', 'Janet', 'A', '513000', 'None', '1');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('7', 'Randy', 'B', '150000', 'None', '1');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('8', 'Will', 'B', '130000', 'None', '1');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('9', 'Chelsea', 'B', '115400', 'None', '1');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('10', 'Bruce', 'B', '134500', 'None', '1');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('11', 'Mira', 'B', '122100', 'None', '1');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('12', 'Franco', 'B', '234000', 'None', '1');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('13', 'Deja', 'C', '234500', 'None', '1');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('14', 'Terry', 'C', '264500', 'None', '1');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('15', 'Zachariah', 'C', '264500', 'None', '1');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('16', 'Mora', 'C', '265200', 'None', '1');
insert into Employee (
        id,
        name,
        company,
        salary,
        managerId,
        departmentId
    )
values ('17', 'Titus', 'C', '650000', 'None', '1');

Create table If Not Exists Employee (id int, name varchar(255), department varchar(255), managerId int)
Truncate table Employee
insert into Employee (id, name, department, managerId) values ('18', 'John', 'A', 'None')
insert into Employee (id, name, department, managerId) values ('19', 'Dan', 'A', '18')
insert into Employee (id, name, department, managerId) values ('20', 'James', 'A', '18')
insert into Employee (id, name, department, managerId) values ('21', 'Amy', 'A', '18')
insert into Employee (id, name, department, managerId) values ('22', 'Anne', 'A', '18')
insert into Employee (id, name, department, managerId) values ('23', 'Ron', 'B', '18')