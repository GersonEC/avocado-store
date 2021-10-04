import { useRouter } from "next/dist/client/router";

export default function ProductItem() {
  const {
    query: { productId },
  } = useRouter();

  return <h1>Product: {productId}</h1>;
}
