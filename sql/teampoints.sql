USE mysql;
DROP TABLE IF EXISTS TeamPoints;
Create table If Not Exists TeamPoints (team_id int, name varchar(100), points int);
Truncate table TeamPoints;
insert into TeamPoints (team_id, name, points)
values ('3', 'Algeria', '1431');
insert into TeamPoints (team_id, name, points)
values ('1', 'Senegal', '2132');
insert into TeamPoints (team_id, name, points)
values ('2', 'New Zealand', '1402');
insert into TeamPoints (team_id, name, points)
values ('4', 'Croatia', '1817');
SELECT *
FROM TeamPoints;