package com.fse.testing;

import static org.junit.Assert.*;

import org.junit.Test;

public class CalculatorTest {
	@Test
    public void testAdd() {
        Calculator c = new Calculator();
        assertEquals(10, c.add(5, 5));
    }

    @Test
    public void testSubtract() {
        Calculator c = new Calculator();
        assertEquals(5, c.subtract(10, 5));
    }

}
