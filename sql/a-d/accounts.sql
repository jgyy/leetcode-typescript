USE mysql;
DROP Table If Exists Accounts;
Create table If Not Exists Accounts (
    id int,
    name varchar(10),
    account_id int,
    max_income int,
    income int
);
Truncate table Accounts;
insert into Accounts (id, name)
values ('1', 'Winston');
insert into Accounts (id, name)
values ('7', 'Jonathan');
insert into Accounts (account_id, max_income)
values ('3', '21000');
insert into Accounts (account_id, max_income)
values ('4', '10400');
insert into Accounts (account_id, income)
values ('3', '108939');
insert into Accounts (account_id, income)
values ('2', '12747');
insert into Accounts (account_id, income)
values ('8', '87709');
insert into Accounts (account_id, income)
values ('6', '91796');
SELECT *
FROM Accounts;