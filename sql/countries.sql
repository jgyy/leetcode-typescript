USE mysql;
DROP TABLE IF EXISTS Countries;
Create table If Not Exists Countries (
    country_id int,
    country_name varchar(20),
    name varchar(15),
    country_code varchar(3)
);
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
insert into Countries (name, country_code)
values ('Peru', '051');
insert into Countries (name, country_code)
values ('Israel', '972');
insert into Countries (name, country_code)
values ('Morocco', '212');
insert into Countries (name, country_code)
values ('Germany', '049');
insert into Countries (name, country_code)
values ('Ethiopia', '251');
SELECT *
FROM Countries;