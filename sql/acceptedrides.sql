USE mysql;
DROP TABLE IF EXISTS AcceptedRides;
Create table If Not Exists AcceptedRides (
    ride_id int,
    driver_id int,
    ride_distance int,
    ride_duration int
);
Truncate table AcceptedRides;
insert into AcceptedRides (ride_id, driver_id, ride_distance, ride_duration)
values ('10', '10', '63', '38');
insert into AcceptedRides (ride_id, driver_id, ride_distance, ride_duration)
values ('13', '10', '73', '96');
insert into AcceptedRides (ride_id, driver_id, ride_distance, ride_duration)
values ('7', '8', '100', '28');
insert into AcceptedRides (ride_id, driver_id, ride_distance, ride_duration)
values ('17', '7', '119', '68');
insert into AcceptedRides (ride_id, driver_id, ride_distance, ride_duration)
values ('20', '1', '121', '92');
insert into AcceptedRides (ride_id, driver_id, ride_distance, ride_duration)
values ('5', '7', '42', '101');
insert into AcceptedRides (ride_id, driver_id, ride_distance, ride_duration)
values ('2', '4', '6', '38');
insert into AcceptedRides (ride_id, driver_id, ride_distance, ride_duration)
values ('11', '8', '37', '43');
insert into AcceptedRides (ride_id, driver_id, ride_distance, ride_duration)
values ('15', '8', '108', '82');
insert into AcceptedRides (ride_id, driver_id, ride_distance, ride_duration)
values ('12', '8', '38', '34');
insert into AcceptedRides (ride_id, driver_id, ride_distance, ride_duration)
values ('14', '1', '90', '74');
SELECT *
FROM AcceptedRides;