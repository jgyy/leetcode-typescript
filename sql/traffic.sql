USE mysql;
DROP TABLE IF EXISTS Traffic;
Create table If Not Exists Traffic (
    user_id int,
    activity ENUM('login', 'logout', 'jobs', 'groups', 'homepage'),
    activity_date date
);
Truncate table Traffic;
insert into Traffic (user_id, activity, activity_date)
values ('1', 'login', '2019-05-01');
insert into Traffic (user_id, activity, activity_date)
values ('1', 'homepage', '2019-05-01');
insert into Traffic (user_id, activity, activity_date)
values ('1', 'logout', '2019-05-01');
insert into Traffic (user_id, activity, activity_date)
values ('2', 'login', '2019-06-21');
insert into Traffic (user_id, activity, activity_date)
values ('2', 'logout', '2019-06-21');
insert into Traffic (user_id, activity, activity_date)
values ('3', 'login', '2019-01-01');
insert into Traffic (user_id, activity, activity_date)
values ('3', 'jobs', '2019-01-01');
insert into Traffic (user_id, activity, activity_date)
values ('3', 'logout', '2019-01-01');
insert into Traffic (user_id, activity, activity_date)
values ('4', 'login', '2019-06-21');
insert into Traffic (user_id, activity, activity_date)
values ('4', 'groups', '2019-06-21');
insert into Traffic (user_id, activity, activity_date)
values ('4', 'logout', '2019-06-21');
insert into Traffic (user_id, activity, activity_date)
values ('5', 'login', '2019-03-01');
insert into Traffic (user_id, activity, activity_date)
values ('5', 'logout', '2019-03-01');
insert into Traffic (user_id, activity, activity_date)
values ('5', 'login', '2019-06-21');
insert into Traffic (user_id, activity, activity_date)
values ('5', 'logout', '2019-06-21');
SELECT *
FROM Traffic;