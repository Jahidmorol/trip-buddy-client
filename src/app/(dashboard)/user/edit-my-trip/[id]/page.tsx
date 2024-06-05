"use client";

import { getSingleTrips, updateTripDetails } from "@/services/homeDataFetching";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { tripTypes } from "../../page";
import LoadingComponent from "@/components/Loading/Loading";

const EditMyTripPage = () => {
  const { id } = useParams();
  const [singleTrip, setSingleTrip] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const defaultValues = {
    title: singleTrip?.title,
    destination: singleTrip?.destination,
    startDate: singleTrip?.startDate,
    endDate: singleTrip?.endDate,
    tripType: singleTrip?.tripType,
    budget: singleTrip?.budget,
    activities: singleTrip?.activities,
    description: singleTrip?.description,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const data = await getSingleTrips(id as string);
        setSingleTrip(data?.data);
        reset(data?.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, [id, reset]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating trip...");
    setIsLoading(true);

    const uploadData = await updateTripDetails(id as string, data);

    if (uploadData?.success) {
      toast.success("Trip Post successfully!", { id: toastId });
      setIsLoading(false);
      router.push("/user/my-all-trip");
    }
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-8">
        <h1 className="text-3xl font-semibold text-center">Edit Trip</h1>
        <Link
          className="text-primaryColor underline text-lg hover:text-blue-600 transition-all"
          href={"/"}
        >
          Back To Home
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="title" className="">
              Trip Title
            </label>
            <input
              className={`${
                errors?.title ? "placeholder:text-primaryColor" : ""
              } block w-full rounded-xl text-black font-semibold border-2 border-gray-400 p-3 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm focus:placeholder:text-primaryColor`}
              type="text"
              {...register("title")}
              placeholder={
                errors?.title
                  ? (errors.title.message as string)
                  : "Enter Your Trip Title..."
              }
              id="title"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="destination">Trip Destination</label>
            <input
              className={`${
                errors?.destination ? "placeholder:text-primaryColor" : ""
              } block w-full rounded-xl text-black font-semibold border-2 border-gray-400 p-3 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm focus:placeholder:text-primaryColor`}
              type="text"
              {...register("destination")}
              placeholder={
                errors?.destination
                  ? (errors.destination.message as string)
                  : "Enter Your Trip destination..."
              }
              id="destination"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-6 w-full">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="startDate">Trip Start Date</label>
            <input
              className={`${
                errors?.startDate ? "placeholder:text-primaryColor" : ""
              } block w-full rounded-xl text-black font-semibold border-2 border-gray-400 p-3 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm focus:placeholder:text-primaryColor`}
              type="date"
              {...register("startDate")}
              placeholder={
                errors?.startDate
                  ? (errors.startDate.message as string)
                  : "Enter Your Trip startDate..."
              }
              id="startDate"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="endDate">Trip End Date</label>
            <input
              className={`${
                errors?.endDate ? "placeholder:text-primaryColor" : ""
              } block w-full rounded-xl text-black font-semibold border-2 border-gray-400 p-3 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm focus:placeholder:text-primaryColor`}
              type="date"
              {...register("endDate")}
              placeholder={
                errors?.endDate
                  ? (errors.endDate.message as string)
                  : "Enter Your Trip endDate..."
              }
              id="endDate"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-6 w-full">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="tripType">Trip Type</label>
            <select
              id="tripType"
              className="block w-full rounded-xl text-black border-2 border-gray-400 p-3 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm"
              {...register("tripType")}
            >
              <option value="">Select A Trip Type</option>
              {tripTypes?.map((type, index) => (
                <option key={index} value={type?.value}>
                  {type?.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="budget">Trip Budget</label>
            <input
              className={`${
                errors?.budget ? "placeholder:text-primaryColor" : ""
              } block w-full rounded-xl text-black font-semibold border-2 border-gray-400 p-3 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm focus:placeholder:text-primaryColor`}
              type="number"
              {...register("budget")}
              placeholder={
                errors?.budget
                  ? (errors.budget.message as string)
                  : "Enter Your Trip budget..."
              }
              id="budget"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-6 w-full">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="activities">Trip Activities</label>
            <input
              className={`${
                errors?.activities ? "placeholder:text-primaryColor" : ""
              } block w-full rounded-xl text-black font-semibold border-2 border-gray-400 p-3 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm focus:placeholder:text-primaryColor`}
              type="text"
              autoComplete="off"
              {...register("activities")}
              placeholder={
                errors?.activities
                  ? (errors.activities.message as string)
                  : "Enter Your Trip activities..."
              }
              id="activities"
            />
          </div>
          {/* <div className="flex flex-col gap-1 w-full">
            <label htmlFor="image">Upload Trip Image </label>
            <input
              className={`${
                errors?.image ? "placeholder:text-primaryColor" : ""
              } block w-full rounded-xl text-white font-semibold border-2 border-gray-400 p-3 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm focus:placeholder:text-primaryColor`}
              type="file"
              {...register("image")}
              placeholder={
                errors?.image
                  ? (errors.image.message as string)
                  : "Enter Your Trip image..."
              }
              id="image"
            />
          </div> */}
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <label htmlFor="description">Description</label>
          <textarea
            className={`${
              errors?.description ? "placeholder:text-primaryColor" : ""
            } block w-full rounded-xl text-black font-semibold border-2 border-gray-400 p-3 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm focus:placeholder:text-primaryColor`}
            {...register("description")}
            rows={4}
            placeholder={
              errors?.description
                ? (errors.description.message as string)
                : "Enter Trip Description..."
            }
          />
        </div>

        <button
          type="submit"
          className="bg-[#E8604C] text-white hover:bg-black border border-black hover:border-white transition-all font-semibold px-12 mt-8 text-lg py-2 rounded mb-16"
        >
          {isLoading ? "Trip Updating..." : "Update Trip"}
        </button>
      </form>
    </div>
  );
};

export default EditMyTripPage;
