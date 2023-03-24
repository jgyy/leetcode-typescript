USE mysql;
DROP Table If Exists Logins;
Create table If Not Exists Logins (
    id int,
    login_date date,
    user_id int,
    time_stamp datetime
);
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
insert into Logins (user_id, time_stamp)
values ('6', '2020-06-30 15:06:07');
insert into Logins (user_id, time_stamp)
values ('6', '2021-04-21 14:06:06');
insert into Logins (user_id, time_stamp)
values ('6', '2019-03-07 00:18:15');
insert into Logins (user_id, time_stamp)
values ('8', '2020-02-01 05:10:53');
insert into Logins (user_id, time_stamp)
values ('8', '2020-12-30 00:46:50');
insert into Logins (user_id, time_stamp)
values ('2', '2020-01-16 02:49:50');
insert into Logins (user_id, time_stamp)
values ('2', '2019-08-25 07:59:08');
insert into Logins (user_id, time_stamp)
values ('14', '2019-07-14 09:00:00');
insert into Logins (user_id, time_stamp)
values ('14', '2021-01-06 11:59:59');
SELECT *
FROM Logins;