import java.util.Arrays;
import java.util.Comparator;

public class SearchAlgorithms {
    // Linear search by product name
    public static int linearSearch(Product[] products, String targetName) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].getProductName().equalsIgnoreCase(targetName)) {
                return i; // Found at index i
            }
        }
        return -1; // Not found
    }

    // Binary search by product name (array must be sorted by productName)
    public static int binarySearch(Product[] products, String targetName) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = products[mid].getProductName().compareToIgnoreCase(targetName);
            if (cmp == 0)
                return mid;
            else if (cmp < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return -1; // Not found
    }

    public static void main(String[] args) {
        Product[] products = {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Phone", "Electronics"),
                new Product(3, "Shoes", "Apparel"),
                new Product(4, "Book", "Education")
        };

        String searchName = "Phone";
        int linearResult = linearSearch(products, searchName);
        System.out.println("Linear Search: '" + searchName + "' found at index: " + linearResult);

        // Sort products by productName for binary search
        Arrays.sort(products, Comparator.comparing(Product::getProductName, String.CASE_INSENSITIVE_ORDER));
        int binaryResult = binarySearch(products, searchName);
        System.out.println("Binary Search: '" + searchName + "' found at index: " + binaryResult);
    }
}