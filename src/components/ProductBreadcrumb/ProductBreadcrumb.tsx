import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProductBreadcrumb = () => {
  return (
    <div className="mt-12">
      <Button asChild className="w-full text-center text-2xl p-8">
        <Link href="/">My Products</Link>
      </Button>
    </div>
  );
};

export default ProductBreadcrumb;
