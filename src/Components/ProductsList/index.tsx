import products from "../../Assets/produts";
import { useCart } from "../../Providers/Cart";
import { Container, ContainerImage, ContainerProduct, Img } from "./styles";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductsList = () => {
  const { addProduct } = useCart();

  const handleAddToCart = (product: ProductProps) => {
    addProduct(product);
  };

  return (
    <>
      <h3>Produtos da Loja:</h3>
      <Container>
        {products.map((product) => (
          <ContainerProduct key={product.id}>
            <ContainerImage>
              <Img alt={product.title} src={product.image} />
            </ContainerImage>
            <div>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </ContainerProduct>
        ))}
      </Container>
    </>
  );
};
export default ProductsList;
