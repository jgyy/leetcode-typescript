USE mysql;
DROP TABLE IF EXISTS Keywords;
Create table If Not Exists Keywords (topic_id int, word varchar(25));
Truncate table Keywords;
insert into Keywords (topic_id, word)
values ('1', 'handball');
insert into Keywords (topic_id, word)
values ('1', 'football');
insert into Keywords (topic_id, word)
values ('3', 'WAR');
insert into Keywords (topic_id, word)
values ('2', 'Vaccine');
SELECT *
FROM Keywords;