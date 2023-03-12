USE mysql;
DROP TABLE IF EXISTS Transactions;
Create table If Not Exists Transactions (
    id int,
    country varchar(4),
    state enum('approved', 'declined'),
    amount int,
    trans_date date,
    user_id int,
    transaction_date date
);
Truncate table Transactions;
insert into Transactions (id, country, state, amount, trans_date)
values ('121', 'US', 'approved', '1000', '2018-12-18');
insert into Transactions (id, country, state, amount, trans_date)
values ('122', 'US', 'declined', '2000', '2018-12-19');
insert into Transactions (id, country, state, amount, trans_date)
values ('123', 'US', 'approved', '2000', '2019-01-01');
insert into Transactions (id, country, state, amount, trans_date)
values ('124', 'DE', 'approved', '2000', '2019-01-07');
insert into Transactions (id, country, state, amount, trans_date)
values ('101', 'US', 'approved', '1000', '2019-05-18');
insert into Transactions (id, country, state, amount, trans_date)
values ('102', 'US', 'declined', '2000', '2019-05-19');
insert into Transactions (id, country, state, amount, trans_date)
values ('103', 'US', 'approved', '3000', '2019-06-10');
insert into Transactions (id, country, state, amount, trans_date)
values ('104', 'US', 'declined', '4000', '2019-06-13');
insert into Transactions (id, country, state, amount, trans_date)
values ('105', 'US', 'approved', '5000', '2019-06-15');
insert into Transactions (user_id, transaction_date, amount)
values ('1', '2020-01-02', '120');
insert into Transactions (user_id, transaction_date, amount)
values ('2', '2020-01-03', '22');
insert into Transactions (user_id, transaction_date, amount)
values ('7', '2020-01-11', '232');
insert into Transactions (user_id, transaction_date, amount)
values ('1', '2020-01-04', '7');
insert into Transactions (user_id, transaction_date, amount)
values ('9', '2020-01-25', '33');
insert into Transactions (user_id, transaction_date, amount)
values ('9', '2020-01-25', '66');
insert into Transactions (user_id, transaction_date, amount)
values ('8', '2020-01-28', '1');
insert into Transactions (user_id, transaction_date, amount)
values ('9', '2020-01-25', '99');
SELECT *
FROM Transactions;