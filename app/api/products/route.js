import { connectDB } from "@/lib/dbConnect";
import Product from "@/models/Product";

// GET Request: Fetch all products
export async function GET(req) {
  await connectDB();
  try {
    const products = await Product.find({});
    console.log("🚀 ~ Products fetched successfully:", products);
    return Response.json(products, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    return Response.json(
      { message: "Error fetching products", error },
      { status: 500 }
    );
  }
}

// POST Request: Create a new product
export async function POST(req) {
  await connectDB();
  try {
    const { name, price, description } = await req.json();
    const newProduct = new Product({ name, price, description });
    await newProduct.save();
    return Response.json(
      { message: "Product created successfully", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error creating product:", error);
    return Response.json(
      { message: "Error creating product", error },
      { status: 500 }
    );
  }
}

// update resource
export async function PUT(req) {
  await connectDB();
  try {
    const { id, name, price, description } = await req.json();
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description },
      { new: true }
    );
    if (!updatedProduct)
      return Response.json({ message: "Product not found" }, { status: 404 });
    return Response.json(
      { message: "Product updated successfully", product: updatedProduct },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Error updating product", error },
      { status: 500 }
    );
  }
}

// Delete Resource
export async function DELETE(req) {
  await connectDB();
  try {
    const { id } = await req.json();
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct)
      return Response.json({ message: "Product not found" }, { status: 404 });
    return Response.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Error deleting product", error },
      { status: 500 }
    );
  }
}
