USE mysql;
DROP TABLE IF EXISTS Subjects;
Create table If Not Exists Subjects (subject_name varchar(20));
Truncate table Subjects;
insert into Subjects (subject_name)
values ('Math');
insert into Subjects (subject_name)
values ('Physics');
insert into Subjects (subject_name)
values ('Programming');
SELECT *
FROM Subjects;