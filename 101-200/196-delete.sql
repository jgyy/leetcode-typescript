USE mysql;
Create table If Not Exists Person (Id int, Email varchar(255));
Truncate table Person;
insert into Person (id, email)
values ('1', 'john@example.com');
insert into Person (id, email)
values ('2', 'bob@example.com');
insert into Person (id, email)
values ('3', 'john@example.com');
-- Write an SQL query to delete all the duplicate emails,
-- keeping only one unique email with the smallest id.
-- Note that you are supposed to write a DELETE statement and not a SELECT one.
delete p1
from Person p1,
    Person p2
where p1.Email = p2.Email
    and p1.Id > p2.Id;