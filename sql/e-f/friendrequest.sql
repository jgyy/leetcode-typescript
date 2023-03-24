USE mysql;
DROP TABLE IF EXISTS FriendRequest;
Create table If Not Exists FriendRequest (sender_id int, send_to_id int, request_date date);
Truncate table FriendRequest;
insert into FriendRequest (sender_id, send_to_id, request_date)
values ('1', '2', '2016/06/01');
insert into FriendRequest (sender_id, send_to_id, request_date)
values ('1', '3', '2016/06/01');
insert into FriendRequest (sender_id, send_to_id, request_date)
values ('1', '4', '2016/06/01');
insert into FriendRequest (sender_id, send_to_id, request_date)
values ('2', '3', '2016/06/02');
insert into FriendRequest (sender_id, send_to_id, request_date)
values ('3', '4', '2016/06/09');
SELECT *
FROM FriendRequest;