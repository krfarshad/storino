import React from "react";
import Link from "next/link";
import CardTitle from "./cardTitle/CardTitle";
import CardCategory from "./cardCategory/CardCategory";
import CardAuthor from "./cardAuthor/CardAuthor";
import CardPrice from "./cardPrice/cardPrice";
const CardProduct = ({ product }) => {
  const { category, createdBy, price, slug, title, id } = product;
  return (
    <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-full px-1 py-2">
      <div className="card-product shadow-lg p-2 shadow-slate-200 hover:shadow-state-600 hover:shadow-2xl transition-all hover:transition-all">
        <Link href={`/product/${slug}`}>
          {/* title */}
          <CardTitle title={title} />
          {/* category */}
          <CardCategory />
          {/* author */}
          <CardAuthor createdBy={createdBy} />
          {/* price */}
          <CardPrice price={price} />
        </Link>
      </div>
    </div>
  );
};

export default CardProduct;
