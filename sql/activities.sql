USE mysql;
DROP TABLE IF EXISTS Activities;
Create table If Not Exists Activities (
    player_id int,
    device_id int,
    event_date date,
    games_played int,
    user_id int,
    session_id int,
    activities_date date,
    activities_type ENUM(
        'open_session',
        'end_session',
        'scroll_down',
        'send_message'
    ),
    id int,
    name varchar(30)
);
Truncate table Activities;
insert into Activities (player_id, device_id, event_date, games_played)
values ('1', '2', '2016-03-01', '5');
insert into Activities (player_id, device_id, event_date, games_played)
values ('1', '2', '2016-05-02', '6');
insert into Activities (player_id, device_id, event_date, games_played)
values ('2', '3', '2017-06-25', '1');
insert into Activities (player_id, device_id, event_date, games_played)
values ('3', '1', '2016-03-02', '0');
insert into Activities (player_id, device_id, event_date, games_played)
values ('3', '4', '2018-07-03', '5');
insert into Activities (
        user_id,
        session_id,
        activities_date,
        activities_type
    )
values ('1', '1', '2019-07-20', 'open_session');
insert into Activities (
        user_id,
        session_id,
        activities_date,
        activities_type
    )
values ('1', '1', '2019-07-20', 'scroll_down');
insert into Activities (
        user_id,
        session_id,
        activities_date,
        activities_type
    )
values ('1', '1', '2019-07-20', 'end_session');
insert into Activities (
        user_id,
        session_id,
        activities_date,
        activities_type
    )
values ('2', '4', '2019-07-20', 'open_session');
insert into Activities (
        user_id,
        session_id,
        activities_date,
        activities_type
    )
values ('2', '4', '2019-07-21', 'send_message');
insert into Activities (
        user_id,
        session_id,
        activities_date,
        activities_type
    )
values ('2', '4', '2019-07-21', 'end_session');
insert into Activities (
        user_id,
        session_id,
        activities_date,
        activities_type
    )
values ('3', '2', '2019-07-21', 'open_session');
insert into Activities (
        user_id,
        session_id,
        activities_date,
        activities_type
    )
values ('3', '2', '2019-07-21', 'send_message');
insert into Activities (
        user_id,
        session_id,
        activities_date,
        activities_type
    )
values ('3', '2', '2019-07-21', 'end_session');
insert into Activities (
        user_id,
        session_id,
        activities_date,
        activities_type
    )
values ('4', '3', '2019-06-25', 'open_session');
insert into Activities (
        user_id,
        session_id,
        activities_date,
        activities_type
    )
values ('4', '3', '2019-06-25', 'end_session');
insert into Activities (id, name)
values ('1', 'Eating');
insert into Activities (id, name)
values ('2', 'Singing');
insert into Activities (id, name)
values ('3', 'Horse Riding');
SELECT *
FROM Activities;