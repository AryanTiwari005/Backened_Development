# SQL Commands — Beginner's Guide

A simple reference for the most common SQL commands, explained with examples using a sample table called `students`.

---

## 1. Working with Databases

### Show all databases
Lists every database available on your SQL server.
```sql
SHOW DATABASES;
```

### Select (use) a database
Tells SQL which database you want to work inside. You must do this before creating or using tables.
```sql
USE school;
```

### Create a new database
```sql
CREATE DATABASE school;
```

### Show all tables in a database
Once you're inside a database (after `USE`), this lists all its tables.
```sql
SHOW TABLES;
```

---

## 2. Working with Tables

### Create a new table
You define the table name, then list each column with its data type and any rules (constraints).

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    grade VARCHAR(10)
);
```
**Explanation:**
- `id INT PRIMARY KEY` → a whole number column that uniquely identifies each row.
- `name VARCHAR(50)` → text, max 50 characters.
- `age INT` → whole number.
- `grade VARCHAR(10)` → short text.

### Describe a table
Shows the structure (columns, data types, constraints) of a table — useful to check what a table looks like.
```sql
DESCRIBE students;
```

---

## 3. Inserting Data

Add a new row (record) into a table.
```sql
INSERT INTO students (id, name, age, grade)
VALUES (1, 'Riya', 16, 'A');
```
This adds a student named Riya, age 16, with grade A.

---

## 4. Reading (Selecting) Data

### Select everything
Shows all rows and all columns.
```sql
SELECT * FROM students;
```

### Select specific columns
Only shows the columns you ask for — cleaner when you don't need everything.
```sql
SELECT name, age FROM students;
```

### Select with a condition (WHERE clause)
Filters rows so only matching records are shown.
```sql
SELECT * FROM students WHERE age = 16;
```
This shows only students who are exactly 16 years old.

### Select using a pattern (LIKE)
Used when you want to match part of a value, not an exact match. `%` is a wildcard meaning "anything."
```sql
SELECT * FROM students WHERE name LIKE 'R%';
```
This finds all students whose name starts with "R" (e.g., Riya, Rahul, Raj).

### Sorting results (ORDER BY)
Sorts your results by a column — ascending by default, or descending if you say so.
```sql
SELECT * FROM students ORDER BY age;
```
This shows all students sorted by age, smallest to largest (ascending, `ASC` — the default).

```sql
SELECT * FROM students ORDER BY age DESC;
```
This shows all students sorted by age, largest to smallest (descending).

You can also sort by multiple columns — it sorts by the first column, and uses the second column to break ties.
```sql
SELECT * FROM students ORDER BY grade ASC, age DESC;
```
This sorts students by grade (A to Z), and within the same grade, sorts by age (oldest first).

---

## 5. Updating Data

Changes existing records that match a condition.
```sql
UPDATE students
SET grade = 'A+'
WHERE id = 1;
```
This updates Riya's grade to "A+" — but **only** for the student whose `id` is 1.

> ⚠️ If you forget the `WHERE` clause, **every row** gets updated!

---

## 6. Deleting Data

Removes records that match a condition.
```sql
DELETE FROM students WHERE id = 1;
```
This deletes the student whose `id` is 1.

> ⚠️ If you forget the `WHERE` clause, **every row** gets deleted!

---

## Quick Reference Table

| Command | Purpose |
|---|---|
| `SHOW DATABASES;` | List all databases |
| `USE db_name;` | Select a database to work in |
| `SHOW TABLES;` | List all tables in the current database |
| `CREATE DATABASE db_name;` | Create a new database |
| `CREATE TABLE table_name (...);` | Create a new table |
| `DESCRIBE table_name;` | Show a table's structure |
| `INSERT INTO table_name (...) VALUES (...);` | Add a new row |
| `SELECT * FROM table_name;` | Get all data |
| `SELECT col1, col2 FROM table_name;` | Get specific columns |
| `SELECT * FROM table_name WHERE condition;` | Get filtered rows |
| `SELECT * FROM table_name WHERE col LIKE 'pattern';` | Get rows matching a pattern |
| `SELECT * FROM table_name ORDER BY col;` | Sort results (ascending by default) |
| `SELECT * FROM table_name ORDER BY col DESC;` | Sort results descending |
| `UPDATE table_name SET col = value WHERE condition;` | Update matching rows |
| `DELETE FROM table_name WHERE condition;` | Delete matching rows |
| `TRUNCATE TABLE table_name;` | Delete all rows, keep table structure |