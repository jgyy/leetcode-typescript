USE mysql;
DROP TABLE IF EXISTS Users;
Create table If Not Exists Users (
    user_id int,
    banned varchar(50),
    role ENUM('client', 'driver', 'partner'),
    join_date date,
    favorite_brand varchar(10),
    name varchar(40),
    id int,
    mail varchar(50),
    user_name varchar(40),
    credit int,
    account int
);
Truncate table Users;
insert into Users (user_id, banned, role)
values ('1', 'No', 'client');
insert into Users (user_id, banned, role)
values ('2', 'Yes', 'client');
insert into Users (user_id, banned, role)
values ('3', 'No', 'client');
insert into Users (user_id, banned, role)
values ('4', 'No', 'client');
insert into Users (user_id, banned, role)
values ('10', 'No', 'driver');
insert into Users (user_id, banned, role)
values ('11', 'No', 'driver');
insert into Users (user_id, banned, role)
values ('12', 'No', 'driver');
insert into Users (user_id, banned, role)
values ('13', 'No', 'driver');
insert into Users (user_id, join_date, favorite_brand)
values ('1', '2018-01-01', 'Lenovo');
insert into Users (user_id, join_date, favorite_brand)
values ('2', '2018-02-09', 'Samsung');
insert into Users (user_id, join_date, favorite_brand)
values ('3', '2018-01-19', 'LG');
insert into Users (user_id, join_date, favorite_brand)
values ('4', '2018-05-21', 'HP');
insert into Users (user_id, name)
values ('1', 'Daniel');
insert into Users (user_id, name)
values ('2', 'Monica');
insert into Users (user_id, name)
values ('3', 'Maria');
insert into Users (user_id, name)
values ('4', 'James');
insert into Users (id, name)
values ('1', 'Alice');
insert into Users (id, name)
values ('2', 'Bob');
insert into Users (id, name)
values ('3', 'Alex');
insert into Users (id, name)
values ('4', 'Donald');
insert into Users (id, name)
values ('7', 'Lee');
insert into Users (id, name)
values ('13', 'Jonathan');
insert into Users (id, name)
values ('19', 'Elvis');
insert into Users (user_id, name, mail)
values ('1', 'Winston', 'winston@leetcode.com');
insert into Users (user_id, name, mail)
values ('2', 'Jonathan', 'jonathanisgreat');
insert into Users (user_id, name, mail)
values ('3', 'Annabelle', 'bella-@leetcode.com');
insert into Users (user_id, name, mail)
values ('4', 'Sally', 'sally.come@leetcode.com');
insert into Users (user_id, name, mail)
values ('5', 'Marwan', 'quarz#2020@leetcode.com');
insert into Users (user_id, name, mail)
values ('6', 'David', 'david69@gmail.com');
insert into Users (user_id, name, mail)
values ('7', 'Shapiro', '.shapo@leetcode.com');
insert into Users (user_id, user_name, credit)
values ('1', 'Moustafa', '100');
insert into Users (user_id, user_name, credit)
values ('2', 'Jonathan', '200');
insert into Users (user_id, user_name, credit)
values ('3', 'Winston', '10000');
insert into Users (user_id, user_name, credit)
values ('4', 'Luis', '800');
insert into Users (account, name)
values ('900001', 'Alice');
insert into Users (account, name)
values ('900002', 'Bob');
insert into Users (account, name)
values ('900003', 'Charlie');
insert into Users (user_id, user_name)
values ('6', 'Alice');
insert into Users (user_id, user_name)
values ('2', 'Bob');
insert into Users (user_id, user_name)
values ('7', 'Alex');
insert into Users (user_id, name)
values ('1', 'aLice');
insert into Users (user_id, name)
values ('2', 'bOB');
insert into Users (user_id, mail, name)
values ('1', 'sarah@leetcode.com', 'Sarah');
insert into Users (user_id, mail, name)
values ('2', 'bob@leetcode.com', 'Bob');
insert into Users (user_id, mail, name)
values ('3', 'alice@leetcode.com', 'Alice');
insert into Users (user_id, mail, name)
values ('4', 'hercy@leetcode.com', 'Hercy');
insert into Users (user_id, mail, name)
values ('5', 'quarz@leetcode.com', 'Quarz');
SELECT *
FROM Users;