USE mysql;
DROP TABLE IF EXISTS Relations;
Create table If Not Exists Relations (user_id int, follower_id int);
Truncate table Relations;
insert into Relations (user_id, follower_id)
values ('1', '3');
insert into Relations (user_id, follower_id)
values ('2', '3');
insert into Relations (user_id, follower_id)
values ('7', '3');
insert into Relations (user_id, follower_id)
values ('1', '4');
insert into Relations (user_id, follower_id)
values ('2', '4');
insert into Relations (user_id, follower_id)
values ('7', '4');
insert into Relations (user_id, follower_id)
values ('1', '5');
insert into Relations (user_id, follower_id)
values ('2', '6');
insert into Relations (user_id, follower_id)
values ('7', '5');
SELECT *
FROM Relations;