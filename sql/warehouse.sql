USE mysql;
DROP TABLE IF EXISTS Warehouse;
Create table If Not Exists Warehouse (name varchar(50), product_id int, units int);
Truncate table Warehouse;
insert into Warehouse (name, product_id, units)
values ('LCHouse1', '1', '1');
insert into Warehouse (name, product_id, units)
values ('LCHouse1', '2', '10');
insert into Warehouse (name, product_id, units)
values ('LCHouse1', '3', '5');
insert into Warehouse (name, product_id, units)
values ('LCHouse2', '1', '2');
insert into Warehouse (name, product_id, units)
values ('LCHouse2', '2', '2');
insert into Warehouse (name, product_id, units)
values ('LCHouse3', '4', '1');
SELECT *
FROM Warehouse;