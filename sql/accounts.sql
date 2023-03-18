USE mysql;
DROP Table If Exists Accounts;
Create table If Not Exists Accounts (id int, name varchar(10));
Truncate table Accounts;
insert into Accounts (id, name)
values ('1', 'Winston');
insert into Accounts (id, name)
values ('7', 'Jonathan');
SELECT *
FROM Accounts;