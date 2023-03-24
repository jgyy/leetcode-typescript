USE mysql;
DROP TABLE IF EXISTS Register;
Create table If Not Exists Register (contest_id int, user_id int);
Truncate table Register;
insert into Register (contest_id, user_id)
values ('215', '6');
insert into Register (contest_id, user_id)
values ('209', '2');
insert into Register (contest_id, user_id)
values ('208', '2');
insert into Register (contest_id, user_id)
values ('210', '6');
insert into Register (contest_id, user_id)
values ('208', '6');
insert into Register (contest_id, user_id)
values ('209', '7');
insert into Register (contest_id, user_id)
values ('209', '6');
insert into Register (contest_id, user_id)
values ('215', '7');
insert into Register (contest_id, user_id)
values ('208', '7');
insert into Register (contest_id, user_id)
values ('210', '2');
insert into Register (contest_id, user_id)
values ('207', '2');
insert into Register (contest_id, user_id)
values ('210', '7');
SELECT *
FROM Register;