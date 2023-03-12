USE mysql;
DROP TABLE IF EXISTS Orders;
Create table If Not Exists Orders (
    id int,
    customerId int,
    order_number int,
    customer_number int,
    order_id int,
    order_date date,
    com_id int,
    sales_id int,
    amount int
);
Truncate table Orders;
insert into Orders (id, customerId)
values ('1', '3');
insert into Orders (id, customerId)
values ('2', '1');
insert into Orders (order_number, customer_number)
values ('1', '1');
insert into Orders (order_number, customer_number)
values ('2', '2');
insert into Orders (order_number, customer_number)
values ('3', '3');
insert into Orders (order_number, customer_number)
values ('4', '3');
insert into Orders (order_id, order_date, com_id, sales_id, amount)
values ('1', '2014-1-1', '3', '4', '10000');
insert into Orders (order_id, order_date, com_id, sales_id, amount)
values ('2', '2014-1-2', '4', '5', '5000');
insert into Orders (order_id, order_date, com_id, sales_id, amount)
values ('3', '2014-1-3', '1', '1', '50000');
insert into Orders (order_id, order_date, com_id, sales_id, amount)
values ('4', '2014-1-4', '1', '4', '25000');
SELECT *
FROM Orders;