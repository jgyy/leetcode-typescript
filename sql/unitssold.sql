USE mysql;
DROP TABLE IF EXISTS UnitsSold;
Create table If Not Exists UnitsSold (product_id int, purchase_date date, units int);
Truncate table UnitsSold;
insert into UnitsSold (product_id, purchase_date, units)
values ('1', '2019-02-25', '100');
insert into UnitsSold (product_id, purchase_date, units)
values ('1', '2019-03-01', '15');
insert into UnitsSold (product_id, purchase_date, units)
values ('2', '2019-02-10', '200');
insert into UnitsSold (product_id, purchase_date, units)
values ('2', '2019-03-22', '30');
SELECT *
FROM UnitsSold;