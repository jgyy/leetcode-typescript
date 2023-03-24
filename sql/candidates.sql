USE mysql;
DROP TABLE IF EXISTS Candidates;
Create table If Not Exists Candidates (
    id int,
    name varchar(255),
    employee_id int,
    experience ENUM('Senior', 'Junior'),
    salary int,
    candidate_id int,
    years_of_exp int,
    interview_id int
);
Truncate table Candidates;
insert into Candidates (id, name)
values ('1', 'A');
insert into Candidates (id, name)
values ('2', 'B');
insert into Candidates (id, name)
values ('3', 'C');
insert into Candidates (id, name)
values ('4', 'D');
insert into Candidates (id, name)
values ('5', 'E');
insert into Candidates (employee_id, experience, salary)
values ('1', 'Junior', '10000');
insert into Candidates (employee_id, experience, salary)
values ('9', 'Junior', '10000');
insert into Candidates (employee_id, experience, salary)
values ('2', 'Senior', '20000');
insert into Candidates (employee_id, experience, salary)
values ('11', 'Senior', '20000');
insert into Candidates (employee_id, experience, salary)
values ('13', 'Senior', '50000');
insert into Candidates (employee_id, experience, salary)
values ('4', 'Junior', '40000');
insert into Candidates (candidate_id, name, years_of_exp, interview_id)
values ('11', 'Atticus', '1', '101');
insert into Candidates (candidate_id, name, years_of_exp, interview_id)
values ('9', 'Ruben', '6', '104');
insert into Candidates (candidate_id, name, years_of_exp, interview_id)
values ('6', 'Aliza', '10', '109');
insert into Candidates (candidate_id, name, years_of_exp, interview_id)
values ('8', 'Alfredo', '0', '107');
SELECT *
FROM Candidates;