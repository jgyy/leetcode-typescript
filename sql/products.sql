USE mysql;
DROP TABLE IF EXISTS Products;
Create table Products (
    product_key int,
    product_id int,
    product_name varchar(40),
    product_category varchar(40),
    unit_price int,
    new_price int,
    change_date date
);
Truncate table Products;
insert into Products (product_key)
values ('5');
insert into Products (product_key)
values ('6');
insert into Products (product_id, product_name)
values ('100', 'Nokia');
insert into Products (product_id, product_name)
values ('200', 'Apple');
insert into Products (product_id, product_name)
values ('300', 'Samsung');
insert into Products (product_id, product_name, unit_price)
values ('1', 'S8', '1000');
insert into Products (product_id, product_name, unit_price)
values ('2', 'G4', '800');
insert into Products (product_id, product_name, unit_price)
values ('3', 'iPhone', '1400');
insert into Products (product_id, new_price, change_date)
values ('1', '20', '2019-08-14');
insert into Products (product_id, new_price, change_date)
values ('2', '50', '2019-08-14');
insert into Products (product_id, new_price, change_date)
values ('1', '30', '2019-08-15');
insert into Products (product_id, new_price, change_date)
values ('1', '35', '2019-08-16');
insert into Products (product_id, new_price, change_date)
values ('2', '65', '2019-08-17');
insert into Products (product_id, new_price, change_date)
values ('3', '20', '2019-08-18');
insert into Products (product_id, product_name, product_category)
values ('1', 'Leetcode Solutions', 'Book');
insert into Products (product_id, product_name, product_category)
values ('2', 'Jewels of Stringology', 'Book');
insert into Products (product_id, product_name, product_category)
values ('3', 'HP', 'Laptop');
insert into Products (product_id, product_name, product_category)
values ('4', 'Lenovo', 'Laptop');
insert into Products (product_id, product_name, product_category)
values ('5', 'Leetcode Kit', 'T-shirt');
SELECT *
FROM Products;