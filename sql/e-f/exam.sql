USE mysql;
DROP TABLE IF EXISTS Exam;
Create table If Not Exists Exam (
    exam_id int,
    student_id int,
    score int,
    student_count int
);
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
insert into Exam (score, student_count)
values ('975', '10');
insert into Exam (score, student_count)
values ('966', '60');
insert into Exam (score, student_count)
values ('844', '76');
insert into Exam (score, student_count)
values ('749', '76');
insert into Exam (score, student_count)
values ('744', '100');
SELECT *
FROM Exam;