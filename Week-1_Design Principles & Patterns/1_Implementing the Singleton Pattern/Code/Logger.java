public class Logger {
    private static Logger instance;

    // Private constructor to prevent instantiation
    private Logger() {
        // Optionally, initialize resources here
    }

    // Public method to provide access to the instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Example logging method
    public void log(String message) {
        System.out.println("[LOG]: " + message);
    }

    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("This is the first log message from Logger main.");
        logger2.log("This is the second log message from Logger main.");

        if (logger1 == logger2) {
            System.out.println(
                    "Both logger1 and logger2 refer to the same instance. Singleton works! (from Logger main)");
        } else {
            System.out.println("Different instances exist. Singleton failed. (from Logger main)");
        }
    }
}