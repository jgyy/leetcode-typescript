USE mysql;
DROP TABLE IF EXISTS Items;
Create table If Not Exists Items (
    item_brand varchar(10),
    item_id varchar(30),
    item_name varchar(30),
    item_category varchar(30)
);
Truncate table Items;
insert into Items (item_id, item_brand)
values ('1', 'Samsung');
insert into Items (item_id, item_brand)
values ('2', 'Lenovo');
insert into Items (item_id, item_brand)
values ('3', 'LG');
insert into Items (item_id, item_brand)
values ('4', 'HP');
insert into Items (item_id, item_name, item_category)
values ('1', 'LC Alg. Book', 'Book');
insert into Items (item_id, item_name, item_category)
values ('2', 'LC DB. Book', 'Book');
insert into Items (item_id, item_name, item_category)
values ('3', 'LC SmarthPhone', 'Phone');
insert into Items (item_id, item_name, item_category)
values ('4', 'LC Phone 2020', 'Phone');
insert into Items (item_id, item_name, item_category)
values ('5', 'LC SmartGlass', 'Glasses');
insert into Items (item_id, item_name, item_category)
values ('6', 'LC T-Shirt XL', 'T-shirt');
SELECT *
FROM Items;