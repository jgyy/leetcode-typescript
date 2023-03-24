USE mysql;
DROP TABLE IF EXISTS Buses;
Create table If Not Exists Buses (bus_id int, arrival_time int);
Truncate table Buses;
insert into Buses (bus_id, arrival_time)
values ('1', '2');
insert into Buses (bus_id, arrival_time)
values ('2', '4');
insert into Buses (bus_id, arrival_time)
values ('3', '7');
SELECT *
FROM Buses;