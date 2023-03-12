USE mysql;
DROP TABLE IF EXISTS Visits;
Create table If Not Exists Visits (user_id int, visit_date date);
Truncate table Visits;
insert into Visits (user_id, visit_date)
values ('1', '2020-01-01');
insert into Visits (user_id, visit_date)
values ('2', '2020-01-02');
insert into Visits (user_id, visit_date)
values ('12', '2020-01-01');
insert into Visits (user_id, visit_date)
values ('19', '2020-01-03');
insert into Visits (user_id, visit_date)
values ('1', '2020-01-02');
insert into Visits (user_id, visit_date)
values ('2', '2020-01-03');
insert into Visits (user_id, visit_date)
values ('1', '2020-01-04');
insert into Visits (user_id, visit_date)
values ('7', '2020-01-11');
insert into Visits (user_id, visit_date)
values ('9', '2020-01-25');
insert into Visits (user_id, visit_date)
values ('8', '2020-01-28');
SELECT *
FROM Visits;