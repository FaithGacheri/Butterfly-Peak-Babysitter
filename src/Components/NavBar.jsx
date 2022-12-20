

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div className="relative ">
        <Popover as="header" className="relative">
          <div className="bg-gray-900 pt-6 items-center pb-4">
            <nav
              className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex flex-1 items-center">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <Link to="/about">
                    <span className="sr-only">Logo</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                      alt=""
                    />
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:ml-10 md:flex">
                  <Link
                    to="/"
                    className="text-base font-medium text-white hover:text-gray-300"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-base font-medium text-white hover:text-gray-300"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact_us"
                    className="text-base font-medium text-white hover:text-gray-300"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/blog"
                    className="text-base font-medium text-white hover:text-gray-300"
                  >
                    Blog
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <Link
                  to="/login"
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  Log in
                </Link>
                <Link
                  to="/sign_up"
                  className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700"
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="space-y-1 px-2">
                    <Link
                      to="/"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/contact_us"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Contact Us
                    </Link>
                    <Link
                      to="/blog"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Blog
                    </Link>
                  </div>
                  <div className="mt-6 px-5">
                    <Link
                      to="/sign_up"
                      className="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700"
                    >
                      Get started
                    </Link>
                  </div>
                  <div className="mt-6 px-5">
                    <p className="text-center text-base font-medium text-gray-500">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-gray-900 hover:underline"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
}
