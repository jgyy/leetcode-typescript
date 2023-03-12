USE mysql;
DROP TABLE IF EXISTS Sales;
Create table If Not Exists Sales (
    sale_id int,
    product_id int,
    year int,
    quantity int,
    price int,
    seller_id int,
    buyer_id int,
    sale_date date
);
Truncate table Sales;
insert into Sales (sale_id, product_id, year, quantity, price)
values ('1', '100', '2008', '10', '5000');
insert into Sales (sale_id, product_id, year, quantity, price)
values ('2', '100', '2009', '12', '5000');
insert into Sales (sale_id, product_id, year, quantity, price)
values ('7', '200', '2011', '15', '9000');
insert into Sales (
        seller_id,
        product_id,
        buyer_id,
        sale_date,
        quantity,
        price
    )
values ('1', '1', '1', '2019-01-21', '2', '2000');
insert into Sales (
        seller_id,
        product_id,
        buyer_id,
        sale_date,
        quantity,
        price
    )
values ('1', '2', '2', '2019-02-17', '1', '800');
insert into Sales (
        seller_id,
        product_id,
        buyer_id,
        sale_date,
        quantity,
        price
    )
values ('2', '2', '3', '2019-06-02', '1', '800');
insert into Sales (
        seller_id,
        product_id,
        buyer_id,
        sale_date,
        quantity,
        price
    )
values ('3', '3', '4', '2019-05-13', '2', '2800');
SELECT *
FROM Sales;