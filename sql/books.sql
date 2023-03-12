USE mysql;
DROP TABLE IF EXISTS Books;
Create table If Not Exists Books (
    book_id int,
    name varchar(50),
    available_from date
);
Truncate table Books;
insert into Books (book_id, name, available_from)
values ('1', 'Kalila And Demna', '2010-01-01');
insert into Books (book_id, name, available_from)
values ('2', '28 Letters', '2012-05-12');
insert into Books (book_id, name, available_from)
values ('3', 'The Hobbit', '2019-06-10');
insert into Books (book_id, name, available_from)
values ('4', '13 Reasons Why', '2019-06-01');
insert into Books (book_id, name, available_from)
values ('5', 'The Hunger Games', '2008-09-21');
SELECT *
FROM Books;