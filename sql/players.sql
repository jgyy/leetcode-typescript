USE mysql;
DROP TABLE IF EXISTS Players;
Create table If Not Exists Players (player_id int, group_id int);
Truncate table Players;
insert into Players (player_id, group_id)
values ('10', '2');
insert into Players (player_id, group_id)
values ('15', '1');
insert into Players (player_id, group_id)
values ('20', '3');
insert into Players (player_id, group_id)
values ('25', '1');
insert into Players (player_id, group_id)
values ('30', '1');
insert into Players (player_id, group_id)
values ('35', '2');
insert into Players (player_id, group_id)
values ('40', '3');
insert into Players (player_id, group_id)
values ('45', '1');
insert into Players (player_id, group_id)
values ('50', '2');
SELECT *
FROM Players;