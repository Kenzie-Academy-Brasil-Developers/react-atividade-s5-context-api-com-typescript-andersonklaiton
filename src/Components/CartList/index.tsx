import { useCart } from "../../Providers/Cart";
import { ContainerImage } from "../ProductsList/styles";
import { Container, ContainerProduct } from "./styles";

interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Cart = () => {
  const { cart, deleteProduct } = useCart();

  const handleDeleteFormCart = (product: CartProps) => {
    deleteProduct(product);
  };

  return (
    <>
      <h3>Carrinho</h3>
      <Container>
        {cart && cart.map((productCart) => (
          <ContainerProduct key={productCart.id}>
            <ContainerImage>
              <img alt={productCart.title} src={productCart.image} />
            </ContainerImage>
            <div>
              <p>{productCart.title}</p>
              <p>{productCart.price}</p>
            </div>
            <button onClick={() => handleDeleteFormCart(productCart)}>
              Remove
            </button>
          </ContainerProduct>
        ))}
      </Container>
    </>
  );
};
export default Cart;
