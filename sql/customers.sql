USE mysql;
DROP TABLE IF EXISTS Customers;
Create table If Not Exists Customers (id int, name varchar(255), referee_id int);
Truncate table Customers;
insert into Customers (id, name)
values ('1', 'Joe');
insert into Customers (id, name)
values ('2', 'Henry');
insert into Customers (id, name)
values ('3', 'Sam');
insert into Customers (id, name)
values ('4', 'Max');
insert into Customers (id, name, referee_id)
values ('1', 'Will', Null);
insert into Customers (id, name, referee_id)
values ('2', 'Jane', Null);
insert into Customers (id, name, referee_id)
values ('3', 'Alex', '2');
insert into Customers (id, name, referee_id)
values ('4', 'Bill', Null);
insert into Customers (id, name, referee_id)
values ('5', 'Zack', '1');
insert into Customers (id, name, referee_id)
values ('6', 'Mark', '2');
SELECT *
FROM Customers;