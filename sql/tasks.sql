USE mysql;
DROP TABLE IF EXISTS Tasks;
Create table If Not Exists Tasks (task_id int, subtasks_count int);
Truncate table Tasks;
insert into Tasks (task_id, subtasks_count)
values ('1', '3');
insert into Tasks (task_id, subtasks_count)
values ('2', '2');
insert into Tasks (task_id, subtasks_count)
values ('3', '4');
SELECT *
FROM Tasks;