USE mysql;
DROP TABLE IF EXISTS Chargebacks;
Create table If Not Exists Chargebacks (trans_id int, trans_date date);
Truncate table Chargebacks;
insert into Chargebacks (trans_id, trans_date)
values ('102', '2019-05-29');
insert into Chargebacks (trans_id, trans_date)
values ('101', '2019-06-30');
insert into Chargebacks (trans_id, trans_date)
values ('105', '2019-09-18');
SELECT *
FROM Chargebacks;