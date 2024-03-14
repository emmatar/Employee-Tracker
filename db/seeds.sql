USE employee_tracker_db;

INSERT INTO departments (department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 4),
       ("Sales", 80000, 4),
       ("Lead Engineer", 150000, 1),
       ("Software Engineer", 120000, 1),
       ("Account Manager", 160000, 2),
       ("Accoutant", 125000, 2),
       ("Legal Team Lead", 250000, 3);

INSERT INTO employees (first_name, last_name)
VALUES ("Mike", "Chan"),
       ("Ashley", "Rodriguez"),
       ("Kevin", "Tupik"),
       ("Kunal", "Singh"),
       ("Malia", "Brown"),
       ("Sarah", "Lourd"),
       ("Tom", "Allen");