USE mysql;
DROP TABLE IF EXISTS Address;
Create table If Not Exists Address (
    addressId int,
    personId int,
    city varchar(255),
    state varchar(255)
);
Truncate table Address;
insert into Address (addressId, personId, city, state)
values ('1', '2', 'New York City', 'New York');
insert into Address (addressId, personId, city, state)
values ('2', '3', 'Leetcode', 'California');
SELECT *
FROM Address;