// ✅ Get All Products
export async function getProducts() {
  try {
    const res = await fetch("/api/products");

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    console.log("Products fetched successfully:", data);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

// ✅ Add New Product
export async function addProduct() {
  try {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Laptop",
        price: 1200,
        description: "A powerful laptop",
      }),
    });

    if (!res.ok) throw new Error("Failed to add product");
    const data = await res.json();
    console.log("Product added successfully:", data);
    return data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
}

// ✅ Update Product
export async function updateProduct(id, updatedData) {
  try {
    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    if (!res.ok) {
      throw new Error("Failed to update product");
    }

    const data = await res.json();
    console.log("Product updated successfully:", data);
    return data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}

// ✅ Delete Product
export async function deleteProduct(id) {
  try {
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to delete product");
    }

    const data = await res.json();
    console.log("Product deleted successfully:", data);
    return data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
}
