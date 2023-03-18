USE mysql;
DROP TABLE IF EXISTS Invoices;
Create table If Not Exists Invoices (
    invoice_id int,
    price int,
    user_id int,
    product_id int,
    rest int,
    paid int,
    canceled int,
    refunded int
);
Truncate table Invoices;
insert into Invoices (invoice_id, price, user_id)
values ('77', '100', '1');
insert into Invoices (invoice_id, price, user_id)
values ('88', '200', '1');
insert into Invoices (invoice_id, price, user_id)
values ('99', '300', '2');
insert into Invoices (invoice_id, price, user_id)
values ('66', '400', '2');
insert into Invoices (invoice_id, price, user_id)
values ('55', '500', '13');
insert into Invoices (invoice_id, price, user_id)
values ('44', '60', '6');
insert into Invoices (
        invoice_id,
        product_id,
        rest,
        paid,
        canceled,
        refunded
    )
values ('23', '0', '2', '0', '5', '0');
insert into Invoices (
        invoice_id,
        product_id,
        rest,
        paid,
        canceled,
        refunded
    )
values ('12', '0', '0', '4', '0', '3');
insert into Invoices (
        invoice_id,
        product_id,
        rest,
        paid,
        canceled,
        refunded
    )
values ('1', '1', '1', '1', '0', '1');
insert into Invoices (
        invoice_id,
        product_id,
        rest,
        paid,
        canceled,
        refunded
    )
values ('2', '1', '1', '0', '1', '1');
insert into Invoices (
        invoice_id,
        product_id,
        rest,
        paid,
        canceled,
        refunded
    )
values ('3', '1', '0', '1', '1', '1');
insert into Invoices (
        invoice_id,
        product_id,
        rest,
        paid,
        canceled,
        refunded
    )
values ('4', '1', '1', '1', '1', '0');
SELECT *
FROM Invoices;