import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

public class MyServiceTest {
    
    public void testVerifyInteraction() {
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);
        service.fetchData();
        verify(mockApi).getData();
    }
}
