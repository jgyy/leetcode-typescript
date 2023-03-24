USE mysql;
DROP TABLE IF EXISTS contests;
Create table If Not Exists Contests (
    contest_id int,
    gold_medal int,
    silver_medal int,
    bronze_medal int
);
Truncate table Contests;
insert into Contests (
        contest_id,
        gold_medal,
        silver_medal,
        bronze_medal
    )
values ('190', '1', '5', '2');
insert into Contests (
        contest_id,
        gold_medal,
        silver_medal,
        bronze_medal
    )
values ('191', '2', '3', '5');
insert into Contests (
        contest_id,
        gold_medal,
        silver_medal,
        bronze_medal
    )
values ('192', '5', '2', '3');
insert into Contests (
        contest_id,
        gold_medal,
        silver_medal,
        bronze_medal
    )
values ('193', '1', '3', '5');
insert into Contests (
        contest_id,
        gold_medal,
        silver_medal,
        bronze_medal
    )
values ('194', '4', '5', '2');
insert into Contests (
        contest_id,
        gold_medal,
        silver_medal,
        bronze_medal
    )
values ('195', '4', '2', '1');
insert into Contests (
        contest_id,
        gold_medal,
        silver_medal,
        bronze_medal
    )
values ('196', '1', '5', '2');
SELECT *
FROM contests;