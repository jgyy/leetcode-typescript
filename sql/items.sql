USE mysql;
DROP TABLE IF EXISTS Items;
Create table If Not Exists Items (item_id int, item_brand varchar(10));
Truncate table Items;
insert into Items (item_id, item_brand)
values ('1', 'Samsung');
insert into Items (item_id, item_brand)
values ('2', 'Lenovo');
insert into Items (item_id, item_brand)
values ('3', 'LG');
insert into Items (item_id, item_brand)
values ('4', 'HP');
SELECT *
FROM Items;