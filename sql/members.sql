USE mysql;
DROP TABLE IF EXISTS Members;
Create table If Not Exists Members (member_id int, name varchar(30));
Truncate table Members;
insert into Members (member_id, name)
values ('9', 'Alice');
insert into Members (member_id, name)
values ('11', 'Bob');
insert into Members (member_id, name)
values ('3', 'Winston');
insert into Members (member_id, name)
values ('8', 'Hercy');
insert into Members (member_id, name)
values ('1', 'Narihan');
SELECT *
FROM Members;