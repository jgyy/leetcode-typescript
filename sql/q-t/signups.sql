USE mysql;
DROP TABLE IF EXISTS Signups;
Create table If Not Exists Signups (user_id int, time_stamp datetime);
Truncate table Signups;
insert into Signups (user_id, time_stamp)
values ('3', '2020-03-21 10:16:13');
insert into Signups (user_id, time_stamp)
values ('7', '2020-01-04 13:57:59');
insert into Signups (user_id, time_stamp)
values ('2', '2020-07-29 23:09:44');
insert into Signups (user_id, time_stamp)
values ('6', '2020-12-09 10:39:37');
SELECT *
FROM Signups;