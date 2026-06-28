/* =========================================================
   Exercise 1: Control Structures
   Cognizant Digital Nurture 5.0 - Java FSE
   ========================================================= */

/* =========================================================
   Scenario 1:
   Apply 1% Discount on Loan Interest Rate
   for Customers Above 60 Years
   ========================================================= */

BEGIN
   FOR cust IN (
      SELECT CustomerID,
             FLOOR(MONTHS_BETWEEN(SYSDATE, DOB)/12) AS Age
      FROM Customers
   )
   LOOP
      IF cust.Age > 60 THEN
         UPDATE Loans
         SET InterestRate = InterestRate - 1
         WHERE CustomerID = cust.CustomerID;
      END IF;
   END LOOP;

   COMMIT;
END;
/

-- Verify Output
SELECT * FROM Loans;


/* =========================================================
   Scenario 2:
   Mark Customers as VIP
   if Balance > 10000
   ========================================================= */

ALTER TABLE Customers
ADD IsVIP VARCHAR2(5);

BEGIN
   FOR cust IN (
      SELECT CustomerID, Balance
      FROM Customers
   )
   LOOP
      IF cust.Balance > 10000 THEN
         UPDATE Customers
         SET IsVIP = 'TRUE'
         WHERE CustomerID = cust.CustomerID;
      END IF;
   END LOOP;

   COMMIT;
END;
/

-- Verify Output
SELECT CustomerID,
       Name,
       Balance,
       IsVIP
FROM Customers;


/* =========================================================
   Scenario 3:
   Display Loans Due Within Next 30 Days
   ========================================================= */

BEGIN
   FOR loan_rec IN (
      SELECT LoanID,
             CustomerID,
             EndDate
      FROM Loans
      WHERE EndDate BETWEEN SYSDATE AND SYSDATE + 30
   )
   LOOP
      DBMS_OUTPUT.PUT_LINE(
         'Reminder: Loan ID ' || loan_rec.LoanID ||
         ' for Customer ID ' || loan_rec.CustomerID ||
         ' is due on ' || TO_CHAR(loan_rec.EndDate,'DD-MON-YYYY')
      );
   END LOOP;
END;
/

-- Verify Output
SELECT LoanID,
       CustomerID,
       EndDate
FROM Loans
WHERE EndDate BETWEEN SYSDATE AND SYSDATE + 30;