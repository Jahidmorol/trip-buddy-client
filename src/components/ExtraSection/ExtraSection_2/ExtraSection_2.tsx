import Image from "next/image";
import map from "../../../../public/ExtraSection/es2.png";

const ExtraSection_2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center pb-24 pt-5 sm:pt-24 ">
      <div className="md:basis-[40%] lg:basis-[60%]">
        <Image
          src={map}
          alt="map"
          className="sm:-ml-16 w-96 hidden sm:block md:w-full"
        ></Image>
      </div>

      <div className="space-y-7 md:basis-[60%] lg:basis-[40%] ">
        <h2 className="text-3xl mb-10 border-b border-[#E8604C] border-dotted w-fit pb-2">
          For better experience :
        </h2>

        <div className="text-white rounded-3xl shadow-2xl p-4 px-4 sm:px-12 transition-all ease-in-out hover:text-[#E8604C] hover:shadow-[0_15px_20px_-15px_rgba(232,96,76,0.3)] duration-300">
          <div className="collapse-title text-base font-medium">
            What should I pack for my tour?
          </div>
          <div className="collapse-content text-gray-500 text-sm">
            <p>
              We recommend packing comfortable clothing, appropriate footwear, a
              hat, sunscreen, a reusable water bottle, and any personal
              medications. Depending on your destination, you may also need to
              bring warm layers or swimwear
            </p>
          </div>
        </div>

        <div className="text-white rounded-3xl shadow-2xl p-4 px-4 sm:px-12 transition-all ease-in-out hover:text-[#E8604C] hover:shadow-[0_15px_20px_-15px_rgba(232,96,76,0.3)] duration-300">
          <div className="collapse-title text-base font-medium">
            How do I cancel or reschedule my tour?
          </div>
          <div className="collapse-content text-gray-500 text-sm">
            <p>
              You can cancel or reschedule your tour by logging into your
              account on our website and navigating to the &apos;My
              Bookings&apos; section. Please note that cancellation or
              rescheduling fees may apply as per our terms and conditions.
            </p>
          </div>
        </div>

        <div className="text-white rounded-3xl shadow-2xl p-4 px-4 sm:px-12 transition-all ease-in-out hover:text-[#E8604C] hover:shadow-[0_15px_20px_-15px_rgba(232,96,76,0.3)] duration-300">
          <div className="collapse-title text-base font-medium">
            What is included in the tour package?
          </div>
          <div className="collapse-content text-gray-500 text-sm">
            <p>
              Our tour packages typically include accommodation, transportation,
              guided tours, and some meals. Please refer to the specific tour
              itinerary for detailed inclusions.
            </p>
          </div>
        </div>

        <div className="text-white rounded-3xl shadow-2xl p-4 px-4 sm:px-12 transition-all ease-in-out hover:text-[#E8604C] hover:shadow-[0_15px_20px_-15px_rgba(232,96,76,0.3)] duration-300">
          <div className="collapse-title text-base font-medium">
            Are there any safety measures in place during the tour?
          </div>
          <div className="collapse-content text-gray-500 text-sm">
            <p>
              Yes, we prioritize the health and safety of our guests. We adhere
              to all local health guidelines, provide sanitization supplies, and
              ensure our staff is trained in COVID-19 safety protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection_2;
