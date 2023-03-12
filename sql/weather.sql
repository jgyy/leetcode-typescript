USE mysql;
DROP TABLE IF EXISTS Weather;
Create table If Not Exists Weather (
    id int,
    recordDate date,
    temperature int,
    country_id int,
    weather_state int,
    day date
);
Truncate table Weather;
insert into Weather (id, recordDate, temperature)
values ('1', '2015-01-01', '10');
insert into Weather (id, recordDate, temperature)
values ('2', '2015-01-02', '25');
insert into Weather (id, recordDate, temperature)
values ('3', '2015-01-03', '20');
insert into Weather (id, recordDate, temperature)
values ('4', '2015-01-04', '30');
insert into Weather (country_id, weather_state, day)
values ('2', '15', '2019-11-01');
insert into Weather (country_id, weather_state, day)
values ('2', '12', '2019-10-28');
insert into Weather (country_id, weather_state, day)
values ('2', '12', '2019-10-27');
insert into Weather (country_id, weather_state, day)
values ('3', '-2', '2019-11-10');
insert into Weather (country_id, weather_state, day)
values ('3', '0', '2019-11-11');
insert into Weather (country_id, weather_state, day)
values ('3', '3', '2019-11-12');
insert into Weather (country_id, weather_state, day)
values ('5', '16', '2019-11-07');
insert into Weather (country_id, weather_state, day)
values ('5', '18', '2019-11-09');
insert into Weather (country_id, weather_state, day)
values ('5', '21', '2019-11-23');
insert into Weather (country_id, weather_state, day)
values ('7', '25', '2019-11-28');
insert into Weather (country_id, weather_state, day)
values ('7', '22', '2019-12-01');
insert into Weather (country_id, weather_state, day)
values ('7', '20', '2019-12-02');
insert into Weather (country_id, weather_state, day)
values ('8', '25', '2019-11-05');
insert into Weather (country_id, weather_state, day)
values ('8', '27', '2019-11-15');
insert into Weather (country_id, weather_state, day)
values ('8', '31', '2019-11-25');
insert into Weather (country_id, weather_state, day)
values ('9', '7', '2019-10-23');
insert into Weather (country_id, weather_state, day)
values ('9', '3', '2019-12-23');
SELECT *
FROM Weather;