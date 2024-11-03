const ProductDetail = async ({ params }) => {
  const { productid } = await params;
  console.log("🚀 ~ ProductDetail ~ productid:", productid);

  return <div>ProductDetail</div>;
};

export default ProductDetail;
