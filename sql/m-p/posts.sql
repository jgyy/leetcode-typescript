USE mysql;
DROP TABLE IF EXISTS Posts;
Create table If Not Exists Posts (post_id int, content varchar(100));
Truncate table Posts;
insert into Posts (post_id, content)
values (
        '1',
        'We call it soccer They call it football hahaha'
    );
insert into Posts (post_id, content)
values (
        '2',
        'Americans prefer basketball while Europeans love handball and football'
    );
insert into Posts (post_id, content)
values ('3', 'stop the war and play handball');
insert into Posts (post_id, content)
values (
        '4',
        'warning I planted some flowers this morning and then got vaccinated'
    );
SELECT *
FROM Posts;