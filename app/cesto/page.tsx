"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { Button } from "@nextui-org/react";
import ProductListItem from "@/app/_components/cardComponent/product-list-item";
import { ProdutosResposta } from "../_models/produtos";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data, error, isLoading } = useSWR<ProdutosResposta[], Error>(
    "/api/produtos/",
    fetcher
  );
  
  const [cart, setCart] = useState<string[]>(() => {
    const cartItemsId = localStorage.getItem("cart");
    return cartItemsId ? JSON.parse(cartItemsId) : [];
  });
  
  const [buyDetails, setBuyDetails] = useState<{
    totalCost?: string;
    reference?: string;
    example?: string;
    error?: string;
  } | null>(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeItemFromCart = (item: string) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((cartItem) => cartItem === item); // Encontra a primeira ocorrência
      if (index !== -1) {
        const updatedCart = [...prevCart];
        updatedCart.splice(index, 1); // Remove apenas essa ocorrência
        return updatedCart;
      }
      return prevCart; // Caso o item não esteja no array, retorna o array original
    });
  };

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (data === undefined) return <div>Error</div>;
  
  const getCartProducts = () => {
    return cart.map((num) => {
      return data.find((produto) => produto.id === num);
    }).filter((produto) => produto !== undefined);
  };
  
  const cartProducts = getCartProducts();

  const buy = () => {
    fetch("/api/buy", {
      method: "POST",
      body: JSON.stringify({
        products: cart,
        name: "",
        student: false,
        coupon: ""
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then((response) => {
      setCart([]);
      setBuyDetails(response);
    }).catch(() => {
      setBuyDetails({ error: "Erro ao comprar. Tente novamente." });
    })
  };

  return (
    <>
      <div className="my-auto flex w-full max-w-7xl flex-col items-center gap-2 mx-auto">
        <h2 className="text-center text-2xl font-bold">
          Your Cart: ({cart.length}) ${cartProducts.reduce((total, produto) => total + parseFloat(produto.price), 0).toFixed(2)}
        </h2>
        {cartProducts.length === 0 && (
          <p className="mt-4 text-gray-500">Cart is empty</p>
        )}

        <div className="grid w-full grid-cols-1 gap-6 px-6 py-5 sm:grid-cols-2 lg:grid-cols-3">
          {cartProducts.map((produto) => (
            <ProductListItem
              key={produto.id}
              id={produto.id}
              title={produto.title}
              price={produto.price}
              image={produto.image}
              category={produto.category}
            >

              <Button
                fullWidth
                className="font-medium"
                radius="lg"
                variant="solid"
                onPress={() => removeItemFromCart(produto.id)}
              >
                Remove from cart
              </Button>
            </ProductListItem>
          ))}
        </div>
      </div>

      <div className="w-30 flex items-center justify-center">
        {!buyDetails ? (
          <Button
            fullWidth
            className="font-medium w-40 mx-60 mb-10"
            color="primary"
            radius="lg"
            variant="solid"
            onPress={buy}
          >
            Buy
          </Button>
        ) : (
          <div className="text-center">
            {buyDetails.error ? (
              <p className="m-5 text-large font-sans tracking-wider">{buyDetails.error}</p>
            ) : (
              <div className="m-5 text-large font-sans tracking-wider">
                <p>Total Cost: {buyDetails.totalCost}</p>
                <p>Reference: {buyDetails.reference}</p>
                <p>{buyDetails.example}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
