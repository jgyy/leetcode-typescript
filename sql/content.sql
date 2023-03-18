USE mysql;
DROP TABLE IF EXISTS Content;
Create table If Not Exists Content (
    content_id varchar(30),
    title varchar(30),
    Kids_content ENUM('Y', 'N'),
    content_type varchar(30)
);
Truncate table Content;
insert into Content (content_id, title, Kids_content, content_type)
values ('1', 'Leetcode Movie', 'N', 'Movies');
insert into Content (content_id, title, Kids_content, content_type)
values ('2', 'Alg. for Kids', 'Y', 'Series');
insert into Content (content_id, title, Kids_content, content_type)
values ('3', 'Database Sols', 'N', 'Series');
insert into Content (content_id, title, Kids_content, content_type)
values ('4', 'Aladdin', 'Y', 'Movies');
insert into Content (content_id, title, Kids_content, content_type)
values ('5', 'Cinderella', 'Y', 'Movies');
SELECT *
FROM Content;