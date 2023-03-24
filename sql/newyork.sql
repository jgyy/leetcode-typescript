USE mysql;
DROP TABLE IF EXISTS NewYork;
Create table If Not Exists NewYork (student_id int, score int);
Truncate table NewYork;
insert into NewYork (student_id, score)
values ('1', '90');
insert into NewYork (student_id, score)
values ('2', '87');
SELECT *
FROM NewYork;