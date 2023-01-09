import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import DateTime from "./DateTime";
const caregiver = {
  name: "Naomi Small",
  price: "Ksh 3500",
  images: [
    {
      id: 1,
      imageSrc:
        "https://images.pexels.com/photos/6970499/pexels-photo-6970499.jpeg?auto=compress&cs=tinysrgb&w=1600",
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc:
        "https://images.pexels.com/photos/6970515/pexels-photo-6970515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc:
        "https://images.pexels.com/photos/6970114/pexels-photo-6970114.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  location: ["Kitengela"],
  status: true,
  description: `
    <p>Iam an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  Experience: [
    "One year at Kilimani nannies association",
    "6-Months experience at Kitengela mums",
    "Assistant manager at mums for care foundation ",
    "3months experience at Kikuyu Nannies ltd",
  ],
};

const reviews = {
  average: 3.9,
  totalCount: 4,
  featured: [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
      `,
      author: "Risako M",
      date: "May 16, 2021",
      datetime: "2021-01-06",
    },
  ],
};
const relatedProducts = [
  {
    id: 1,
    name: "James Woods",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/6213183/pexels-photo-6213183.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "Ksh 5500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CardItem() {
  const [clicked, setClicked] = useState(false);
  const nav=useNavigate()
  function handleSubmit(event) {
    event.preventDefault();
    nav('/checkout')
  }
  return (
    <div className="bg-white">
      <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8 border-r">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between">
              <h1 className="text-2xl font-medium text-gray-900">
                {caregiver.name}
              </h1>
              <p className="text-xl font-medium text-gray-900">
                Price Tag: {caregiver.price}/hr
              </p>
            </div>
            {/* Reviews */}
            <div className="mt-4">
              <h2 className="">Average Rating</h2>
              <div className="flex items-center">
                <p className="text-sm text-gray-700">
                  {reviews.average}
                  <span> out of 5 stars</span>
                </p>
                <div className="ml-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-yellow-400"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                  ·
                </div>
                <div className="ml-4 flex">
                  <Link
                    to="/card-item/reviews"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    See all {reviews.totalCount} reviews
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-900 lg:text-2xl pt-6">
                  Location
                </h2>
                <li className="mt-1 text-sm text-gray-500">
                  {caregiver.location}
                </li>
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-900 lg:text-2xl pt-6">
                  Status
                </h2>
                {caregiver.status ? (
                  <button className="bg-green-400 mt-2 flex w-1/2 items-center justify-center rounded-md border border-transparent py-3 text-base font-medium text-black">
                    Available for Hire
                  </button>
                ) : (
                  <p className="text-sm font-medium text-red-600 lg:text-2xl pt-2">
                    Sorry‼️ {caregiver.name} is unavailable
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Image gallery */}
          <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0 lg:mb-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
              {caregiver.images.map((image) => (
                <img
                  key={image.id}
                  src={image.imageSrc}
                  alt={image.imageAlt}
                  className={classNames(
                    image.primary
                      ? "lg:col-span-4 lg:row-span-4"
                      : "hidden lg:block",
                    "rounded-lg"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 lg:col-span-5">
            {/* Bio and experience*/}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900 lg:text-2xl">
                About {caregiver.name}
              </h2>

              <div
                className="prose prose-sm mt-4 text-gray-500"
                dangerouslySetInnerHTML={{ __html: caregiver.description }}
              />
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-medium text-gray-900 lg:text-2xl">
                Field &amp; Experience
              </h2>

              <div className="prose prose-sm mt-4 text-gray-500">
                <ul>
                  {caregiver.Experience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {caregiver.status ? (
              <div>
                {clicked ? (
                  <form onSubmit={handleSubmit}>
                    <>
                    <p className="text-lg text-sm font-medium text-red-600 lg:text-2xl pt-6 pb-6">Select the Date and Time</p>
                      <DateTime required/>
                      <button
                        type="submit"
                        className="mt-8 flex w-1/2 items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Submit Request
                      </button>
                    </>
                  </form>
                ) : (
                  <button
                    onClick={() => setClicked(true)}
                    type="submit"
                    className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Book Now
                  </button>
                )}
              </div>
            ) : null}
          </div>
        </div>

        {/* Reviews */}
        <section aria-labelledby="reviews-heading" className="mt-10 sm:mt-24">
          <h2
            id="reviews-heading"
            className="text-lg text-sm font-medium text-gray-900 lg:text-2xl pt-6"
          >
            Recent reviews
          </h2>

          <div className="mt-6 space-y-10 divide-y divide-gray-200 border-t border-b border-gray-200 pb-10">
            {reviews.featured.map((review) => (
              <div
                key={review.id}
                className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
              >
                <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                  <div className="flex items-center xl:col-span-1">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            review.rating > rating
                              ? "text-yellow-400"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      {review.rating}
                      <span className="sr-only"> out of 5 stars</span>
                    </p>
                  </div>

                  <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                    <h3 className="text-sm font-medium text-gray-900">
                      {review.title}
                    </h3>

                    <div
                      className="mt-3 space-y-6 text-sm text-gray-500"
                      dangerouslySetInnerHTML={{ __html: review.content }}
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                  <p className="font-medium text-gray-900">{review.author}</p>
                  <time
                    dateTime={review.datetime}
                    className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                  >
                    {review.date}
                  </time>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top rated caregivers */}
        <section aria-labelledby="related-heading" className="mt-0 sm:mt-24">
          <h2
            id="related-heading"
            className="text-lg text-sm font-medium text-gray-900 lg:text-2xl"
          >
            Top rated Caregivers
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={relatedProduct.imageSrc}
                    alt={relatedProduct.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={relatedProduct.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {relatedProduct.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Price Tag:{relatedProduct.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
