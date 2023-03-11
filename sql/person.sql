USE mysql;
Create table If Not Exists Person (
    personId int,
    firstName varchar(255),
    lastName varchar(255),
    email varchar(255)
);
Truncate table Person;
insert into Person (personId, lastName, firstName, email)
values ('1', 'Wang', 'Allen', 'a@b.com');
insert into Person (personId, lastName, firstName, email)
values ('2', 'Alice', 'Bob' 'c@d.com');
insert into Person (personId, lastName, firstName, email)
values ('3', 'John', 'Ling' 'john@example.com');
insert into Person (personId, lastName, firstName, email)
values ('4', 'Bob', 'Yi' 'bob@example.com');