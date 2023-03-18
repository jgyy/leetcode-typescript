USE mysql;
DROP TABLE IF EXISTS Exam;
Create table If Not Exists Exam (exam_id int, student_id int, score int);
Truncate table Exam;
insert into Exam (exam_id, student_id, score)
values ('10', '1', '70');
insert into Exam (exam_id, student_id, score)
values ('10', '2', '80');
insert into Exam (exam_id, student_id, score)
values ('10', '3', '90');
insert into Exam (exam_id, student_id, score)
values ('20', '1', '80');
insert into Exam (exam_id, student_id, score)
values ('30', '1', '70');
insert into Exam (exam_id, student_id, score)
values ('30', '3', '80');
insert into Exam (exam_id, student_id, score)
values ('30', '4', '90');
insert into Exam (exam_id, student_id, score)
values ('40', '1', '60');
insert into Exam (exam_id, student_id, score)
values ('40', '2', '70');
insert into Exam (exam_id, student_id, score)
values ('40', '4', '80');
SELECT *
FROM Exam;