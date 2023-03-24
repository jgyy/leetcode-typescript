USE mysql;
DROP TABLE IF EXISTS Listens;
Create table If Not Exists Listens (user_id int, song_id int, day date);
Truncate table Listens;
insert into Listens (user_id, song_id, day)
values ('1', '10', '2021-03-15');
insert into Listens (user_id, song_id, day)
values ('1', '11', '2021-03-15');
insert into Listens (user_id, song_id, day)
values ('1', '12', '2021-03-15');
insert into Listens (user_id, song_id, day)
values ('2', '10', '2021-03-15');
insert into Listens (user_id, song_id, day)
values ('2', '11', '2021-03-15');
insert into Listens (user_id, song_id, day)
values ('2', '12', '2021-03-15');
insert into Listens (user_id, song_id, day)
values ('3', '10', '2021-03-15');
insert into Listens (user_id, song_id, day)
values ('3', '11', '2021-03-15');
insert into Listens (user_id, song_id, day)
values ('3', '12', '2021-03-15');
insert into Listens (user_id, song_id, day)
values ('4', '10', '2021-03-15');
insert into Listens (user_id, song_id, day)
values ('4', '11', '2021-03-15');
insert into Listens (user_id, song_id, day)
values ('4', '13', '2021-03-15');
insert into Listens (user_id, song_id, day)
values ('5', '10', '2021-03-16');
insert into Listens (user_id, song_id, day)
values ('5', '11', '2021-03-16');
insert into Listens (user_id, song_id, day)
values ('5', '12', '2021-03-16');
SELECT *
FROM Listens;