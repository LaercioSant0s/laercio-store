"use client";

import React from "react";
import { Button, Image } from "@nextui-org/react";
import { cn } from "@nextui-org/react";

export type ProductItem = {
  id: string;
  title: string;
  price: string;
  image: string;
  category: string;
};

export type ProductListItemProps = Omit<React.HTMLAttributes<HTMLDivElement>, "id"> & ProductItem;

const ProductListItem = React.forwardRef<HTMLDivElement, ProductListItemProps>(
  ({ title, price, image, category, ...props }, ref) => {
    return (
      <div
      >
        <div
          className={cn(
            "relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2"
          )}
        >
          <Image
            removeWrapper
            alt={title}
            className="z-0 h-full max-h-full w-full max-w-[90%] overflow-visible object-contain object-center hover:scale-110"
            src={image}
          />
        </div>
        <div className="flex flex-col gap-3 px-1 mb-20">
          <div className="flex items-center justify-between">
            <h3 className="text-medium font-medium text-default-700">{title}</h3>
            <p className="text-medium font-medium text-default-500">${price}</p>
          </div>
          <p className="text-small text-default-500">Category: {category}</p>
          <div className="flex items-center gap-2">
          </div>
          <Button
            fullWidth
            className="font-medium"
            color="primary"
            radius="lg"
            variant="solid"
          >
            Add to cart
          </Button>
        </div>
      </div>
    );
  }
);

ProductListItem.displayName = "ProductListItem";

export default ProductListItem;