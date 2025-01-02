"use client";

import React from "react";
import { useState, useEffect } from "react";
import useSWR from "swr";
import Link from 'next/link'
import { Button } from "@nextui-org/react";
import ProductListItem from "@/app/_components/cardComponent/product-list-item";
import { ProdutosResposta } from "../_models/produtos";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function page() {
  const { data, error, isLoading } = useSWR<ProdutosResposta[], Error>(
    "/api/produtos/",
    fetcher
  );

  const [search, setSearch] = useState("");

  const [filteredData, setFilteredData] = useState<ProdutosResposta[]>([])

  const [cart, setCart] = useState<string[]>(() => {
    const cartItemsId = localStorage.getItem('cart');
    return cartItemsId ? JSON.parse(cartItemsId) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (item: string) => { 
    setCart(prevCart => [...prevCart, item]);
  };

  useEffect(() => {
    if (data) {
      const newFilteredData = data.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      })
      setFilteredData(newFilteredData);
    }
  }, [search, data])




  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (data === undefined) return <div>error</div>;

  return (
    <>
      <div className="flex justify-center flex-row">
        <input placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-md px-5" />


        <div className="ml-4 mr-2 flex flex-row">
          <img 
            src='mainIcons/icons8-cart-50.png'
            alt="Cart Icon" 
            width={25}
            height={25}
          />
          <Link href='/cesto'><p className="ml-2 text-green-500 underline tracking-wider">({cart.length}) in basket</p></Link>
        </div>
      </div>

      <div className="my-auto flex w-full max-w-7xl flex-col items-center gap-2 mx-auto">
        <div className="grid w-full grid-cols-1 gap-6 px-6 py-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((produto) => (
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
                color="primary"
                radius="lg"
                variant="solid"
                onPress={() => addItemToCart(produto.id)}
              >
                Add to cart
              </Button>
            </ProductListItem>
          ))}
        </div>
      </div>
    </>
  );
}
