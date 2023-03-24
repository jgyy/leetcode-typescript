USE mysql;
DROP TABLE IF EXISTS TVProgram;
Create table If Not Exists TVProgram (
    program_date date,
    content_id int,
    channel varchar(30)
);
Truncate table TVProgram;
insert into TVProgram (program_date, content_id, channel)
values ('2020-06-10 08:00', '1', 'LC-Channel');
insert into TVProgram (program_date, content_id, channel)
values ('2020-05-11 12:00', '2', 'LC-Channel');
insert into TVProgram (program_date, content_id, channel)
values ('2020-05-12 12:00', '3', 'LC-Channel');
insert into TVProgram (program_date, content_id, channel)
values ('2020-05-13 14:00', '4', 'Disney Ch');
insert into TVProgram (program_date, content_id, channel)
values ('2020-06-18 14:00', '4', 'Disney Ch');
insert into TVProgram (program_date, content_id, channel)
values ('2020-07-15 16:00', '5', 'Disney Ch');
SELECT *
FROM TVProgram;