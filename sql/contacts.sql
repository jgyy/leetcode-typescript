USE mysql;
DROP TABLE IF EXISTS Contacts;
Create table If Not Exists Contacts (
    user_id int,
    contact_name varchar(20),
    contact_email varchar(30)
);
Truncate table Contacts;
insert into Contacts (user_id, contact_name, contact_email)
values ('1', 'Bob', 'bob@leetcode.com');
insert into Contacts (user_id, contact_name, contact_email)
values ('1', 'John', 'john@leetcode.com');
insert into Contacts (user_id, contact_name, contact_email)
values ('1', 'Jal', 'jal@leetcode.com');
insert into Contacts (user_id, contact_name, contact_email)
values ('2', 'Omar', 'omar@leetcode.com');
insert into Contacts (user_id, contact_name, contact_email)
values ('2', 'Meir', 'meir@leetcode.com');
insert into Contacts (user_id, contact_name, contact_email)
values ('6', 'Alice', 'alice@leetcode.com');
SELECT *
FROM Contacts;