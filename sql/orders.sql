USE mysql;
DROP TABLE IF EXISTS Orders;
Create table If Not Exists Orders (
    id int,
    customer_id int,
    date date,
    sales_id int,
    book_id int,
    cost int,
    quantity int,
    item_id varchar(30),
    buyer_id int,
    seller_id int,
    product_id int,
    unit int,
    product_name varchar(30),
    invoice int,
    sale_date date
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
insert into Orders (id, date, customer_id, sales_id, cost)
values ('1', '2014-1-1', '3', '4', '10000');
insert into Orders (id, date, customer_id, sales_id, cost)
values ('2', '2014-1-2', '4', '5', '5000');
insert into Orders (id, date, customer_id, sales_id, cost)
values ('3', '2014-1-3', '1', '1', '50000');
insert into Orders (id, date, customer_id, sales_id, cost)
values ('4', '2014-1-4', '1', '4', '25000');
insert into Orders (id, book_id, quantity, date)
values ('1', '1', '2', '2018-07-26');
insert into Orders (id, book_id, quantity, date)
values ('2', '1', '1', '2018-11-05');
insert into Orders (id, book_id, quantity, date)
values ('3', '3', '8', '2019-06-11');
insert into Orders (id, book_id, quantity, date)
values ('4', '4', '6', '2019-06-05');
insert into Orders (id, book_id, quantity, date)
values ('5', '4', '5', '2019-06-20');
insert into Orders (id, book_id, quantity, date)
values ('6', '5', '9', '2009-02-02');
insert into Orders (id, book_id, quantity, date)
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
insert into Orders (id, customer_id, product_name)
values ('10', '1', 'A');
insert into Orders (id, customer_id, product_name)
values ('20', '1', 'B');
insert into Orders (id, customer_id, product_name)
values ('30', '1', 'D');
insert into Orders (id, customer_id, product_name)
values ('40', '1', 'C');
insert into Orders (id, customer_id, product_name)
values ('50', '2', 'A');
insert into Orders (id, customer_id, product_name)
values ('60', '3', 'A');
insert into Orders (id, customer_id, product_name)
values ('70', '3', 'B');
insert into Orders (id, customer_id, product_name)
values ('80', '3', 'D');
insert into Orders (id, customer_id, product_name)
values ('90', '4', 'C');
insert into Orders (
        id,
        customer_id,
        date,
        item_id,
        quantity
    )
values ('1', '1', '2020-06-01', '1', '10');
insert into Orders (
        id,
        customer_id,
        date,
        item_id,
        quantity
    )
values ('2', '1', '2020-06-08', '2', '10');
insert into Orders (
        id,
        customer_id,
        date,
        item_id,
        quantity
    )
values ('3', '2', '2020-06-02', '1', '5');
insert into Orders (
        id,
        customer_id,
        date,
        item_id,
        quantity
    )
values ('4', '3', '2020-06-03', '3', '5');
insert into Orders (
        id,
        customer_id,
        date,
        item_id,
        quantity
    )
values ('5', '4', '2020-06-04', '4', '1');
insert into Orders (
        id,
        customer_id,
        date,
        item_id,
        quantity
    )
values ('6', '4', '2020-06-05', '5', '5');
insert into Orders (
        id,
        customer_id,
        date,
        item_id,
        quantity
    )
values ('7', '5', '2020-06-05', '1', '10');
insert into Orders (
        id,
        customer_id,
        date,
        item_id,
        quantity
    )
values ('8', '5', '2020-06-14', '4', '5');
insert into Orders (
        id,
        customer_id,
        date,
        item_id,
        quantity
    )
values ('9', '5', '2020-06-21', '3', '5');
insert into Orders (
        id,
        customer_id,
        product_id,
        date,
        quantity
    )
values ('1', '1', '10', '2020-06-10', '1');
insert into Orders (
        id,
        customer_id,
        product_id,
        date,
        quantity
    )
values ('2', '1', '20', '2020-07-01', '1');
insert into Orders (
        id,
        customer_id,
        product_id,
        date,
        quantity
    )
values ('3', '1', '30', '2020-07-08', '2');
insert into Orders (
        id,
        customer_id,
        product_id,
        date,
        quantity
    )
values ('4', '2', '10', '2020-06-15', '2');
insert into Orders (
        id,
        customer_id,
        product_id,
        date,
        quantity
    )
values ('5', '2', '40', '2020-07-01', '10');
insert into Orders (
        id,
        customer_id,
        product_id,
        date,
        quantity
    )
values ('6', '3', '20', '2020-06-24', '2');
insert into Orders (
        id,
        customer_id,
        product_id,
        date,
        quantity
    )
values ('7', '3', '30', '2020-06-25', '2');
insert into Orders (
        id,
        customer_id,
        product_id,
        date,
        quantity
    )
values ('9', '3', '30', '2020-05-08', '3');
insert into Orders (id, date, customer_id, cost)
values ('1', '2020-07-31', '1', '30');
insert into Orders (id, date, customer_id, cost)
values ('2', '2020-7-30', '2', '40');
insert into Orders (id, date, customer_id, cost)
values ('3', '2020-07-31', '3', '70');
insert into Orders (id, date, customer_id, cost)
values ('4', '2020-07-29', '4', '100');
insert into Orders (id, date, customer_id, cost)
values ('5', '2020-06-10', '1', '1010');
insert into Orders (id, date, customer_id, cost)
values ('6', '2020-08-01', '2', '102');
insert into Orders (id, date, customer_id, cost)
values ('7', '2020-08-01', '3', '111');
insert into Orders (id, date, customer_id, cost)
values ('8', '2020-08-03', '1', '99');
insert into Orders (id, date, customer_id, cost)
values ('9', '2020-08-07', '2', '32');
insert into Orders (id, date, customer_id, cost)
values ('10', '2020-07-15', '1', '2');
insert into Orders (id, date, customer_id, product_id)
values ('1', '2020-07-31', '1', '1');
insert into Orders (id, date, customer_id, product_id)
values ('2', '2020-7-30', '2', '2');
insert into Orders (id, date, customer_id, product_id)
values ('3', '2020-08-29', '3', '3');
insert into Orders (id, date, customer_id, product_id)
values ('4', '2020-07-29', '4', '1');
insert into Orders (id, date, customer_id, product_id)
values ('5', '2020-06-10', '1', '2');
insert into Orders (id, date, customer_id, product_id)
values ('6', '2020-08-01', '2', '1');
insert into Orders (id, date, customer_id, product_id)
values ('7', '2020-08-01', '3', '1');
insert into Orders (id, date, customer_id, product_id)
values ('8', '2020-08-03', '1', '2');
insert into Orders (id, date, customer_id, product_id)
values ('9', '2020-08-07', '2', '3');
insert into Orders (id, date, customer_id, product_id)
values ('10', '2020-07-15', '1', '2');
insert into Orders (id, date, customer_id, invoice)
values ('1', '2020-09-15', '1', '30');
insert into Orders (id, date, customer_id, invoice)
values ('2', '2020-09-17', '2', '90');
insert into Orders (id, date, customer_id, invoice)
values ('3', '2020-10-06', '3', '20');
insert into Orders (id, date, customer_id, invoice)
values ('4', '2020-10-20', '3', '21');
insert into Orders (id, date, customer_id, invoice)
values ('5', '2020-11-10', '1', '10');
insert into Orders (id, date, customer_id, invoice)
values ('6', '2020-11-21', '2', '15');
insert into Orders (id, date, customer_id, invoice)
values ('7', '2020-12-01', '4', '55');
insert into Orders (id, date, customer_id, invoice)
values ('8', '2020-12-03', '4', '77');
insert into Orders (id, date, customer_id, invoice)
values ('9', '2021-01-07', '3', '31');
insert into Orders (id, date, customer_id, invoice)
values ('10', '2021-01-15', '2', '20');
insert into Orders (id, date, customer_id, product_id)
values ('1', '2020-07-31', '1', '1');
insert into Orders (id, date, customer_id, product_id)
values ('2', '2020-7-30', '2', '2');
insert into Orders (id, date, customer_id, product_id)
values ('3', '2020-08-29', '3', '3');
insert into Orders (id, date, customer_id, product_id)
values ('4', '2020-07-29', '4', '1');
insert into Orders (id, date, customer_id, product_id)
values ('5', '2020-06-10', '1', '2');
insert into Orders (id, date, customer_id, product_id)
values ('6', '2020-08-01', '2', '1');
insert into Orders (id, date, customer_id, product_id)
values ('7', '2020-08-01', '3', '3');
insert into Orders (id, date, customer_id, product_id)
values ('8', '2020-08-03', '1', '2');
insert into Orders (id, date, customer_id, product_id)
values ('9', '2020-08-07', '2', '3');
insert into Orders (id, date, customer_id, product_id)
values ('10', '2020-07-15', '1', '2');
insert into Orders (
        id,
        sale_date,
        cost,
        customer_id,
        seller_id
    )
values ('1', '2020-03-01', '1500', '101', '1');
insert into Orders (
        id,
        sale_date,
        cost,
        customer_id,
        seller_id
    )
values ('2', '2020-05-25', '2400', '102', '2');
insert into Orders (
        id,
        sale_date,
        cost,
        customer_id,
        seller_id
    )
values ('3', '2019-05-25', '800', '101', '3');
insert into Orders (
        id,
        sale_date,
        cost,
        customer_id,
        seller_id
    )
values ('4', '2020-09-13', '1000', '103', '2');
insert into Orders (
        id,
        sale_date,
        cost,
        customer_id,
        seller_id
    )
values ('5', '2019-02-11', '700', '101', '2');
SELECT *
FROM Orders;