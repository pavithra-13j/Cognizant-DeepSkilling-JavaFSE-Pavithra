# Mandatory Hands-on 4 - Difference between JPA, Hibernate and Spring Data JPA

## Objective
Understand the differences between JPA, Hibernate, and Spring Data JPA.

## Comparison

| Feature | JPA | Hibernate | Spring Data JPA |
|---------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Abstraction over JPA |
| Implementation | No | Yes | No |
| Boilerplate Code | More | More | Less |
| Transaction Management | No | Manual | Automatic using @Transactional |
| Database Operations | Through implementation | Session API | JpaRepository methods |

## JPA
- Java Persistence API (JSR 338)
- Specification for object-relational mapping.
- Does not provide an implementation.

## Hibernate
- ORM framework.
- Implements JPA.
- Uses Session and Transaction APIs.

## Spring Data JPA
- Built on top of JPA.
- Reduces boilerplate code.
- Provides JpaRepository.
- Simplifies CRUD operations.
- Supports automatic transaction management using @Transactional.

## Advantages of Spring Data JPA
- Less code
- Easy CRUD operations
- Better integration with Spring Boot
- Improved maintainability

## References
1. https://dzone.com/articles/what-is-the-difference-between-hibernate-and-sprin-1
2. https://www.javaworld.com/article/3379043/what-is-jpa-introduction-to-the-java-persistence-api.html