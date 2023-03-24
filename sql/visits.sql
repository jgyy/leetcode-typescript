USE mysql;
DROP TABLE IF EXISTS Visits;
Create table If Not Exists Visits (
    user_id int,
    visit_date date,
    visit_id int,
    customer_id int,
    member_id int
);
Truncate table Visits;
insert into Visits (user_id, visit_date)
values ('1', '2020-01-01');
insert into Visits (user_id, visit_date)
values ('2', '2020-01-02');
insert into Visits (user_id, visit_date)
values ('12', '2020-01-01');
insert into Visits (user_id, visit_date)
values ('19', '2020-01-03');
insert into Visits (user_id, visit_date)
values ('1', '2020-01-02');
insert into Visits (user_id, visit_date)
values ('2', '2020-01-03');
insert into Visits (user_id, visit_date)
values ('1', '2020-01-04');
insert into Visits (user_id, visit_date)
values ('7', '2020-01-11');
insert into Visits (user_id, visit_date)
values ('9', '2020-01-25');
insert into Visits (user_id, visit_date)
values ('8', '2020-01-28');
insert into Visits (visit_id, customer_id)
values ('1', '23');
insert into Visits (visit_id, customer_id)
values ('2', '9');
insert into Visits (visit_id, customer_id)
values ('4', '30');
insert into Visits (visit_id, customer_id)
values ('5', '54');
insert into Visits (visit_id, customer_id)
values ('6', '96');
insert into Visits (visit_id, customer_id)
values ('7', '54');
insert into Visits (visit_id, customer_id)
values ('8', '54');
insert into Visits (visit_id, member_id, visit_date)
values ('22', '11', '2021-10-28');
insert into Visits (visit_id, member_id, visit_date)
values ('16', '11', '2021-01-12');
insert into Visits (visit_id, member_id, visit_date)
values ('18', '9', '2021-12-10');
insert into Visits (visit_id, member_id, visit_date)
values ('19', '3', '2021-10-19');
insert into Visits (visit_id, member_id, visit_date)
values ('12', '11', '2021-03-01');
insert into Visits (visit_id, member_id, visit_date)
values ('17', '8', '2021-05-07');
insert into Visits (visit_id, member_id, visit_date)
values ('21', '9', '2021-05-12');
SELECT *
FROM Visits;