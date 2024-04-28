SHOW DATABSES;
// To show all the databases available on your system

USE <database name>;
// To select a particular database to run queries on

SHOW TABLES;
// To list down all the tables of a particular selected database

CREATE DATABASE <Name>;
// To create a new database

CREATE TABLE <Name> {
<column name 1> [datatype] <Keyword>,
<column name 2> [datatype] <Keyword>,
// Keyword can be NOT NULL, DEFAULT
<column name 3> [datatype],
<column name 4> [datatype],
<column name 5> [datatype],
.
.
};
// To create a new table in the database

DESC <TABLE NAME>;
// Show structure and description of a table

INSERT INTO <TABLE NAME> (COL1, COL2, COL3.......) VALUES(<VALUE 1>,<VALUE 2>,...);
// to insert values into a table

SELECT <COLUMN NAME> FROM <TABLE NAME>;
to get a specific column data from a table

<!-- Use '*' in place of column name to get all the columns -->

<!-- SELECT * FROM <Table Name> WHERE {Conditions...} -->

conditions -> comparison of column data with your values

DELETE FROM <TABLE NAME> WHERE {Comparison... ORDER BY.. LIMIT..};
// Delete entries from a table

UPDATE <TABLE NAME> SET <COLUMN 1> = VALUE 1 WHERE {CONDITIONS};
// Update entries in a table

ALTER TABLE <TABLE NAME> CHANGE <OLD COLUMN NAME> <NEW COLUMN NAME>
[NEW CONSTRAINT(datatype or constraint)]
// Alter is used to update the structure or schema of the table
