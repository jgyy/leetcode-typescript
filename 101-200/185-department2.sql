USE mysql;
Create table If Not Exists Employee (
    id int,
    name varchar(255),
    salary int,
    departmentId int
);
Create table If Not Exists Department (id int, name varchar(255));
Truncate table Employee;
insert into Employee (id, name, salary, departmentId)
values ('1', 'Joe', '85000', '1');
insert into Employee (id, name, salary, departmentId)
values ('2', 'Henry', '80000', '2');
insert into Employee (id, name, salary, departmentId)
values ('3', 'Sam', '60000', '2');
insert into Employee (id, name, salary, departmentId)
values ('4', 'Max', '90000', '1');
insert into Employee (id, name, salary, departmentId)
values ('5', 'Janet', '69000', '1');
insert into Employee (id, name, salary, departmentId)
values ('6', 'Randy', '85000', '1');
insert into Employee (id, name, salary, departmentId)
values ('7', 'Will', '70000', '1');
Truncate table Department;
insert into Department (id, name)
values ('1', 'IT');
insert into Department (id, name)
values ('2', 'Sales');
-- A company's executives are interested in seeing who earns the most money in each of the company's departments. A high earner in a department is an employee who has a salary in the top three unique salaries for that department.
-- Write an SQL query to find the employees who are high earners in each of the departments.
-- Return the result table in any order.
SELECT Department.name AS 'Department',
    Employee.name AS 'Employee',
    Salary
FROM Employee
    JOIN Department ON Employee.DepartmentId = Department.Id
WHERE (Employee.DepartmentId, Salary) IN (
        SELECT DepartmentId,
            Salary
        FROM (
                SELECT DepartmentId,
                    Salary,
                    DENSE_RANK() OVER (
                        PARTITION BY DepartmentId
                        ORDER BY Salary DESC
                    ) AS 'rank'
                FROM Employee
            ) AS E
        WHERE E.rank <= 3
    );