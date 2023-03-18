USE mysql;
DROP Table If Exists Expressions;
Create Table If Not Exists Expressions (
    left_operand varchar(3),
    operator ENUM('>', '<', '='),
    right_operand varchar(3)
);
Truncate table Expressions;
insert into Expressions (left_operand, operator, right_operand)
values ('x', '>', 'y');
insert into Expressions (left_operand, operator, right_operand)
values ('x', '<', 'y');
insert into Expressions (left_operand, operator, right_operand)
values ('x', '=', 'y');
insert into Expressions (left_operand, operator, right_operand)
values ('y', '>', 'x');
insert into Expressions (left_operand, operator, right_operand)
values ('y', '<', 'x');
insert into Expressions (left_operand, operator, right_operand)
values ('x', '=', 'x');
SELECT *
FROM Expressions;