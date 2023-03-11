USE mysql;
DROP TABLE IF EXISTS Customers;
Create table If Not Exists Customers (id int, name varchar(255));
Truncate table Customers;
insert into Customers (id, name)
values ('1', 'Joe');
insert into Customers (id, name)
values ('2', 'Henry');
insert into Customers (id, name)
values ('3', 'Sam');
insert into Customers (id, name)
values ('4', 'Max');
SELECT *
FROM Customers;