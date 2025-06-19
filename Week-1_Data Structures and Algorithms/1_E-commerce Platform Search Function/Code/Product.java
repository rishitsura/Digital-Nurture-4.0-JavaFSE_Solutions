public class Product {
    private int productId;
    private String productName;
    private String category;

    // Constructor to initialize Product fields
    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    // Getter for productName
    public String getProductName() {
        return productName;
    }

    public static void main(String[] args) {
        Product product = new Product(1, "Laptop", "Electronics");
        System.out.println(product.productId);
        System.out.println(product.productName);
        System.out.println(product.category);
    }
}