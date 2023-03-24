USE mysql;
DROP TABLE IF EXISTS Purchases;
Create table If Not Exists Purchases (
    visit_id int,
    charged_amount int,
    user_id int,
    time_stamp datetime,
    amount int,
    purchase_id int,
    purchase_date date
);
Truncate table Purchases;
insert into Purchases (visit_id, charged_amount)
values ('12', '2000');
insert into Purchases (visit_id, charged_amount)
values ('18', '9000');
insert into Purchases (visit_id, charged_amount)
values ('17', '7000');
insert into Purchases (user_id, time_stamp, amount)
values ('1', '2022-04-20 09:03:00', '4416');
insert into Purchases (user_id, time_stamp, amount)
values ('2', '2022-03-19 19:24:02', '678');
insert into Purchases (user_id, time_stamp, amount)
values ('3', '2022-03-18 12:03:09', '4523');
insert into Purchases (user_id, time_stamp, amount)
values ('3', '2022-03-30 09:43:42', '626');
insert into Purchases (purchase_id, user_id, purchase_date)
values ('4', '2', '2022-03-13');
insert into Purchases (purchase_id, user_id, purchase_date)
values ('1', '5', '2022-02-11');
insert into Purchases (purchase_id, user_id, purchase_date)
values ('3', '7', '2022-06-19');
insert into Purchases (purchase_id, user_id, purchase_date)
values ('6', '2', '2022-03-20');
insert into Purchases (purchase_id, user_id, purchase_date)
values ('5', '7', '2022-06-19');
insert into Purchases (purchase_id, user_id, purchase_date)
values ('2', '2', '2022-06-08');
SELECT *
FROM Purchases;