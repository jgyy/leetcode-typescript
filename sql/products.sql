USE mysql;
DROP TABLE IF EXISTS Products;
Create table Products (
    id int,
    name varchar(50),
    category varchar(40),
    product_key int,
    unit_price int,
    new_price int,
    change_date date,
    description varchar(30),
    price int,
    Width int,
    Length int,
    Height int,
    low_fats ENUM('Y', 'N'),
    recyclable ENUM('Y', 'N')
);
Truncate table Products;
insert into Products (product_key)
values ('5');
insert into Products (product_key)
values ('6');
insert into Products (id, name)
values ('100', 'Nokia');
insert into Products (id, name)
values ('200', 'Apple');
insert into Products (id, name)
values ('300', 'Samsung');
insert into Products (id, name, unit_price)
values ('1', 'S8', '1000');
insert into Products (id, name, unit_price)
values ('2', 'G4', '800');
insert into Products (id, name, unit_price)
values ('3', 'iPhone', '1400');
insert into Products (id, new_price, change_date)
values ('1', '20', '2019-08-14');
insert into Products (id, new_price, change_date)
values ('2', '50', '2019-08-14');
insert into Products (id, new_price, change_date)
values ('1', '30', '2019-08-15');
insert into Products (id, new_price, change_date)
values ('1', '35', '2019-08-16');
insert into Products (id, new_price, change_date)
values ('2', '65', '2019-08-17');
insert into Products (id, new_price, change_date)
values ('3', '20', '2019-08-18');
insert into Products (id, name, category)
values ('1', 'Leetcode Solutions', 'Book');
insert into Products (id, name, category)
values ('2', 'Jewels of Stringology', 'Book');
insert into Products (id, name, category)
values ('3', 'HP', 'Laptop');
insert into Products (id, name, category)
values ('4', 'Lenovo', 'Laptop');
insert into Products (id, name, category)
values ('5', 'Leetcode Kit', 'T-shirt');
insert into Products (id, name)
values ('1', 'LC Phone ');
insert into Products (id, name)
values ('2', 'LC T-Shirt');
insert into Products (id, name)
values ('3', 'LC Keychain');
insert into Products (id, description, price)
values ('10', 'LC Phone', '300');
insert into Products (id, description, price)
values ('20', 'LC T-Shirt', '10');
insert into Products (id, description, price)
values ('30', 'LC Book', '45');
insert into Products (id, description, price)
values ('40', 'LC Keychain', '2');
insert into Products (id, name, price)
values ('1', 'keyboard', '120');
insert into Products (id, name, price)
values ('2', 'mouse', '80');
insert into Products (id, name, price)
values ('3', 'screen', '600');
insert into Products (id, name, price)
values ('4', 'hard disk', '450');
insert into Products (id, name, Width, Length, Height)
values ('1', 'LC-TV', '5', '50', '40');
insert into Products (id, name, Width, Length, Height)
values ('2', 'LC-KeyChain', '5', '5', '5');
insert into Products (id, name, Width, Length, Height)
values ('3', 'LC-Phone', '2', '10', '10');
insert into Products (id, name, Width, Length, Height)
values ('4', 'LC-T-Shirt', '4', '10', '20');
insert into Products (id, name, price)
values ('1', 'keyboard', '120');
insert into Products (id, name, price)
values ('2', 'mouse', '80');
insert into Products (id, name, price)
values ('3', 'screen', '600');
insert into Products (id, name, price)
values ('4', 'hard disk', '450');
insert into Products (id, name)
values ('0', 'ham');
insert into Products (id, name)
values ('1', 'bacon');
insert into Products (id, low_fats, recyclable)
values ('0', 'Y', 'N');
insert into Products (id, low_fats, recyclable)
values ('1', 'Y', 'Y');
insert into Products (id, low_fats, recyclable)
values ('2', 'N', 'Y');
insert into Products (id, low_fats, recyclable)
values ('3', 'Y', 'Y');
insert into Products (id, low_fats, recyclable)
values ('4', 'N', 'N');
SELECT *
FROM Products;