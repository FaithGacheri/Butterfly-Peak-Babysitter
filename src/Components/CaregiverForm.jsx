import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import YearPicker from "react-year-picker";

export default function CaregiverForm() {
  const [value, setValue] = React.useState("");
  return (
    <div className=" w-2/3 m-auto mt-10 h-auto pb-20 ">
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-2xl font-medium leading-6 text-gray-900 border-b pb-4">
                Profile
              </h3>
              <p className="mt-1 text-md text-gray-700">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-md font-medium text-gray-700 pb-3"
                >
                  Username
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block w-2/3 min-w-0 flex-1 p-3 rounded border border-gray-400  sm:text-sm "
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="about"
                  className="block text-md font-medium text-gray-700 pb-3"
                >
                  About
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    placeholder="Write about yourself here"
                    rows={4}
                    className="block w-1/2 rounded-md border border-gray-400 shadow-sm sm:text-sm"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-1 text-md text-gray-700">
                  Write a few sentences about yourself.
                </p>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="photo"
                  className="block text-md font-medium text-gray-700 pb-3"
                >
                  Photo
                </label>
                <div className="mt-1 flex items-center">
                  <span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <button
                    type="button"
                    className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="cover-photo"
                  className="block text-md font-medium text-gray-700 pb-3"
                >
                  Cover photo
                </label>
                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div>
              <h3 className="text-2xl font-medium leading-6 text-gray-900 border-b pb-4">
                Personal Information
              </h3>
              <p className="mt-1 text-md text-gray-700">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-md font-medium text-gray-700 pb-3"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-2/3 min-w-0 flex-1 p-3 rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-md font-medium text-gray-700 pb-3"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-2/3 min-w-0 flex-1 p-3 rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-md font-medium text-gray-700 pb-3"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-2/3 min-w-0 flex-1 p-3 rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-md font-medium text-gray-700 pb-3"
                >
                  City
                </label>
                <div className="mt-1">
                  <select
                    id="city"
                    name="city"
                    autoComplete="city-name"
                    className="block w-2/3 min-w-0 flex-1 p-3 rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                  >
                    <option>Nairobi</option>
                    <option>Mombasa</option>
                    <option>Nakuru</option>
                    <option>Kisumu</option>
                    <option>Thika</option>
                    <option>Machakos</option>
                    <option>Eldoret</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="street-address"
                  className="block text-md font-medium text-gray-700 pb-3"
                >
                  Street address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-2/3 min-w-0 flex-1 p-3 rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Town
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-2/3 min-w-0 flex-1 p-3 rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-2/3 min-w-0 flex-1 p-3 rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-2/3 min-w-0 flex-1 p-3 rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-md font-medium text-gray-700 pb-3"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <PhoneInput
                    className="block w-2/3 min-w-0 flex-1 object-contain  rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                    international={false}
                    defaultCountry="KE"
                    value={value}
                    onChange={setValue}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div>
              <h3 className="text-2xl font-medium leading-6 text-gray-900 border-b pb-4">
                Education and Experience
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                We'll always let you know about important changes, but you pick
                what else you want to hear about.
              </p>
            </div>
            <div className="mt-6">
              <fieldset>
                <legend className="sr-only">Education</legend>
                <div
                  className="text-base font-medium text-gray-900"
                  aria-hidden="true"
                >
                  Educaton
                </div>
                    <p>Select your highest level of education and year</p>
                <div className="mt-4 space-y-4 flex lg:flex-row md:flex-col sm:flex-row">
                  <div className="mt-1 sm:col-span-2">
                    <select
                      id="city"
                      name="city"
                      autoComplete="city-name"
                      className="block w-2/3 min-w-0 flex-1 p-3 rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                    >
                      <option>High School</option>
                      <option>Diploma</option>
                      <option>College Graduate</option>
                      <option>University Graduate</option>
                    </select>
                  </div>
                  <div className="mt-1 sm:col-span-2">
                    <label> Year</label>
                    <YearPicker/>
                  </div>
                </div>
              </fieldset>
              <fieldset className="mt-6">
                <legend className="contents text-base font-medium text-gray-900">
                  Experiences
                </legend>
                <p className="text-sm text-gray-500">
                  Briefly describe your job Experience.
                </p>
                <div className="mt-4 space-y-4">
                <textarea
                    id="about"
                    name="about"
                    placeholder="Write about yourself here"
                    rows={4}
                    className="block w-1/2 rounded-md border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={""}
                  />
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-md  border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex  justify-center rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}