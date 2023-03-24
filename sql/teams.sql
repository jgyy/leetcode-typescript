USE mysql;
DROP TABLE IF EXISTS Teams;
Create table If Not Exists Teams (team_id int, team_name varchar(30));
Truncate table Teams;
insert into Teams (team_id, team_name)
values ('10', 'Leetcode FC');
insert into Teams (team_id, team_name)
values ('20', 'NewYork FC');
insert into Teams (team_id, team_name)
values ('30', 'Atlanta FC');
insert into Teams (team_id, team_name)
values ('40', 'Chicago FC');
insert into Teams (team_id, team_name)
values ('50', 'Toronto FC');
insert into Teams (team_id, team_name)
values ('1', 'Ajax');
insert into Teams (team_id, team_name)
values ('4', 'Dortmund');
insert into Teams (team_id, team_name)
values ('6', 'Arsenal');
SELECT *
FROM Teams;