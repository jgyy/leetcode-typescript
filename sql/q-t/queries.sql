USE mysql;
DROP TABLE IF EXISTS Queries;
Create table If Not Exists Queries (
    query_name varchar(30),
    result varchar(50),
    position int,
    rating int,
    id int,
    year int
);
Truncate table Queries;
insert into Queries (query_name, result, position, rating)
values ('Dog', 'Golden Retriever', '1', '5');
insert into Queries (query_name, result, position, rating)
values ('Dog', 'German Shepherd', '2', '5');
insert into Queries (query_name, result, position, rating)
values ('Dog', 'Mule', '200', '1');
insert into Queries (query_name, result, position, rating)
values ('Cat', 'Shirazi', '5', '2');
insert into Queries (query_name, result, position, rating)
values ('Cat', 'Siamese', '3', '3');
insert into Queries (query_name, result, position, rating)
values ('Cat', 'Sphynx', '7', '4');
insert into Queries (id, year)
values ('1', '2019');
insert into Queries (id, year)
values ('2', '2008');
insert into Queries (id, year)
values ('3', '2009');
insert into Queries (id, year)
values ('7', '2018');
insert into Queries (id, year)
values ('7', '2019');
insert into Queries (id, year)
values ('7', '2020');
insert into Queries (id, year)
values ('13', '2019');
SELECT *
FROM Queries;