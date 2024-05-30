import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProductBreadcrumb = () => {
  return (
    <div className="mt-12">
      <Button asChild className="w-[768px] m-auto text-center text-xl p-8 bg-[#222]">
        <Link href="/">My Products</Link>
      </Button>
    </div>
  );
};

export default ProductBreadcrumb;
