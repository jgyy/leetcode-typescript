USE mysql;
DROP TABLE IF EXISTS Bonus;
Create table If Not Exists Bonus (empId int, bonus int);
Truncate table Bonus;
insert into Bonus (empId, bonus)
values ('2', '500');
insert into Bonus (empId, bonus)
values ('4', '2000');
SELECT *
FROM Bonus;