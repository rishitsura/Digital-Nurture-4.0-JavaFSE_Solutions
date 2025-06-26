package com.example;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        Assertions.assertEquals(5, 2 + 3);
        Assertions.assertTrue(3 < 5);
        Assertions.assertFalse(5 < 3);
        Assertions.assertNull(null);
        Assertions.assertNotNull("JUnit");
    }
}