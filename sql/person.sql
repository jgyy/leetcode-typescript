USE mysql;
DROP TABLE IF EXISTS Person;
Create table If Not Exists Person (
    personId int,
    firstName varchar(255),
    lastName varchar(255),
    id int,
    email varchar(255),
    name varchar(255),
    phone_number varchar(11)
);
Truncate table Person;
insert into Person (personId, lastName, firstName)
values ('1', 'Wang', 'Allen');
insert into Person (personId, lastName, firstName)
values ('2', 'Alice', 'Bob');
insert into Person (id, email)
values ('1', 'a@b.com');
insert into Person (id, email)
values ('2', 'c@d.com');
insert into Person (id, email)
values ('3', 'a@b.com');
insert into Person (id, email)
values ('1', 'john@example.com');
insert into Person (id, email)
values ('2', 'bob@example.com');
insert into Person (id, email)
values ('3', 'john@example.com');
insert into Person (id, name, phone_number)
values ('3', 'Jonathan', '051-1234567');
insert into Person (id, name, phone_number)
values ('12', 'Elvis', '051-7654321');
insert into Person (id, name, phone_number)
values ('1', 'Moncef', '212-1234567');
insert into Person (id, name, phone_number)
values ('2', 'Maroua', '212-6523651');
insert into Person (id, name, phone_number)
values ('7', 'Meir', '972-1234567');
insert into Person (id, name, phone_number)
values ('9', 'Rachel', '972-0011100');
SELECT *
FROM Person;