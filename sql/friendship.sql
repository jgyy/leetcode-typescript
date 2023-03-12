USE mysql;
DROP TABLE IF EXISTS Friendship;
Create table If Not Exists Friendship (user1_id int, user2_id int);
Truncate table Friendship;
insert into Friendship (user1_id, user2_id)
values ('1', '2');
insert into Friendship (user1_id, user2_id)
values ('1', '3');
insert into Friendship (user1_id, user2_id)
values ('1', '4');
insert into Friendship (user1_id, user2_id)
values ('2', '3');
insert into Friendship (user1_id, user2_id)
values ('2', '4');
insert into Friendship (user1_id, user2_id)
values ('2', '5');
insert into Friendship (user1_id, user2_id)
values ('6', '1');
SELECT *
FROM Friendship;