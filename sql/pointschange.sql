USE mysql;
DROP TABLE IF EXISTS PointsChange;
Create table If Not Exists PointsChange (team_id int, points_change int);
Truncate table PointsChange;
insert into PointsChange (team_id, points_change)
values ('3', '399');
insert into PointsChange (team_id, points_change)
values ('2', '0');
insert into PointsChange (team_id, points_change)
values ('4', '13');
insert into PointsChange (team_id, points_change)
values ('1', '-22');
SELECT *
FROM PointsChange;