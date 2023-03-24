USE mysql;
DROP TABLE IF EXISTS Likes;
Create table If Not Exists Likes (user_id int, page_id int);
Truncate table Likes;
insert into Likes (user_id, page_id)
values ('1', '88');
insert into Likes (user_id, page_id)
values ('2', '23');
insert into Likes (user_id, page_id)
values ('3', '24');
insert into Likes (user_id, page_id)
values ('4', '56');
insert into Likes (user_id, page_id)
values ('5', '11');
insert into Likes (user_id, page_id)
values ('6', '33');
insert into Likes (user_id, page_id)
values ('2', '77');
insert into Likes (user_id, page_id)
values ('3', '77');
insert into Likes (user_id, page_id)
values ('6', '88');
SELECT *
FROM Likes;