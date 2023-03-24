USE mysql;
DROP TABLE IF EXISTS Terms;
Create table If Not Exists Terms (power int, factor int);
Truncate table Terms;
insert into Terms (power, factor)
values ('2', '1');
insert into Terms (power, factor)
values ('1', '-4');
insert into Terms (power, factor)
values ('0', '2');
SELECT *
FROM Terms;