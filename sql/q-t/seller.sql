USE mysql;
DROP TABLE IF EXISTS Seller;
Create table If Not Exists Seller (seller_id int, seller_name varchar(20));
Truncate table Seller;
insert into Seller (seller_id, seller_name)
values ('1', 'Daniel');
insert into Seller (seller_id, seller_name)
values ('2', 'Elizabeth');
insert into Seller (seller_id, seller_name)
values ('3', 'Frank');
SELECT *
FROM Seller;