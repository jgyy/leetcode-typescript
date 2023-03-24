USE mysql;
DROP TABLE IF EXISTS Championships;
Create table If Not Exists Championships (
    year int,
    Wimbledon int,
    Fr_open int,
    US_open int,
    Au_open int
);
Truncate table Championships;
insert into Championships (year, Wimbledon, Fr_open, US_open, Au_open)
values ('2018', '1', '1', '1', '1');
insert into Championships (year, Wimbledon, Fr_open, US_open, Au_open)
values ('2019', '1', '1', '2', '2');
insert into Championships (year, Wimbledon, Fr_open, US_open, Au_open)
values ('2020', '2', '1', '2', '2');
SELECT *
FROM Championships;