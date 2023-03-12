USE mysql;
DROP TABLE IF EXISTS Users;
Create table If Not Exists Users (
    user_id int,
    banned varchar(50),
    role ENUM('client', 'driver', 'partner'),
    join_date date,
    favorite_brand varchar(10),
    name varchar(30)
);
Truncate table Users;
insert into Users (user_id, banned, role)
values ('1', 'No', 'client');
insert into Users (user_id, banned, role)
values ('2', 'Yes', 'client');
insert into Users (user_id, banned, role)
values ('3', 'No', 'client');
insert into Users (user_id, banned, role)
values ('4', 'No', 'client');
insert into Users (user_id, banned, role)
values ('10', 'No', 'driver');
insert into Users (user_id, banned, role)
values ('11', 'No', 'driver');
insert into Users (user_id, banned, role)
values ('12', 'No', 'driver');
insert into Users (user_id, banned, role)
values ('13', 'No', 'driver');
insert into Users (user_id, join_date, favorite_brand)
values ('1', '2018-01-01', 'Lenovo');
insert into Users (user_id, join_date, favorite_brand)
values ('2', '2018-02-09', 'Samsung');
insert into Users (user_id, join_date, favorite_brand)
values ('3', '2018-01-19', 'LG');
insert into Users (user_id, join_date, favorite_brand)
values ('4', '2018-05-21', 'HP');
insert into Users (user_id, name)
values ('1', 'Daniel');
insert into Users (user_id, name)
values ('2', 'Monica');
insert into Users (user_id, name)
values ('3', 'Maria');
insert into Users (user_id, name)
values ('4', 'James');
SELECT *
FROM Users;