-- Create the Customer table
CREATE TABLE Customer (
    cus_id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20)
);

-- Create the Salon table
CREATE TABLE Salon (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(20),
    description TEXT,
    open_hour TIME
);

-- Create the Service table
CREATE TABLE Service (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    duration INT,
    price DECIMAL(10,2)
);

-- Create the Employee table
CREATE TABLE Employee (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    position VARCHAR(255),
    expertise_years INT,
    salary DECIMAL(10,2)
);

-- Create the Appointment table with foreign keys
CREATE TABLE Appointment (
    id INT PRIMARY KEY,
    duration INT,
    customer_id INT,
    salon_id INT,
    service_id INT,
    employee_id INT,
    date DATE,
    time TIME,
    status TINYINT(1),
    FOREIGN KEY (customer_id) REFERENCES Customer(cus_id),
    FOREIGN KEY (salon_id) REFERENCES Salon(id),
    FOREIGN KEY (service_id) REFERENCES Service(id),
    FOREIGN KEY (employee_id) REFERENCES Employee(emp_id)
);

-- Create the Feedback table with foreign keys
CREATE TABLE Feedback (
    id INT PRIMARY KEY,
    appointment_id INT,
    employee_id INT,
    rating INT,
    comment TEXT,
    dateOfFeedback DATE,
    FOREIGN KEY (appointment_id) REFERENCES Appointment(id),
    FOREIGN KEY (employee_id) REFERENCES Employee(emp_id)
);

-- Insert sample data into Customer
INSERT INTO Customer (cus_id, first_name, last_name, email, phone) VALUES
(1, 'John', 'Doe', 'john.doe@email.com', '123-456-7890'),
(2, 'Jane', 'Smith', 'jane.smith@email.com', '234-567-8901'),
(3, 'Alice', 'Johnson', 'alice.j@email.com', '345-678-9012');

-- Insert sample data into Salon
INSERT INTO Salon (id, name, email, address, phone, description, open_hour) VALUES
(1, 'Glamour Salon', 'glamour@salon.com', '123 Beauty St, City', '555-123-4567', 'A premium salon experience', '09:00:00'),
(2, 'Style Haven', 'stylehaven@salon.com', '456 Chic Ave, Town', '555-234-5678', 'Affordable styling for all', '10:00:00');

-- Insert sample data into Service
INSERT INTO Service (id, name, description, duration, price) VALUES
(1, 'Haircut', 'Basic trim and style', 30, 25.00),
(2, 'Manicure', 'Nail care and polish', 45, 20.00),
(3, 'Hair Coloring', 'Full hair dye treatment', 90, 60.00);

-- Insert sample data into Employee
INSERT INTO Employee (emp_id, first_name, last_name, email, phone, position, expertise_years, salary) VALUES
(1, 'Emma', 'Brown', 'emma.b@salon.com', '555-345-6789', 'Stylist', 5, 45000.00),
(2, 'Michael', 'Lee', 'michael.l@salon.com', '555-456-7890', 'Nail Technician', 3, 35000.00),
(3, 'Sarah', 'Davis', 'sarah.d@salon.com', '555-567-8901', 'Colorist', 7, 50000.00);

-- Insert sample data into Appointment
INSERT INTO Appointment (id, duration, customer_id, salon_id, service_id, employee_id, date, time, status) VALUES
(1, 30, 1, 1, 1, 1, '2025-04-10', '10:00:00', 1),
(2, 45, 2, 2, 2, 2, '2025-04-11', '14:00:00', 1),
(3, 90, 3, 1, 3, 3, '2025-04-12', '15:00:00', 0);

-- Insert sample data into Feedback
INSERT INTO Feedback (id, appointment_id, employee_id, rating, comment, dateOfFeedback) VALUES
(1, 1, 1, 5, 'Great haircut, very professional!', '2025-04-10'),
(2, 2, 2, 4, 'Nice manicure, but took a bit long.', '2025-04-11');