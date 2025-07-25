-- First, create and select a database
CREATE DATABASE IF NOT EXISTS bank_system;
USE bank_system;

-- Schema to be Created (MySQL Version)

CREATE TABLE CUSTOMERS (
    CUSTOMERID   INT AUTO_INCREMENT PRIMARY KEY,
    NAME         VARCHAR(100),
    DOB          DATE,
    BALANCE      DECIMAL(15,2),
    LASTMODIFIED DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE ACCOUNTS (
    ACCOUNTID    INT AUTO_INCREMENT PRIMARY KEY,
    CUSTOMERID   INT,
    ACCOUNTTYPE  VARCHAR(20),
    BALANCE      DECIMAL(15,2),
    LASTMODIFIED DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (CUSTOMERID) REFERENCES CUSTOMERS(CUSTOMERID)
);

CREATE TABLE TRANSACTIONS (
    TRANSACTIONID   INT AUTO_INCREMENT PRIMARY KEY,
    ACCOUNTID       INT,
    TRANSACTIONDATE DATETIME DEFAULT CURRENT_TIMESTAMP,
    AMOUNT          DECIMAL(15,2),
    TRANSACTIONTYPE VARCHAR(10),
    FOREIGN KEY (ACCOUNTID) REFERENCES ACCOUNTS(ACCOUNTID)
);

CREATE TABLE LOANS (
    LOANID       INT AUTO_INCREMENT PRIMARY KEY,
    CUSTOMERID   INT,
    LOANAMOUNT   DECIMAL(15,2),
    INTERESTRATE DECIMAL(5,2),
    STARTDATE    DATE,
    ENDDATE      DATE,
    FOREIGN KEY (CUSTOMERID) REFERENCES CUSTOMERS(CUSTOMERID)
);

CREATE TABLE EMPLOYEES (
    EMPLOYEEID INT AUTO_INCREMENT PRIMARY KEY,
    NAME       VARCHAR(100),
    POSITION   VARCHAR(50),
    SALARY     DECIMAL(15,2),
    DEPARTMENT VARCHAR(50),
    HIREDATE   DATE
);

-- Example Scripts for Sample Data Insertion (MySQL Version)

-- INSERT INTO CUSTOMERS
INSERT INTO CUSTOMERS (CUSTOMERID, NAME, DOB, BALANCE, LASTMODIFIED)
VALUES (1, 'John Doe', '1985-05-15', 1000, NOW());
INSERT INTO CUSTOMERS (CUSTOMERID, NAME, DOB, BALANCE, LASTMODIFIED)
VALUES (2, 'Jane Smith', '1990-07-20', 1500, NOW());

-- INSERT INTO ACCOUNTS
INSERT INTO ACCOUNTS (ACCOUNTID, CUSTOMERID, ACCOUNTTYPE, BALANCE, LASTMODIFIED)
VALUES (1, 1, 'Savings', 1000, NOW());
INSERT INTO ACCOUNTS (ACCOUNTID, CUSTOMERID, ACCOUNTTYPE, BALANCE, LASTMODIFIED)
VALUES (2, 2, 'Checking', 1500, NOW());

-- INSERT INTO TRANSACTIONS
INSERT INTO TRANSACTIONS (TRANSACTIONID, ACCOUNTID, TRANSACTIONDATE, AMOUNT, TRANSACTIONTYPE)
VALUES (1, 1, NOW(), 200, 'Deposit');
INSERT INTO TRANSACTIONS (TRANSACTIONID, ACCOUNTID, TRANSACTIONDATE, AMOUNT, TRANSACTIONTYPE)
VALUES (2, 2, NOW(), 300, 'Withdrawal');

-- INSERT INTO LOANS
INSERT INTO LOANS (LOANID, CUSTOMERID, LOANAMOUNT, INTERESTRATE, STARTDATE, ENDDATE)
VALUES (1, 1, 5000, 5, NOW(), DATE_ADD(NOW(), INTERVAL 60 MONTH));

-- INSERT INTO EMPLOYEES
INSERT INTO EMPLOYEES (EMPLOYEEID, NAME, POSITION, SALARY, DEPARTMENT, HIREDATE)
VALUES (1, 'Alice Johnson', 'Manager', 70000, 'HR', '2015-06-15');
INSERT INTO EMPLOYEES (EMPLOYEEID, NAME, POSITION, SALARY, DEPARTMENT, HIREDATE)
VALUES (2, 'Bob Brown', 'Developer', 60000, 'IT', '2017-03-20');

-- =====================================================
-- STORED PROCEDURES (MySQL equivalent of PL/SQL blocks)
-- =====================================================

-- SCENARIO 1: Apply discount to loan interest rates for customers above 60 years old

DELIMITER //

CREATE PROCEDURE UpdateLoanInterest()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE var_customer_id INT;
    DECLARE var_age INT;

    DECLARE cur CURSOR FOR
        SELECT CUSTOMERID, YEAR(CURDATE()) - YEAR(DOB) AS AGE
        FROM CUSTOMERS;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cur;
    read_loop: LOOP
        FETCH cur INTO var_customer_id, var_age;
        IF done THEN
            LEAVE read_loop;
        END IF;

        IF var_age > 60 THEN
            UPDATE LOANS
            SET INTERESTRATE = INTERESTRATE - 1
            WHERE CUSTOMERID = var_customer_id;
        ELSE
            SELECT CONCAT('CUSTOMER WITH CUSTOMER ID : ', var_customer_id, ' IS OF AGE : ', var_age) AS MESSAGE;
            SELECT 'NO CHANGE IN LOAN' AS MESSAGE;
        END IF;
    END LOOP;
    CLOSE cur;
END //

DELIMITER ;

CALL UpdateLoanInterest();

-- SCENARIO 2: Set VIP status for customers with balance over $10,000

ALTER TABLE CUSTOMERS ADD COLUMN ISVIP ENUM('TRUE','FALSE');

DELIMITER //

CREATE PROCEDURE UpdateVIPStatus()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE var_customer_id INT;
    DECLARE var_balance DECIMAL(15,2);

    DECLARE cur CURSOR FOR
        SELECT CUSTOMERID, BALANCE FROM CUSTOMERS;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cur;
    read_loop: LOOP
        FETCH cur INTO var_customer_id, var_balance;
        IF done THEN
            LEAVE read_loop;
        END IF;

        IF var_balance > 10000 THEN
            SELECT CONCAT('CUSTOMER ID : ', var_customer_id, ' HAS BALANCE GREATER THAN 10000') AS MESSAGE;
            UPDATE CUSTOMERS SET ISVIP = 'TRUE' WHERE CUSTOMERID = var_customer_id;
        ELSE
            SELECT CONCAT('CUSTOMER ID : ', var_customer_id, ' HAS BALANCE LESSER THAN 10000') AS MESSAGE;
            UPDATE CUSTOMERS SET ISVIP = 'FALSE' WHERE CUSTOMERID = var_customer_id;
        END IF;
    END LOOP;
    CLOSE cur;
END //

DELIMITER ;

CALL UpdateVIPStatus();

-- SCENARIO 3: Send reminders for loans due within next 30 days

DELIMITER //

CREATE PROCEDURE LoanReminder()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE v_loan_id INT;
    DECLARE v_customer_id INT;
    DECLARE v_customer_name VARCHAR(100);
    DECLARE v_end_date DATE;
    DECLARE v_found INT DEFAULT 0;

    DECLARE cur CURSOR FOR
        SELECT L.LOANID, L.CUSTOMERID, C.NAME, L.ENDDATE
        FROM LOANS L
        JOIN CUSTOMERS C ON L.CUSTOMERID = C.CUSTOMERID
        WHERE L.ENDDATE BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 30 DAY);

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cur;
    read_loop: LOOP
        FETCH cur INTO v_loan_id, v_customer_id, v_customer_name, v_end_date;
        IF done THEN
            LEAVE read_loop;
        END IF;

        SET v_found = 1;
        SELECT CONCAT('Reminder: Loan ', v_loan_id, ' for customer ', v_customer_name, ' (ID: ', v_customer_id, ') is due on ', DATE_FORMAT(v_end_date, '%Y-%m-%d')) AS MESSAGE;
    END LOOP;
    CLOSE cur;

    IF v_found = 0 THEN
        SELECT 'No loans are due within the next 30 days.' AS MESSAGE;
    END IF;
END //

DELIMITER ;

CALL LoanReminder();

-- =====================================================
-- ALTERNATIVE: Simple SQL queries (without stored procedures)
-- =====================================================

-- Query to show customers over 60 and update their loan rates
SELECT 
    CUSTOMERID, 
    NAME,
    YEAR(NOW()) - YEAR(DOB) AS AGE
FROM CUSTOMERS 
WHERE YEAR(NOW()) - YEAR(DOB) > 60;

-- Update loan rates for customers over 60
UPDATE LOANS L
JOIN CUSTOMERS C ON L.CUSTOMERID = C.CUSTOMERID
SET L.INTERESTRATE = L.INTERESTRATE - 1
WHERE YEAR(NOW()) - YEAR(C.DOB) > 60;

-- Query to show customers with balance over 10000
SELECT CUSTOMERID, NAME, BALANCE,
       CASE WHEN BALANCE > 10000 THEN 'TRUE' ELSE 'FALSE' END AS SHOULD_BE_VIP
FROM CUSTOMERS;

-- Update VIP status based on balance
UPDATE CUSTOMERS 
SET ISVIP = CASE WHEN BALANCE > 10000 THEN 'TRUE' ELSE 'FALSE' END;

-- Query to show loans due within 30 days
SELECT 
    L.LOANID, 
    L.CUSTOMERID, 
    C.NAME, 
    L.ENDDATE,
    DATEDIFF(L.ENDDATE, NOW()) AS DAYS_UNTIL_DUE
FROM LOANS L
JOIN CUSTOMERS C ON L.CUSTOMERID = C.CUSTOMERID
WHERE L.ENDDATE BETWEEN NOW() AND DATE_ADD(NOW(), INTERVAL 30 DAY)
ORDER BY L.ENDDATE;