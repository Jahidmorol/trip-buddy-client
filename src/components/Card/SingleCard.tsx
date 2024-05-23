import Image from "next/image";
import img from "/public/card.jpg";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

const SingleCard = () => {
  return (
    <div className="w-[400px] bg-white text-black">
      <Image className="" src={img} alt="image" />
      <div className="p-4">
        <div className="flex justify-between pb-4">
          <Link href="/">
            <h1 className="font-semibold text-2xl">Tokio Japan</h1>
          </Link>
          <h1 className="font-semibold text-2xl text-primaryColor">$240</h1>
        </div>
        <Link href={"/"}>
          <button
            className={`text-[#e44d36] border border-[#e44d36] hover:bg-[#e44d36] hover:text-white py-2 px-20 text-lg font-semibold transition-all duration-200 w-full flex items-center justify-center gap-2`}
          >
            Explore Now <FaArrowRightLong className="mt-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
