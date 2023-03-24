USE mysql;
DROP TABLE IF EXISTS Streams;
Create table If Not Exists Streams (session_id int, account_id int, stream_date date);
Truncate table Streams;
insert into Streams (session_id, account_id, stream_date)
values ('14', '9', '2020-05-16');
insert into Streams (session_id, account_id, stream_date)
values ('16', '3', '2021-10-27');
insert into Streams (session_id, account_id, stream_date)
values ('18', '11', '2020-04-29');
insert into Streams (session_id, account_id, stream_date)
values ('17', '13', '2021-08-08');
insert into Streams (session_id, account_id, stream_date)
values ('19', '4', '2020-12-31');
insert into Streams (session_id, account_id, stream_date)
values ('13', '5', '2021-01-05');
SELECT *
FROM Streams;