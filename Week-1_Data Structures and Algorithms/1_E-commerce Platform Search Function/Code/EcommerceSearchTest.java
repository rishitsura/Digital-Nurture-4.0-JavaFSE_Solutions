import java.util.Arrays;
import java.util.Comparator;

public class EcommerceSearchTest {
    public static void main(String[] args) {
        Product[] products = {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Shirt", "Clothing"),
                new Product(3, "Book", "Books"),
                new Product(4, "Phone", "Electronics"),
                new Product(5, "Shoes", "Footwear")
        };

        String target = "Phone";
        // Linear Search
        int linearIndex = SearchAlgorithms.linearSearch(products, target);
        System.out.println("Linear Search: '" + target + "' found at index: " + linearIndex);

        // Sort products by productName for binary search
        Arrays.sort(products, Comparator.comparing(Product::getProductName, String.CASE_INSENSITIVE_ORDER));
        int binaryIndex = SearchAlgorithms.binarySearch(products, target);
        System.out.println("Binary Search: '" + target + "' found at index: " + binaryIndex);

        // Print sorted product names for reference
        System.out.println("Sorted Products by Name:");
        for (Product p : products) {
            System.out.println(p.getProductName());
        }
    }
}