USE mysql;
DROP TABLE IF EXISTS Calls;
Create table If Not Exists Calls (
    caller_id int,
    callee_id int,
    duration int,
    from_id int,
    to_id int,
    recipient_id int,
    call_time datetime
);
Truncate table Calls;
insert into Calls (caller_id, callee_id, duration)
values ('1', '9', '33');
insert into Calls (caller_id, callee_id, duration)
values ('2', '9', '4');
insert into Calls (caller_id, callee_id, duration)
values ('1', '2', '59');
insert into Calls (caller_id, callee_id, duration)
values ('3', '12', '102');
insert into Calls (caller_id, callee_id, duration)
values ('3', '12', '330');
insert into Calls (caller_id, callee_id, duration)
values ('12', '3', '5');
insert into Calls (caller_id, callee_id, duration)
values ('7', '9', '13');
insert into Calls (caller_id, callee_id, duration)
values ('7', '1', '3');
insert into Calls (caller_id, callee_id, duration)
values ('9', '7', '1');
insert into Calls (caller_id, callee_id, duration)
values ('1', '7', '7');
insert into Calls (from_id, to_id, duration)
values ('1', '2', '59');
insert into Calls (from_id, to_id, duration)
values ('2', '1', '11');
insert into Calls (from_id, to_id, duration)
values ('1', '3', '20');
insert into Calls (from_id, to_id, duration)
values ('3', '4', '100');
insert into Calls (from_id, to_id, duration)
values ('3', '4', '200');
insert into Calls (from_id, to_id, duration)
values ('3', '4', '200');
insert into Calls (from_id, to_id, duration)
values ('4', '3', '499');
SELECT *
FROM Calls;