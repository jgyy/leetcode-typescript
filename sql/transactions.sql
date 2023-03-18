USE mysql;
DROP TABLE IF EXISTS Transactions;
Create table If Not Exists Transactions (
    id int,
    country varchar(4),
    state enum('approved', 'declined'),
    amount int,
    trans_date date,
    user_id int,
    transaction_date date,
    trans_id int,
    paid_by int,
    paid_to int,
    transacted_on date,
    transaction_id int,
    visit_id int,
    account int
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
insert into Transactions (
        trans_id,
        paid_by,
        paid_to,
        amount,
        transacted_on
    )
values ('1', '1', '3', '400', '2020-08-01');
insert into Transactions (
        trans_id,
        paid_by,
        paid_to,
        amount,
        transacted_on
    )
values ('2', '3', '2', '500', '2020-08-02');
insert into Transactions (
        trans_id,
        paid_by,
        paid_to,
        amount,
        transacted_on
    )
values ('3', '2', '1', '200', '2020-08-03');
insert into Transactions (transaction_id, visit_id, amount)
values ('2', '5', '310');
insert into Transactions (transaction_id, visit_id, amount)
values ('3', '5', '300');
insert into Transactions (transaction_id, visit_id, amount)
values ('9', '5', '200');
insert into Transactions (transaction_id, visit_id, amount)
values ('12', '1', '910');
insert into Transactions (transaction_id, visit_id, amount)
values ('13', '2', '970');
insert into Transactions (trans_id, account, amount, transacted_on)
values ('1', '900001', '7000', '2020-08-01');
insert into Transactions (trans_id, account, amount, transacted_on)
values ('2', '900001', '7000', '2020-09-01');
insert into Transactions (trans_id, account, amount, transacted_on)
values ('3', '900001', '-3000', '2020-09-02');
insert into Transactions (trans_id, account, amount, transacted_on)
values ('4', '900002', '1000', '2020-09-12');
insert into Transactions (trans_id, account, amount, transacted_on)
values ('5', '900003', '6000', '2020-08-07');
insert into Transactions (trans_id, account, amount, transacted_on)
values ('6', '900003', '6000', '2020-09-07');
insert into Transactions (trans_id, account, amount, transacted_on)
values ('7', '900003', '-4000', '2020-09-11');
SELECT *
FROM Transactions;