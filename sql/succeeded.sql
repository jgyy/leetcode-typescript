USE mysql;
DROP TABLE IF EXISTS Succeeded;
Create table If Not Exists Succeeded (success_date date);
Truncate table Succeeded;
insert into Succeeded (success_date)
values ('2018-12-30');
insert into Succeeded (success_date)
values ('2018-12-31');
insert into Succeeded (success_date)
values ('2019-01-01');
insert into Succeeded (success_date)
values ('2019-01-02');
insert into Succeeded (success_date)
values ('2019-01-03');
insert into Succeeded (success_date)
values ('2019-01-06');
SELECT *
FROM Succeeded;