// File: src/main/java/org/example/UserService.java
package com.example;

public class UserService {
    public boolean isValidUsername(String username) {
        return username != null && username.length() >= 5 && username.matches("[a-zA-Z0-9_]+");
    }

    public void disconnect() {
        System.out.println("Disconnected from UserService.");
    }
}
