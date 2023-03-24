USE mysql;
DROP TABLE IF EXISTS Activities;
Create table If Not Exists Activities (
    id int,
    device_id int,
    event_date date,
    games_played int,
    session_id int,
    date date,
    type ENUM(
        'open_session',
        'end_session',
        'scroll_down',
        'send_message',
        'start',
        'end'
    ),
    name varchar(30),
    sell_date date,
    product varchar(20),
    machine_id int,
    process_id int,
    timestamp float
);
Truncate table Activities;
insert into Activities (id, device_id, event_date, games_played)
values ('1', '2', '2016-03-01', '5');
insert into Activities (id, device_id, event_date, games_played)
values ('1', '2', '2016-05-02', '6');
insert into Activities (id, device_id, event_date, games_played)
values ('2', '3', '2017-06-25', '1');
insert into Activities (id, device_id, event_date, games_played)
values ('3', '1', '2016-03-02', '0');
insert into Activities (id, device_id, event_date, games_played)
values ('3', '4', '2018-07-03', '5');
insert into Activities (
        id,
        session_id,
        date,
        type
    )
values ('1', '1', '2019-07-20', 'open_session');
insert into Activities (
        id,
        session_id,
        date,
        type
    )
values ('1', '1', '2019-07-20', 'scroll_down');
insert into Activities (
        id,
        session_id,
        date,
        type
    )
values ('1', '1', '2019-07-20', 'end_session');
insert into Activities (
        id,
        session_id,
        date,
        type
    )
values ('2', '4', '2019-07-20', 'open_session');
insert into Activities (
        id,
        session_id,
        date,
        type
    )
values ('2', '4', '2019-07-21', 'send_message');
insert into Activities (
        id,
        session_id,
        date,
        type
    )
values ('2', '4', '2019-07-21', 'end_session');
insert into Activities (
        id,
        session_id,
        date,
        type
    )
values ('3', '2', '2019-07-21', 'open_session');
insert into Activities (
        id,
        session_id,
        date,
        type
    )
values ('3', '2', '2019-07-21', 'send_message');
insert into Activities (
        id,
        session_id,
        date,
        type
    )
values ('3', '2', '2019-07-21', 'end_session');
insert into Activities (
        id,
        session_id,
        date,
        type
    )
values ('4', '3', '2019-06-25', 'open_session');
insert into Activities (
        id,
        session_id,
        date,
        type
    )
values ('4', '3', '2019-06-25', 'end_session');
insert into Activities (id, name)
values ('1', 'Eating');
insert into Activities (id, name)
values ('2', 'Singing');
insert into Activities (id, name)
values ('3', 'Horse Riding');
insert into Activities (sell_date, product)
values ('2020-05-30', 'Headphone');
insert into Activities (sell_date, product)
values ('2020-06-01', 'Pencil');
insert into Activities (sell_date, product)
values ('2020-06-02', 'Mask');
insert into Activities (sell_date, product)
values ('2020-05-30', 'Basketball');
insert into Activities (sell_date, product)
values ('2020-06-01', 'Bible');
insert into Activities (sell_date, product)
values ('2020-06-02', 'Mask');
insert into Activities (sell_date, product)
values ('2020-05-30', 'T-Shirt');
insert into Activities (machine_id, process_id, type, timestamp)
values ('0', '0', 'start', '0.712');
insert into Activities (machine_id, process_id, type, timestamp)
values ('0', '0', 'end', '1.52');
insert into Activities (machine_id, process_id, type, timestamp)
values ('0', '1', 'start', '3.14');
insert into Activities (machine_id, process_id, type, timestamp)
values ('0', '1', 'end', '4.12');
insert into Activities (machine_id, process_id, type, timestamp)
values ('1', '0', 'start', '0.55');
insert into Activities (machine_id, process_id, type, timestamp)
values ('1', '0', 'end', '1.55');
insert into Activities (machine_id, process_id, type, timestamp)
values ('1', '1', 'start', '0.43');
insert into Activities (machine_id, process_id, type, timestamp)
values ('1', '1', 'end', '1.42');
insert into Activities (machine_id, process_id, type, timestamp)
values ('2', '0', 'start', '4.1');
insert into Activities (machine_id, process_id, type, timestamp)
values ('2', '0', 'end', '4.512');
insert into Activities (machine_id, process_id, type, timestamp)
values ('2', '1', 'start', '2.5');
insert into Activities (machine_id, process_id, type, timestamp)
values ('2', '1', 'end', '5');
SELECT *
FROM Activities;