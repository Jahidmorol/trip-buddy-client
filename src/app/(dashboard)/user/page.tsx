"use client";

import { useForm, FieldValues, SubmitErrorHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  title: z.string().min(1, { message: "Trip Title is required" }),
  destination: z.string().min(1, { message: "Trip Destination is required" }),
  startDate: z.string().min(1, { message: "Trip Start Date is required" }),
  endDate: z.string().min(1, { message: "Trip End Date is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  tripType: z.string().min(1, { message: "Trip Type is required" }),
  budget: z
    .string()

    .min(1, { message: "Budget is required" }),
  activities: z
    .string()
    .min(1, { message: "Activities are required" })
    .transform((str) => str.split(",").map((activity) => activity.trim())),
  image: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, { message: "Image is required" }),
});

const UserPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    console.log(data);
    reset();

    // Submit the form data to your API
  };

  const tripTypes = [
    {
      label: "Adventure",
      value: "adventure",
    },
    {
      label: "Beach vacation",
      value: "beachvacation",
    },
    {
      label: "Cultural exploration",
      value: "culturalexploration",
    },
    {
      label: "Backpacking",
      value: "backpacking",
    },
    {
      label: "Road trip",
      value: "roadtrip",
    },
    {
      label: "Safari",
      value: "safari",
    },
    {
      label: "Ski trip",
      value: "skitrip",
    },
    {
      label: "City break",
      value: "citybreak",
    },
    {
      label: "Cruise",
      value: "cruise",
    },
    {
      label: "Family vacation",
      value: "familyvacation",
    },
    {
      label: "Hiking expedition",
      value: "hikingexpedition",
    },
    {
      label: "Luxury getaway",
      value: "luxurygetaway",
    },
    {
      label: "Solo travel",
      value: "solotravel",
    },
    {
      label: "Volunteering trip",
      value: "volunteeringtrip",
    },
    {
      label: "Wellness retreat",
      value: "wellnessretreat",
    },
  ];

  return (
    <div className="pt-4 w-full">
      <h1 className="text-3xl font-semibold pb-4">Post Travel</h1>
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
              {tripTypes.map((type, index) => (
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
          <div className="flex flex-col gap-1 w-full">
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
          </div>
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
          Save changes
        </button>
      </form>
    </div>
  );
};

export default UserPage;
