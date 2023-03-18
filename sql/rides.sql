USE mysql;
DROP TABLE IF EXISTS Rides;
Create Table If Not Exists Rides (
    id int,
    user_id int,
    distance int,
    ride_id int,
    requested_at date
);
Truncate table Rides;
insert into Rides (id, user_id, distance)
values ('1', '1', '120');
insert into Rides (id, user_id, distance)
values ('2', '2', '317');
insert into Rides (id, user_id, distance)
values ('3', '3', '222');
insert into Rides (id, user_id, distance)
values ('4', '7', '100');
insert into Rides (id, user_id, distance)
values ('5', '13', '312');
insert into Rides (id, user_id, distance)
values ('6', '19', '50');
insert into Rides (id, user_id, distance)
values ('7', '7', '120');
insert into Rides (id, user_id, distance)
values ('8', '19', '400');
insert into Rides (id, user_id, distance)
values ('9', '7', '230');
insert into Rides (ride_id, user_id, requested_at)
values ('6', '75', '2019-12-9');
insert into Rides (ride_id, user_id, requested_at)
values ('1', '54', '2020-2-9');
insert into Rides (ride_id, user_id, requested_at)
values ('10', '63', '2020-3-4');
insert into Rides (ride_id, user_id, requested_at)
values ('19', '39', '2020-4-6');
insert into Rides (ride_id, user_id, requested_at)
values ('3', '41', '2020-6-3');
insert into Rides (ride_id, user_id, requested_at)
values ('13', '52', '2020-6-22');
insert into Rides (ride_id, user_id, requested_at)
values ('7', '69', '2020-7-16');
insert into Rides (ride_id, user_id, requested_at)
values ('17', '70', '2020-8-25');
insert into Rides (ride_id, user_id, requested_at)
values ('20', '81', '2020-11-2');
insert into Rides (ride_id, user_id, requested_at)
values ('5', '57', '2020-11-9');
insert into Rides (ride_id, user_id, requested_at)
values ('2', '42', '2020-12-9');
insert into Rides (ride_id, user_id, requested_at)
values ('11', '68', '2021-1-11');
insert into Rides (ride_id, user_id, requested_at)
values ('15', '32', '2021-1-17');
insert into Rides (ride_id, user_id, requested_at)
values ('12', '11', '2021-1-19');
insert into Rides (ride_id, user_id, requested_at)
values ('14', '18', '2021-1-27');
SELECT *
FROM Rides;