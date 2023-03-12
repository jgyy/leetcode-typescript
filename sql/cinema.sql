USE mysql;
DROP TABLE IF EXISTS Cinema;
Create table If Not Exists Cinema (
    seat_id int primary key auto_increment,
    free bool,
    id int,
    movie varchar(255),
    description varchar(255),
    rating float(2, 1)
);
Truncate table Cinema;
insert into Cinema (seat_id, free)
values ('1', '1');
insert into Cinema (seat_id, free)
values ('2', '0');
insert into Cinema (seat_id, free)
values ('3', '1');
insert into Cinema (seat_id, free)
values ('4', '1');
insert into Cinema (seat_id, free)
values ('5', '1');
insert into cinema (id, movie, description, rating)
values ('1', 'War', 'great 3D', '8.9');
insert into cinema (id, movie, description, rating)
values ('2', 'Science', 'fiction', '8.5');
insert into cinema (id, movie, description, rating)
values ('3', 'irish', 'boring', '6.2');
insert into cinema (id, movie, description, rating)
values ('4', 'Ice song', 'Fantacy', '8.6');
insert into cinema (id, movie, description, rating)
values ('5', 'House card', 'Interesting', '9.1');
SELECT *
FROM Cinema;