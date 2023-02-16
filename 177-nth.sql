USE mysql;
Create table If Not Exists Employee (Id int, Salary int);
Truncate table Employee;
insert into Employee (id, salary)
values ('1', '100');
insert into Employee (id, salary)
values ('2', '200');
insert into Employee (id, salary)
values ('3', '300');
-- Write an SQL query to report the nth highest salary from the Employee table. If there is no nth highest salary, the query should report null.
Create Function getNthHighestSalary(N int) Returns int Begin
Declare M int;
Set M = N - 1;
Return (
    -- Write your MySQL query statement below.
    select ifnull(
            (
                select distinct salary
                from Employee
                order by salary desc
                limit 1 offset M
            ),
            null
        )
);
End