USE mysql;
DROP TABLE IF EXISTS Matches;
Create table If Not Exists Matches (
    id int,
    first_player int,
    second_player int,
    first_score int,
    second_score int,
    host_team int,
    guest_team int,
    host_goals int,
    guest_goals int,
    player_id int,
    match_day date,
    result ENUM('Win', 'Draw', 'Lose')
);
Truncate table Matches;
insert into Matches (
        id,
        first_player,
        second_player,
        first_score,
        second_score
    )
values ('1', '15', '45', '3', '0');
insert into Matches (
        id,
        first_player,
        second_player,
        first_score,
        second_score
    )
values ('2', '30', '25', '1', '2');
insert into Matches (
        id,
        first_player,
        second_player,
        first_score,
        second_score
    )
values ('3', '30', '15', '2', '0');
insert into Matches (
        id,
        first_player,
        second_player,
        first_score,
        second_score
    )
values ('4', '40', '20', '5', '2');
insert into Matches (
        id,
        first_player,
        second_player,
        first_score,
        second_score
    )
values ('5', '35', '50', '1', '1');
insert into Matches (
        id,
        host_team,
        guest_team,
        host_goals,
        guest_goals
    )
values ('1', '10', '20', '3', '0');
insert into Matches (
        id,
        host_team,
        guest_team,
        host_goals,
        guest_goals
    )
values ('2', '30', '10', '2', '2');
insert into Matches (
        id,
        host_team,
        guest_team,
        host_goals,
        guest_goals
    )
values ('3', '10', '50', '5', '1');
insert into Matches (
        id,
        host_team,
        guest_team,
        host_goals,
        guest_goals
    )
values ('4', '20', '30', '1', '0');
insert into Matches (
        id,
        host_team,
        guest_team,
        host_goals,
        guest_goals
    )
values ('5', '50', '30', '1', '0');
insert into Matches (
        host_team,
        guest_team,
        host_goals,
        guest_goals
    )
values ('1', '4', '0', '1');
insert into Matches (
        host_team,
        guest_team,
        host_goals,
        guest_goals
    )
values ('1', '6', '3', '3');
insert into Matches (
        host_team,
        guest_team,
        host_goals,
        guest_goals
    )
values ('4', '1', '5', '2');
insert into Matches (
        host_team,
        guest_team,
        host_goals,
        guest_goals
    )
values ('6', '1', '0', '0');
insert into Matches (player_id, match_day, result)
values ('1', '2022-01-17', 'Win');
insert into Matches (player_id, match_day, result)
values ('1', '2022-01-18', 'Win');
insert into Matches (player_id, match_day, result)
values ('1', '2022-01-25', 'Win');
insert into Matches (player_id, match_day, result)
values ('1', '2022-01-31', 'Draw');
insert into Matches (player_id, match_day, result)
values ('1', '2022-02-08', 'Win');
insert into Matches (player_id, match_day, result)
values ('2', '2022-02-06', 'Lose');
insert into Matches (player_id, match_day, result)
values ('2', '2022-02-08', 'Lose');
insert into Matches (player_id, match_day, result)
values ('3', '2022-03-30', 'Win');
SELECT *
FROM Matches;