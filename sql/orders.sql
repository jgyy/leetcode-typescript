USE mysql;
DROP TABLE IF EXISTS Orders;
Create table If Not Exists Orders (
    id int,
    customer_id int,
    date date,
    sales_id int,
    amount int,
    book_id int,
    quantity int,
    dispatch_date date,
    item_id int,
    buyer_id int,
    seller_id int,
    product_id int,
    unit int
);
Truncate table Orders;
insert into Orders (id, customer_id)
values ('1', '3');
insert into Orders (id, customer_id)
values ('2', '1');
insert into Orders (id, customer_id)
values ('1', '1');
insert into Orders (id, customer_id)
values ('2', '2');
insert into Orders (id, customer_id)
values ('3', '3');
insert into Orders (id, customer_id)
values ('4', '3');
insert into Orders (id, date, customer_id, sales_id, amount)
values ('1', '2014-1-1', '3', '4', '10000');
insert into Orders (id, date, customer_id, sales_id, amount)
values ('2', '2014-1-2', '4', '5', '5000');
insert into Orders (id, date, customer_id, sales_id, amount)
values ('3', '2014-1-3', '1', '1', '50000');
insert into Orders (id, date, customer_id, sales_id, amount)
values ('4', '2014-1-4', '1', '4', '25000');
insert into Orders (id, book_id, quantity, dispatch_date)
values ('1', '1', '2', '2018-07-26');
insert into Orders (id, book_id, quantity, dispatch_date)
values ('2', '1', '1', '2018-11-05');
insert into Orders (id, book_id, quantity, dispatch_date)
values ('3', '3', '8', '2019-06-11');
insert into Orders (id, book_id, quantity, dispatch_date)
values ('4', '4', '6', '2019-06-05');
insert into Orders (id, book_id, quantity, dispatch_date)
values ('5', '4', '5', '2019-06-20');
insert into Orders (id, book_id, quantity, dispatch_date)
values ('6', '5', '9', '2009-02-02');
insert into Orders (id, book_id, quantity, dispatch_date)
values ('7', '5', '8', '2010-04-13');
insert into Orders (
        id,
        date,
        item_id,
        buyer_id,
        seller_id
    )
values ('1', '2019-08-01', '4', '1', '2');
insert into Orders (
        id,
        date,
        item_id,
        buyer_id,
        seller_id
    )
values ('2', '2018-08-02', '2', '1', '3');
insert into Orders (
        id,
        date,
        item_id,
        buyer_id,
        seller_id
    )
values ('3', '2019-08-03', '3', '2', '3');
insert into Orders (
        id,
        date,
        item_id,
        buyer_id,
        seller_id
    )
values ('4', '2018-08-04', '1', '4', '2');
insert into Orders (
        id,
        date,
        item_id,
        buyer_id,
        seller_id
    )
values ('5', '2018-08-04', '1', '3', '4');
insert into Orders (
        id,
        date,
        item_id,
        buyer_id,
        seller_id
    )
values ('6', '2019-08-05', '2', '2', '4');
insert into Orders (product_id, date, unit)
values ('1', '2020-02-05', '60');
insert into Orders (product_id, date, unit)
values ('1', '2020-02-10', '70');
insert into Orders (product_id, date, unit)
values ('2', '2020-01-18', '30');
insert into Orders (product_id, date, unit)
values ('2', '2020-02-11', '80');
insert into Orders (product_id, date, unit)
values ('3', '2020-02-17', '2');
insert into Orders (product_id, date, unit)
values ('3', '2020-02-24', '3');
insert into Orders (product_id, date, unit)
values ('4', '2020-03-01', '20');
insert into Orders (product_id, date, unit)
values ('4', '2020-03-04', '30');
insert into Orders (product_id, date, unit)
values ('4', '2020-03-04', '60');
insert into Orders (product_id, date, unit)
values ('5', '2020-02-25', '50');
insert into Orders (product_id, date, unit)
values ('5', '2020-02-27', '50');
insert into Orders (product_id, date, unit)
values ('5', '2020-03-01', '50');
SELECT *
FROM Orders;