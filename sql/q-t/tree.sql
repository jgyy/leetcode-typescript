USE mysql;
DROP TABLE IF EXISTS Tree;
Create table If Not Exists Tree (id int, p_id int);
Truncate table Tree;
insert into Tree (id, p_id)
values ('1', Null);
insert into Tree (id, p_id)
values ('2', '1');
insert into Tree (id, p_id)
values ('3', '1');
insert into Tree (id, p_id)
values ('4', '2');
insert into Tree (id, p_id)
values ('5', '2');
SELECT *
FROM Tree;