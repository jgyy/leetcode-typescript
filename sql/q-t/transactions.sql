USE mysql;
DROP TABLE IF EXISTS Transactions;
Create table If Not Exists Transactions (
    id int,
    country varchar(4),
    type enum(
        'approved',
        'declined',
        'creditor',
        'debtor',
        'Deposit',
        'Withdraw'
    ),
    amount int,
    trans_date date,
    user_id int,
    date date,
    paid_by int,
    paid_to int,
    transacted_on date,
    visit_id int,
    account int,
    day datetime,
    account_id int
);
Truncate table Transactions;
insert into Transactions (id, country, type, amount, trans_date)
values ('121', 'US', 'approved', '1000', '2018-12-18');
insert into Transactions (id, country, type, amount, trans_date)
values ('122', 'US', 'declined', '2000', '2018-12-19');
insert into Transactions (id, country, type, amount, trans_date)
values ('123', 'US', 'approved', '2000', '2019-01-01');
insert into Transactions (id, country, type, amount, trans_date)
values ('124', 'DE', 'approved', '2000', '2019-01-07');
insert into Transactions (id, country, type, amount, trans_date)
values ('101', 'US', 'approved', '1000', '2019-05-18');
insert into Transactions (id, country, type, amount, trans_date)
values ('102', 'US', 'declined', '2000', '2019-05-19');
insert into Transactions (id, country, type, amount, trans_date)
values ('103', 'US', 'approved', '3000', '2019-06-10');
insert into Transactions (id, country, type, amount, trans_date)
values ('104', 'US', 'declined', '4000', '2019-06-13');
insert into Transactions (id, country, type, amount, trans_date)
values ('105', 'US', 'approved', '5000', '2019-06-15');
insert into Transactions (user_id, date, amount)
values ('1', '2020-01-02', '120');
insert into Transactions (user_id, date, amount)
values ('2', '2020-01-03', '22');
insert into Transactions (user_id, date, amount)
values ('7', '2020-01-11', '232');
insert into Transactions (user_id, date, amount)
values ('1', '2020-01-04', '7');
insert into Transactions (user_id, date, amount)
values ('9', '2020-01-25', '33');
insert into Transactions (user_id, date, amount)
values ('9', '2020-01-25', '66');
insert into Transactions (user_id, date, amount)
values ('8', '2020-01-28', '1');
insert into Transactions (user_id, date, amount)
values ('9', '2020-01-25', '99');
insert into Transactions (
        id,
        paid_by,
        paid_to,
        amount,
        transacted_on
    )
values ('1', '1', '3', '400', '2020-08-01');
insert into Transactions (
        id,
        paid_by,
        paid_to,
        amount,
        transacted_on
    )
values ('2', '3', '2', '500', '2020-08-02');
insert into Transactions (
        id,
        paid_by,
        paid_to,
        amount,
        transacted_on
    )
values ('3', '2', '1', '200', '2020-08-03');
insert into Transactions (id, visit_id, amount)
values ('2', '5', '310');
insert into Transactions (id, visit_id, amount)
values ('3', '5', '300');
insert into Transactions (id, visit_id, amount)
values ('9', '5', '200');
insert into Transactions (id, visit_id, amount)
values ('12', '1', '910');
insert into Transactions (id, visit_id, amount)
values ('13', '2', '970');
insert into Transactions (id, account, amount, transacted_on)
values ('1', '900001', '7000', '2020-08-01');
insert into Transactions (id, account, amount, transacted_on)
values ('2', '900001', '7000', '2020-09-01');
insert into Transactions (id, account, amount, transacted_on)
values ('3', '900001', '-3000', '2020-09-02');
insert into Transactions (id, account, amount, transacted_on)
values ('4', '900002', '1000', '2020-09-12');
insert into Transactions (id, account, amount, transacted_on)
values ('5', '900003', '6000', '2020-08-07');
insert into Transactions (id, account, amount, transacted_on)
values ('6', '900003', '6000', '2020-09-07');
insert into Transactions (id, account, amount, transacted_on)
values ('7', '900003', '-4000', '2020-09-11');
insert into Transactions (id, day, amount)
values ('8', '2021-4-3 15:57:28', '57');
insert into Transactions (id, day, amount)
values ('9', '2021-4-28 08:47:25', '21');
insert into Transactions (id, day, amount)
values ('1', '2021-4-29 13:28:30', '58');
insert into Transactions (id, day, amount)
values ('5', '2021-4-28 16:39:59', '40');
insert into Transactions (id, day, amount)
values ('6', '2021-4-29 23:39:28', '58');
insert into Transactions (id, account_id, type, amount, day)
values (
        '2',
        '3',
        'Creditor',
        '107100',
        '2021-06-02 11:38:14'
    );
insert into Transactions (id, account_id, type, amount, day)
values (
        '4',
        '4',
        'Creditor',
        '10400',
        '2021-06-20 12:39:18'
    );
insert into Transactions (id, account_id, type, amount, day)
values (
        '11',
        '4',
        'Debtor',
        '58800',
        '2021-07-23 12:41:55'
    );
insert into Transactions (id, account_id, type, amount, day)
values (
        '1',
        '4',
        'Creditor',
        '49300',
        '2021-05-03 16:11:04'
    );
insert into Transactions (id, account_id, type, amount, day)
values (
        '15',
        '3',
        'Debtor',
        '75500',
        '2021-05-23 14:40:20'
    );
insert into Transactions (id, account_id, type, amount, day)
values (
        '10',
        '3',
        'Creditor',
        '102100',
        '2021-06-15 10:37:16'
    );
insert into Transactions (id, account_id, type, amount, day)
values (
        '14',
        '4',
        'Creditor',
        '56300',
        '2021-07-21 12:12:25'
    );
insert into Transactions (id, account_id, type, amount, day)
values (
        '19',
        '4',
        'Debtor',
        '101100',
        '2021-05-09 15:21:49'
    );
insert into Transactions (id, account_id, type, amount, day)
values (
        '8',
        '3',
        'Creditor',
        '64900',
        '2021-07-26 15:09:56'
    );
insert into Transactions (id, account_id, type, amount, day)
values (
        '7',
        '3',
        'Creditor',
        '90900',
        '2021-06-14 11:23:07'
    );
insert into Transactions (account_id, day, type, amount)
values ('1', '2021-11-07', 'Deposit', '2000');
insert into Transactions (account_id, day, type, amount)
values ('1', '2021-11-09', 'Withdraw', '1000');
insert into Transactions (account_id, day, type, amount)
values ('1', '2021-11-11', 'Deposit', '3000');
insert into Transactions (account_id, day, type, amount)
values ('2', '2021-12-07', 'Deposit', '7000');
insert into Transactions (account_id, day, type, amount)
values ('2', '2021-12-12', 'Withdraw', '7000');
SELECT *
FROM Transactions;