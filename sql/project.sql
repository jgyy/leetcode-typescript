USE mysql;
DROP TABLE IF EXISTS Project;
Create table If Not Exists Project (project_id int, employee_id int);
Truncate table Project;
insert into Project (project_id, employee_id)
values ('1', '1');
insert into Project (project_id, employee_id)
values ('1', '2');
insert into Project (project_id, employee_id)
values ('1', '3');
insert into Project (project_id, employee_id)
values ('2', '1');
insert into Project (project_id, employee_id)
values ('2', '4');
SELECT *
FROM Project;