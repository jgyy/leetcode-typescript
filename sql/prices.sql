USE mysql;
DROP TABLE IF EXISTS Prices;
Create table If Not Exists Prices (
    product_id int,
    start_date date,
    end_date date,
    price int
);
Truncate table Prices;
insert into Prices (product_id, start_date, end_date, price)
values ('1', '2019-02-17', '2019-02-28', '5');
insert into Prices (product_id, start_date, end_date, price)
values ('1', '2019-03-01', '2019-03-22', '20');
insert into Prices (product_id, start_date, end_date, price)
values ('2', '2019-02-01', '2019-02-20', '15');
insert into Prices (product_id, start_date, end_date, price)
values ('2', '2019-02-21', '2019-03-31', '30');
SELECT *
FROM Prices;