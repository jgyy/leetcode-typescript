USE mysql;
DROP TABLE IF EXISTS Movies;
Create table If Not Exists Movies (movie_id int, title varchar(30));
Truncate table Movies;
insert into Movies (movie_id, title)
values ('1', 'Avengers');
insert into Movies (movie_id, title)
values ('2', 'Frozen 2');
insert into Movies (movie_id, title)
values ('3', 'Joker');
SELECT *
FROM Movies;