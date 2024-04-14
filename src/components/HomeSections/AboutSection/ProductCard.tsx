import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
}
const ProductCard = ({ description, title }: ProductCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-[24px]">
        <div className="flex items-center">
          <img className="w-6 h-6" src={"/homepage/Vector.png"} alt="Icon" />
        </div>

        <div className="flex flex-col flex-1 gap-3">
          <div className="font-raleway text-xl font-semibold text-text">
            {title}
          </div>
          <div className="font-raleway text-base font-medium text-subText">
            {description}
          </div>
        </div>
      </div>

      <hr className="w-full" />
    </div>
  );
};

export default ProductCard;
