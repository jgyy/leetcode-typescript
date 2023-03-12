USE mysql;
DROP TABLE IF EXISTS MovieRating;
Create table If Not Exists MovieRating (
    movie_id int,
    user_id int,
    rating int,
    created_at date
);
Truncate table MovieRating;
insert into MovieRating (movie_id, user_id, rating, created_at)
values ('1', '1', '3', '2020-01-12');
insert into MovieRating (movie_id, user_id, rating, created_at)
values ('1', '2', '4', '2020-02-11');
insert into MovieRating (movie_id, user_id, rating, created_at)
values ('1', '3', '2', '2020-02-12');
insert into MovieRating (movie_id, user_id, rating, created_at)
values ('1', '4', '1', '2020-01-01');
insert into MovieRating (movie_id, user_id, rating, created_at)
values ('2', '1', '5', '2020-02-17');
insert into MovieRating (movie_id, user_id, rating, created_at)
values ('2', '2', '2', '2020-02-01');
insert into MovieRating (movie_id, user_id, rating, created_at)
values ('2', '3', '2', '2020-03-01');
insert into MovieRating (movie_id, user_id, rating, created_at)
values ('3', '1', '3', '2020-02-22');
insert into MovieRating (movie_id, user_id, rating, created_at)
values ('3', '2', '4', '2020-02-25');
SELECT *
FROM MovieRating;