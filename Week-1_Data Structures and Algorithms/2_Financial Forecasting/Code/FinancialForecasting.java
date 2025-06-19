public class FinancialForecasting {

    public static double futureValueRecursive(double initialValue, double growthRate, int periods) {
        if (periods == 0) {
            return initialValue;
        }
        return futureValueRecursive(initialValue, growthRate, periods - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double initialValue = 1000.0;
        double growthRate = 0.05;
        int periods = 10;
        double result = futureValueRecursive(initialValue, growthRate, periods);
        System.out.printf("Future value after %d periods: %.2f\n", periods, result);
    }
}