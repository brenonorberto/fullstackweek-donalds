"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductsPage = () => {
  return (
    <div className="flex flex-col gap-4 p-5">
      <h1 className="text-red-500">Products Page</h1>
      <Button>Button</Button>
      <Input />
    </div>
  );
};

export default ProductsPage;
