USE mysql;
DROP TABLE IF EXISTS Removals;
create table if not exists Removals (post_id int, remove_date date);
Truncate table Removals;
insert into Removals (post_id, remove_date)
values ('2', '2019-07-20');
insert into Removals (post_id, remove_date)
values ('3', '2019-07-18');
SELECT *
FROM Removals;