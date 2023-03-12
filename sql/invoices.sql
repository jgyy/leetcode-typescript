USE mysql;
DROP TABLE IF EXISTS Invoices;
Create table If Not Exists Invoices (invoice_id int, price int, user_id int);
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
SELECT *
FROM Invoices;