USE mysql;
DROP TABLE IF EXISTS Sales;
Create table If Not Exists Sales (
    id int,
    product_id int,
    year int,
    quantity int,
    price int,
    seller_id int,
    buyer_id int,
    sale_date date,
    period_start date,
    period_end date,
    average_daily_sales int,
    fruit ENUM('apples', 'oranges'),
    sold_num int,
    product_name varchar(30)
);
Truncate table Sales;
insert into Sales (id, product_id, year, quantity, price)
values ('1', '100', '2008', '10', '5000');
insert into Sales (id, product_id, year, quantity, price)
values ('2', '100', '2009', '12', '5000');
insert into Sales (id, product_id, year, quantity, price)
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
insert into Sales (
        product_id,
        period_start,
        period_end,
        average_daily_sales
    )
values ('1', '2019-01-25', '2019-02-28', '100');
insert into Sales (
        product_id,
        period_start,
        period_end,
        average_daily_sales
    )
values ('2', '2018-12-01', '2020-01-01', '10');
insert into Sales (
        product_id,
        period_start,
        period_end,
        average_daily_sales
    )
values ('3', '2019-12-01', '2020-01-31', '1');
insert into Sales (sale_date, fruit, sold_num)
values ('2020-05-01', 'apples', '10');
insert into Sales (sale_date, fruit, sold_num)
values ('2020-05-01', 'oranges', '8');
insert into Sales (sale_date, fruit, sold_num)
values ('2020-05-02', 'apples', '15');
insert into Sales (sale_date, fruit, sold_num)
values ('2020-05-02', 'oranges', '15');
insert into Sales (sale_date, fruit, sold_num)
values ('2020-05-03', 'apples', '20');
insert into Sales (sale_date, fruit, sold_num)
values ('2020-05-03', 'oranges', '0');
insert into Sales (sale_date, fruit, sold_num)
values ('2020-05-04', 'apples', '15');
insert into Sales (sale_date, fruit, sold_num)
values ('2020-05-04', 'oranges', '16');
insert into Sales (id, product_name, sale_date)
values ('1', 'LCPHONE', '2000-01-16');
insert into Sales (id, product_name, sale_date)
values ('2', 'LCPhone', '2000-01-17');
insert into Sales (id, product_name, sale_date)
values ('3', 'LcPhOnE', '2000-02-18');
insert into Sales (id, product_name, sale_date)
values ('4', 'LCKeyCHAiN', '2000-02-19');
insert into Sales (id, product_name, sale_date)
values ('5', 'LCKeyChain', '2000-02-28');
insert into Sales (id, product_name, sale_date)
values ('6', 'Matryoshka', '2000-03-31');
SELECT *
FROM Sales;