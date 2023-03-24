USE mysql;
DROP TABLE IF EXISTS Subscriptions;
Create table If Not Exists Subscriptions (account_id int, start_date date, end_date date);
Truncate table Subscriptions;
insert into Subscriptions (account_id, start_date, end_date)
values ('9', '2020-02-18', '2021-10-30');
insert into Subscriptions (account_id, start_date, end_date)
values ('3', '2021-09-21', '2021-11-13');
insert into Subscriptions (account_id, start_date, end_date)
values ('11', '2020-02-28', '2020-08-18');
insert into Subscriptions (account_id, start_date, end_date)
values ('13', '2021-04-20', '2021-09-22');
insert into Subscriptions (account_id, start_date, end_date)
values ('4', '2020-10-26', '2021-05-08');
insert into Subscriptions (account_id, start_date, end_date)
values ('5', '2020-09-11', '2021-01-17');
SELECT *
FROM Subscriptions;