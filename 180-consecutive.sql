USE mysql;
Create table If Not Exists Logs (id int, num int);
Truncate table Logs;
insert into Logs (id, num)
values ('1', '1');
insert into Logs (id, num)
values ('2', '1');
insert into Logs (id, num)
values ('3', '1');
insert into Logs (id, num)
values ('4', '2');
insert into Logs (id, num)
values ('5', '1');
insert into Logs (id, num)
values ('6', '2');
insert into Logs (id, num)
values ('7', '2');
-- Write an SQL query to find all numbers that appear at least three times consecutively.
SELECT DISTINCT L1.num AS ConsecutiveNums
FROM Logs L1
    JOIN Logs L2 ON L1.id = L2.id - 1
    JOIN Logs L3 ON L2.id = L3.id - 1
WHERE L1.num = L2.num
    AND L2.num = L3.num;