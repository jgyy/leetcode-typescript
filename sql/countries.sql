USE mysql;
DROP TABLE IF EXISTS Countries;
Create table If Not Exists Countries (country_id int, country_name varchar(20));
Truncate table Countries;
insert into Countries (country_id, country_name)
values ('2', 'USA');
insert into Countries (country_id, country_name)
values ('3', 'Australia');
insert into Countries (country_id, country_name)
values ('7', 'Peru');
insert into Countries (country_id, country_name)
values ('5', 'China');
insert into Countries (country_id, country_name)
values ('8', 'Morocco');
insert into Countries (country_id, country_name)
values ('9', 'Spain');
SELECT *
FROM Countries;