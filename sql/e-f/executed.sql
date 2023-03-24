USE mysql;
DROP TABLE IF EXISTS Executed;
Create table If Not Exists Executed (task_id int, subtask_id int);
Truncate table Executed;
insert into Executed (task_id, subtask_id)
values ('1', '2');
insert into Executed (task_id, subtask_id)
values ('3', '1');
insert into Executed (task_id, subtask_id)
values ('3', '2');
insert into Executed (task_id, subtask_id)
values ('3', '3');
insert into Executed (task_id, subtask_id)
values ('3', '4');
SELECT *
FROM Executed;