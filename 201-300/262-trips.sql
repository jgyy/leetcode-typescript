USE mysql;
Create table If Not Exists Trips (
    id int,
    client_id int,
    driver_id int,
    city_id int,
    status ENUM(
        'completed',
        'cancelled_by_driver',
        'cancelled_by_client'
    ),
    request_at varchar(50)
);
Create table If Not Exists Users (
    users_id int,
    banned varchar(50),
    role ENUM('client', 'driver', 'partner')
);
Truncate table Trips;
insert into Trips (
        id,
        client_id,
        driver_id,
        city_id,
        status,
        request_at
    )
values ('1', '1', '10', '1', 'completed', '2013-10-01');
insert into Trips (
        id,
        client_id,
        driver_id,
        city_id,
        status,
        request_at
    )
values (
        '2',
        '2',
        '11',
        '1',
        'cancelled_by_driver',
        '2013-10-01'
    );
insert into Trips (
        id,
        client_id,
        driver_id,
        city_id,
        status,
        request_at
    )
values ('3', '3', '12', '6', 'completed', '2013-10-01');
insert into Trips (
        id,
        client_id,
        driver_id,
        city_id,
        status,
        request_at
    )
values (
        '4',
        '4',
        '13',
        '6',
        'cancelled_by_client',
        '2013-10-01'
    );
insert into Trips (
        id,
        client_id,
        driver_id,
        city_id,
        status,
        request_at
    )
values ('5', '1', '10', '1', 'completed', '2013-10-02');
insert into Trips (
        id,
        client_id,
        driver_id,
        city_id,
        status,
        request_at
    )
values ('6', '2', '11', '6', 'completed', '2013-10-02');
insert into Trips (
        id,
        client_id,
        driver_id,
        city_id,
        status,
        request_at
    )
values ('7', '3', '12', '6', 'completed', '2013-10-02');
insert into Trips (
        id,
        client_id,
        driver_id,
        city_id,
        status,
        request_at
    )
values ('8', '2', '12', '12', 'completed', '2013-10-03');
insert into Trips (
        id,
        client_id,
        driver_id,
        city_id,
        status,
        request_at
    )
values ('9', '3', '10', '12', 'completed', '2013-10-03');
insert into Trips (
        id,
        client_id,
        driver_id,
        city_id,
        status,
        request_at
    )
values (
        '10',
        '4',
        '13',
        '12',
        'cancelled_by_driver',
        '2013-10-03'
    );
Truncate table Users;
insert into Users (users_id, banned, role)
values ('1', 'No', 'client');
insert into Users (users_id, banned, role)
values ('2', 'Yes', 'client');
insert into Users (users_id, banned, role)
values ('3', 'No', 'client');
insert into Users (users_id, banned, role)
values ('4', 'No', 'client');
insert into Users (users_id, banned, role)
values ('10', 'No', 'driver');
insert into Users (users_id, banned, role)
values ('11', 'No', 'driver');
insert into Users (users_id, banned, role)
values ('12', 'No', 'driver');
insert into Users (users_id, banned, role)
values ('13', 'No', 'driver');
-- Write a SQL query to find the cancellation rate of requests with unbanned
-- users (both client and driver must not be banned) each day between "2013-10-01"
-- and "2013-10-03". Round Cancellation Rate to two decimal points.
SELECT request_at as Day,
    ROUND(
        SUM(
            IF(
                status IN ('cancelled_by_driver', 'cancelled_by_client'),
                1,
                0
            )
        ) / COUNT(1),
        2
    ) as 'Cancellation Rate'
FROM Trips t
    JOIN Users u ON t.driver_id = u.users_id
    AND u.banned = 'No'
    AND u.role = 'driver'
    JOIN Users u2 ON t.client_id = u2.users_id
    AND u2.banned = 'No'
    AND u2.role = 'client'
WHERE request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY request_at;