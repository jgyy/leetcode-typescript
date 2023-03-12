USE mysql;
DROP TABLE IF EXISTS Customers;
Create table If Not Exists Customers (
    id int,
    customer_id int,
    referee_id int,
    product_key int,
    name varchar(255),
    visited_on date,
    amount int,
    customer_name varchar(20),
    email varchar(30)
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
SELECT *
FROM Customers;