USE mysql;
DROP TABLE IF EXISTS Boxes;
Create table If Not Exists Boxes (
    box_id int,
    chest_id int,
    apple_count int,
    orange_count int
);
Truncate table Boxes;
insert into Boxes (box_id, chest_id, apple_count, orange_count)
values ('2', 'None', '6', '15');
insert into Boxes (box_id, chest_id, apple_count, orange_count)
values ('18', '14', '4', '15');
insert into Boxes (box_id, chest_id, apple_count, orange_count)
values ('19', '3', '8', '4');
insert into Boxes (box_id, chest_id, apple_count, orange_count)
values ('12', '2', '19', '20');
insert into Boxes (box_id, chest_id, apple_count, orange_count)
values ('20', '6', '12', '9');
insert into Boxes (box_id, chest_id, apple_count, orange_count)
values ('8', '6', '9', '9');
insert into Boxes (box_id, chest_id, apple_count, orange_count)
values ('3', '14', '16', '7');
SELECT *
FROM Boxes;