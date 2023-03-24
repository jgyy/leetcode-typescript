USE mysql;
DROP TABLE IF EXISTS Drivers;
Create table If Not Exists Drivers (driver_id int, join_date date);
Truncate table Drivers;
insert into Drivers (driver_id, join_date)
values ('10', '2019-12-10');
insert into Drivers (driver_id, join_date)
values ('8', '2020-1-13');
insert into Drivers (driver_id, join_date)
values ('5', '2020-2-16');
insert into Drivers (driver_id, join_date)
values ('7', '2020-3-8');
insert into Drivers (driver_id, join_date)
values ('4', '2020-5-17');
insert into Drivers (driver_id, join_date)
values ('1', '2020-10-24');
insert into Drivers (driver_id, join_date)
values ('6', '2021-1-5');
SELECT *
FROM Drivers;