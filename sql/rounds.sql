USE mysql;
DROP TABLE IF EXISTS Rounds;
Create table If Not Exists Rounds (interview_id int, round_id int, score int);
Truncate table Rounds;
insert into Rounds (interview_id, round_id, score)
values ('109', '3', '4');
insert into Rounds (interview_id, round_id, score)
values ('101', '2', '8');
insert into Rounds (interview_id, round_id, score)
values ('109', '4', '1');
insert into Rounds (interview_id, round_id, score)
values ('107', '1', '3');
insert into Rounds (interview_id, round_id, score)
values ('104', '3', '6');
insert into Rounds (interview_id, round_id, score)
values ('109', '1', '4');
insert into Rounds (interview_id, round_id, score)
values ('104', '4', '7');
insert into Rounds (interview_id, round_id, score)
values ('104', '1', '2');
insert into Rounds (interview_id, round_id, score)
values ('109', '2', '1');
insert into Rounds (interview_id, round_id, score)
values ('104', '2', '7');
insert into Rounds (interview_id, round_id, score)
values ('107', '2', '3');
insert into Rounds (interview_id, round_id, score)
values ('101', '1', '8');
SELECT *
FROM Rounds;