USE mysql;
DROP TABLE IF EXISTS Passengers;
Create table If Not Exists Passengers (passenger_id int, arrival_time int);
Truncate table Passengers;
insert into Passengers (passenger_id, arrival_time)
values ('11', '1');
insert into Passengers (passenger_id, arrival_time)
values ('12', '5');
insert into Passengers (passenger_id, arrival_time)
values ('13', '6');
insert into Passengers (passenger_id, arrival_time)
values ('14', '7');
SELECT *
FROM Passengers;