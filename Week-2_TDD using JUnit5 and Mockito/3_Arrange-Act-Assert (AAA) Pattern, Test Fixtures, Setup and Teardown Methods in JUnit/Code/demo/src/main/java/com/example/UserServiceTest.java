package com.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class UserServiceTest {

    private UserService userService;

    @BeforeEach
    public void setUp() {
        // Arrange - initialize resources
        userService = new UserService();
        System.out.println("Setup completed.");
    }

    @Test
    public void testValidUsername() {
        // Arrange
        String username = "Sujay_123";

        // Act
        boolean result = userService.isValidUsername(username);

        // Assert
        assertTrue(result);
    }

    @Test
    public void testInvalidUsername() {
        // Arrange
        String username = "no!";

        // Act
        boolean result = userService.isValidUsername(username);

        // Assert
        assertFalse(result);
    }

    @AfterEach
    public void tearDown() {
        // Cleanup - release resources
        userService.disconnect();
        System.out.println("Teardown completed.");
    }
}
