USE mysql;
DROP Table If Exists Logins;
Create table If Not Exists Logins (id int, login_date date);
Truncate table Logins;
insert into Logins (id, login_date)
values ('7', '2020-05-30');
insert into Logins (id, login_date)
values ('1', '2020-05-30');
insert into Logins (id, login_date)
values ('7', '2020-05-31');
insert into Logins (id, login_date)
values ('7', '2020-06-01');
insert into Logins (id, login_date)
values ('7', '2020-06-02');
insert into Logins (id, login_date)
values ('7', '2020-06-02');
insert into Logins (id, login_date)
values ('7', '2020-06-03');
insert into Logins (id, login_date)
values ('1', '2020-06-07');
insert into Logins (id, login_date)
values ('7', '2020-06-10');
SELECT *
FROM Logins;