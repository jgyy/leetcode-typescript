USE mysql;
DROP Table If Exists NPV;
Create Table If Not Exists NPV (id int, year int, npv int);
Truncate table NPV;
insert into NPV (id, year, npv)
values ('1', '2018', '100');
insert into NPV (id, year, npv)
values ('7', '2020', '30');
insert into NPV (id, year, npv)
values ('13', '2019', '40');
insert into NPV (id, year, npv)
values ('1', '2019', '113');
insert into NPV (id, year, npv)
values ('2', '2008', '121');
insert into NPV (id, year, npv)
values ('3', '2009', '21');
insert into NPV (id, year, npv)
values ('11', '2020', '99');
insert into NPV (id, year, npv)
values ('7', '2019', '0');
SELECT *
FROM NPV;