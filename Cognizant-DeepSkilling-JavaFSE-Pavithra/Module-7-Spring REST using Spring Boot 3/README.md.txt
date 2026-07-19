# Module 7 – REST, JWT & Spring Security

## Objectives

This module demonstrates the implementation of RESTful Web Services using Spring Boot and Spring Security.

## Hands-ons Completed

### 1. Create a Spring Web Project using Maven
- Created Spring Boot Maven Project
- Configured Maven dependencies
- Project built successfully

### 2. Spring Core – Load Country from Spring Configuration XML
- Created `country.xml`
- Loaded Spring Bean from XML
- Displayed Country details successfully

### 3. REST – Get Country
Implemented REST APIs:
- GET /country
- GET /countries/{code}

Example Output

GET /country

```json
{
  "code": "IN",
  "name": "India"
}
```

GET /countries/US

```json
{
  "code": "US",
  "name": "United States"
}
```

---

### 4. Spring Security
Implemented:

- HTTP Basic Authentication
- In-Memory Users
- Role Based Authentication
- BCrypt Password Encoding

Users

| Username | Password | Role |
|----------|----------|------|
| admin | pwd | ADMIN |
| user | pwd | USER |

---

### 5. JWT Authentication

Implemented Authentication Service

```
GET /authenticate
```

Sample Response

```json
{
  "token":"<JWT_TOKEN>"
}
```

Generated JWT Token successfully using JJWT library.

---

## Technologies Used

- Java 21
- Spring Boot
- Spring MVC
- Spring Security
- JWT (JJWT)
- Maven
- XML Bean Configuration
- REST API

---

## Project Structure

```
src
 +-- main
 ¦    +-- java
 ¦    +-- resources
 +-- test

pom.xml
```

---

## Outputs

- Spring Boot started successfully
- Country loaded from XML
- REST APIs working
- Authentication popup working
- JWT Token generated successfully

---

## Status

? Spring Web Project Created

? Country Loaded from XML

? REST APIs Implemented

? Spring Security Configured

? JWT Authentication Implemented
