USE mysql;
DROP TABLE IF EXISTS Failed;
Create table If Not Exists Failed (fail_date date);
Truncate table Failed;
insert into Failed (fail_date)
values ('2018-12-28');
insert into Failed (fail_date)
values ('2018-12-29');
insert into Failed (fail_date)
values ('2019-01-04');
insert into Failed (fail_date)
values ('2019-01-05');
SELECT *
FROM Failed;