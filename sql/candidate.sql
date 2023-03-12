USE mysql;
DROP TABLE IF EXISTS Candidate;
Create table If Not Exists Candidate (id int, name varchar(255));
Truncate table Candidate;
insert into Candidate (id, name)
values ('1', 'A');
insert into Candidate (id, name)
values ('2', 'B');
insert into Candidate (id, name)
values ('3', 'C');
insert into Candidate (id, name)
values ('4', 'D');
insert into Candidate (id, name)
values ('5', 'E');
SELECT *
FROM Candidate;