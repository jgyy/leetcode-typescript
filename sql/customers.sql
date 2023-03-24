USE mysql;
DROP TABLE IF EXISTS Customers;
Create table If Not Exists Customers (
    id int,
    customer_id int,
    referee_id int,
    product_key int,
    name varchar(40),
    visited_on date,
    amount int,
    customer_name varchar(30),
    email varchar(30),
    country varchar(30),
    year int,
    revenue int
);
Truncate table Customers;
insert into Customers (id, name)
values ('1', 'Joe');
insert into Customers (id, name)
values ('2', 'Henry');
insert into Customers (id, name)
values ('3', 'Sam');
insert into Customers (id, name)
values ('4', 'Max');
insert into Customers (id, name, referee_id)
values ('1', 'Will', Null);
insert into Customers (id, name, referee_id)
values ('2', 'Jane', Null);
insert into Customers (id, name, referee_id)
values ('3', 'Alex', '2');
insert into Customers (id, name, referee_id)
values ('4', 'Bill', Null);
insert into Customers (id, name, referee_id)
values ('5', 'Zack', '1');
insert into Customers (id, name, referee_id)
values ('6', 'Mark', '2');
insert into Customers (customer_id, product_key)
values ('1', '5');
insert into Customers (customer_id, product_key)
values ('2', '6');
insert into Customers (customer_id, product_key)
values ('3', '5');
insert into Customers (customer_id, product_key)
values ('3', '6');
insert into Customers (customer_id, product_key)
values ('1', '6');
insert into Customers (customer_id, name, visited_on, amount)
values ('1', 'Jhon', '2019-01-01', '100');
insert into Customers (customer_id, name, visited_on, amount)
values ('2', 'Daniel', '2019-01-02', '110');
insert into Customers (customer_id, name, visited_on, amount)
values ('3', 'Jade', '2019-01-03', '120');
insert into Customers (customer_id, name, visited_on, amount)
values ('4', 'Khaled', '2019-01-04', '130');
insert into Customers (customer_id, name, visited_on, amount)
values ('5', 'Winston', '2019-01-05', '110');
insert into Customers (customer_id, name, visited_on, amount)
values ('6', 'Elvis', '2019-01-06', '140');
insert into Customers (customer_id, name, visited_on, amount)
values ('7', 'Anna', '2019-01-07', '150');
insert into Customers (customer_id, name, visited_on, amount)
values ('8', 'Maria', '2019-01-08', '80');
insert into Customers (customer_id, name, visited_on, amount)
values ('9', 'Jaze', '2019-01-09', '110');
insert into Customers (customer_id, name, visited_on, amount)
values ('1', 'Jhon', '2019-01-10', '130');
insert into Customers (customer_id, name, visited_on, amount)
values ('3', 'Jade', '2019-01-10', '150');
insert into Customers (customer_id, customer_name, email)
values ('1', 'Alice', 'alice@leetcode.com');
insert into Customers (customer_id, customer_name, email)
values ('2', 'Bob', 'bob@leetcode.com');
insert into Customers (customer_id, customer_name, email)
values ('13', 'John', 'john@leetcode.com');
insert into Customers (customer_id, customer_name, email)
values ('6', 'Alex', 'alex@leetcode.com');
insert into Customers (customer_id, customer_name)
values ('1', 'Daniel');
insert into Customers (customer_id, customer_name)
values ('2', 'Diana');
insert into Customers (customer_id, customer_name)
values ('3', 'Elizabeth');
insert into Customers (customer_id, customer_name)
values ('4', 'Jhon');
insert into Customers (customer_id, name, country)
values ('1', 'Winston', 'USA');
insert into Customers (customer_id, name, country)
values ('2', 'Jonathan', 'Peru');
insert into Customers (customer_id, name, country)
values ('3', 'Moustafa', 'Egypt');
insert into Customers (customer_id, name)
values ('1', 'Winston');
insert into Customers (customer_id, name)
values ('2', 'Jonathan');
insert into Customers (customer_id, name)
values ('3', 'Annabelle');
insert into Customers (customer_id, name)
values ('4', 'Marwan');
insert into Customers (customer_id, name)
values ('5', 'Khaled');
insert into Customers (customer_id, name)
values ('1', 'Winston');
insert into Customers (customer_id, name)
values ('2', 'Jonathan');
insert into Customers (customer_id, name)
values ('3', 'Annabelle');
insert into Customers (customer_id, name)
values ('4', 'Marwan');
insert into Customers (customer_id, name)
values ('5', 'Khaled');
insert into Customers (customer_id, name)
values ('1', 'Alice');
insert into Customers (customer_id, name)
values ('2', 'Bob');
insert into Customers (customer_id, name)
values ('3', 'Tom');
insert into Customers (customer_id, name)
values ('4', 'Jerry');
insert into Customers (customer_id, name)
values ('5', 'John');
insert into Customers (customer_id, customer_name)
values ('101', 'Alice');
insert into Customers (customer_id, customer_name)
values ('102', 'Bob');
insert into Customers (customer_id, customer_name)
values ('103', 'Charlie');
insert into Customers (customer_id, customer_name)
values ('1', 'Alice');
insert into Customers (customer_id, customer_name)
values ('4', 'Bob');
insert into Customers (customer_id, customer_name)
values ('5', 'Charlie');
insert into Customers (customer_id, year, revenue)
values ('1', '2018', '50');
insert into Customers (customer_id, year, revenue)
values ('1', '2021', '30');
insert into Customers (customer_id, year, revenue)
values ('1', '2020', '70');
insert into Customers (customer_id, year, revenue)
values ('2', '2021', '-50');
insert into Customers (customer_id, year, revenue)
values ('3', '2018', '10');
insert into Customers (customer_id, year, revenue)
values ('3', '2016', '50');
insert into Customers (customer_id, year, revenue)
values ('4', '2021', '20');
SELECT *
FROM Customers;