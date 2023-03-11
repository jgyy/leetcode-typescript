USE mysql;
DROP TABLE IF EXISTS Users;
Create table If Not Exists Users (
    users_id int,
    banned varchar(50),
    role ENUM('client', 'driver', 'partner')
);
Truncate table Users;
insert into Users (users_id, banned, role)
values ('1', 'No', 'client');
insert into Users (users_id, banned, role)
values ('2', 'Yes', 'client');
insert into Users (users_id, banned, role)
values ('3', 'No', 'client');
insert into Users (users_id, banned, role)
values ('4', 'No', 'client');
insert into Users (users_id, banned, role)
values ('10', 'No', 'driver');
insert into Users (users_id, banned, role)
values ('11', 'No', 'driver');
insert into Users (users_id, banned, role)
values ('12', 'No', 'driver');
insert into Users (users_id, banned, role)
values ('13', 'No', 'driver');
SELECT *
FROM Users;