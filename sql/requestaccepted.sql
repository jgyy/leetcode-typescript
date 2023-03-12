USE mysql;
DROP TABLE IF EXISTS RequestAccepted;
Create table If Not Exists RequestAccepted (
    requester_id int,
    accepter_id int,
    accept_date date
);
Truncate table RequestAccepted;
insert into RequestAccepted (requester_id, accepter_id, accept_date)
values ('1', '2', '2016/06/03');
insert into RequestAccepted (requester_id, accepter_id, accept_date)
values ('1', '3', '2016/06/08');
insert into RequestAccepted (requester_id, accepter_id, accept_date)
values ('2', '3', '2016/06/08');
insert into RequestAccepted (requester_id, accepter_id, accept_date)
values ('3', '4', '2016/06/09');
insert into RequestAccepted (requester_id, accepter_id, accept_date)
values ('3', '4', '2016/06/10');
SELECT *
FROM RequestAccepted;