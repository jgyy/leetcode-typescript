USE mysql;
DROP TABLE IF EXISTS SalesPerson;
Create table If Not Exists SalesPerson (
    sales_id int,
    name varchar(255),
    salary int,
    commission_rate int,
    hire_date date
);
Truncate table SalesPerson;
insert into SalesPerson (
        sales_id,
        name,
        salary,
        commission_rate,
        hire_date
    )
values ('1', 'John', '100000', '6', '4/1/2006');
insert into SalesPerson (
        sales_id,
        name,
        salary,
        commission_rate,
        hire_date
    )
values ('2', 'Amy', '12000', '5', '5/1/2010');
insert into SalesPerson (
        sales_id,
        name,
        salary,
        commission_rate,
        hire_date
    )
values ('3', 'Mark', '65000', '12', '12/25/2008');
insert into SalesPerson (
        sales_id,
        name,
        salary,
        commission_rate,
        hire_date
    )
values ('4', 'Pam', '25000', '25', '1/1/2005');
insert into SalesPerson (
        sales_id,
        name,
        salary,
        commission_rate,
        hire_date
    )
values ('5', 'Alex', '5000', '10', '2/3/2007');
SELECT *
FROM SalesPerson;