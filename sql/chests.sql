USE mysql;
DROP TABLE IF EXISTS Chests;
Create table If Not Exists Chests (chest_id int, apple_count int, orange_count int);
Truncate table Chests;
insert into Chests (chest_id, apple_count, orange_count)
values ('6', '5', '6');
insert into Chests (chest_id, apple_count, orange_count)
values ('14', '20', '10');
insert into Chests (chest_id, apple_count, orange_count)
values ('2', '8', '8');
insert into Chests (chest_id, apple_count, orange_count)
values ('3', '19', '4');
insert into Chests (chest_id, apple_count, orange_count)
values ('16', '19', '19');
SELECT *
FROM Chests;