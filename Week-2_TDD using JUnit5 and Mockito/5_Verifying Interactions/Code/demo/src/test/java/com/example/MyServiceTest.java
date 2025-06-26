package com.example;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Arrange: create a mock of ExternalApi
        ExternalApi mockApi = mock(ExternalApi.class);

        // Inject the mock into MyService
        MyService service = new MyService(mockApi);

        // Act: call the method under test
        service.fetchData();

        // Assert: verify that getData() was called on the mock
        verify(mockApi).getData();
    }
}
