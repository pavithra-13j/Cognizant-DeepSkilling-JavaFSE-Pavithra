/* =========================================================
   Exercise 3: Stored Procedures
   Cognizant Digital Nurture 5.0 - Java FSE
   ========================================================= */

/* =========================================================
   Scenario 1:
   Process Monthly Interest for Savings Accounts
   ========================================================= */

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;
END;
/

-- Execute Procedure
BEGIN
    ProcessMonthlyInterest;
END;
/

-- Verify Output
SELECT * FROM Accounts;


/* =========================================================
   Scenario 2:
   Update Employee Bonus
   ========================================================= */

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
)
AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus_percent / 100)
    WHERE Department = p_department;

    COMMIT;
END;
/

-- Execute Procedure
BEGIN
    UpdateEmployeeBonus('HR', 10);
END;
/

-- Verify Output
SELECT * FROM Employees;


/* =========================================================
   Scenario 3:
   Transfer Funds Between Accounts
   ========================================================= */

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
)
AS
    v_balance NUMBER;
BEGIN
    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_from_account;

    IF v_balance >= p_amount THEN

        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_from_account;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_to_account;

        COMMIT;

    ELSE
        ROLLBACK;
    END IF;
END;
/

-- Execute Procedure
BEGIN
    TransferFunds(1, 2, 500);
END;
/

-- Verify Output
SELECT * FROM Accounts;