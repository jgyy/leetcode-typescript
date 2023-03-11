USE mysql;
Create table If Not Exists Orders (id int, customerId int);
Truncate table Orders;
insert into Orders (id, customerId)
values ('1', '3');
insert into Orders (id, customerId)
values ('2', '1');