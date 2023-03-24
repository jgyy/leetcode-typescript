USE mysql;
DROP TABLE IF EXISTS California;
Create table If Not Exists California (student_id int, score int);
Truncate table California;
insert into California (student_id, score)
values ('2', '89');
insert into California (student_id, score)
values ('3', '88');
SELECT *
FROM California;