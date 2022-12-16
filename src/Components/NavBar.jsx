import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-black">
      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          <div className="bg-gray-900 pt-6">
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
                    to="/available_nannies"
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
                    to="/Contact Us"
                    className="text-base font-medium text-white hover:text-gray-300"
                  >
                    Contact Us
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
                      src="https://tailwindui.com/img/logos/mark.svg?from-color=teal&from-shade=500&to-color=cyan&to-shade=600&toShade=600"
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
                      to="/available_nannies"
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
                      to="/Contact Us"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Contact Us
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
                      <Link to="/login" className="text-gray-900 hover:underline">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <main>
          <div className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-10">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                  <div className="lg:py-24">
                    <Link
                      to="/available_nannies"
                      className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                    >
                      <span className="rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-5 py-0.5 text-sm font-semibold leading-5 text-white">
                        Looking for nanny?
                      </span>
                      <span className="ml-4 text-sm">
                        Check our Available nannies
                      </span>
                      <ChevronRightIcon
                        className="ml-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </Link>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">
                        Want your baby well taken care of?
                      </span>
                      <span className="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">
                        we got you
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                      An exemplary baby-sitting service company, we recruit the
                      best nannies, and at your request, they are avail to your home address as you as possible
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <form
                        action="#"
                        className="sm:mx-auto sm:max-w-xl lg:mx-0"
                      >
                        <div className="sm:flex">
                          <div className="min-w-0 flex-1">
                            <label htmlFor="email" className="sr-only">
                              Email address
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                            />
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <Link to="/sign_up">
                            <button
                              className="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                            >
                              Get Started
                            </button>
                            </Link>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                          Register and get 2Day care for free, no credit card
                          necessary. By providing your email, you agree to our{" "}
                          <Link to="/services" className="font-medium text-white">
                            terms of service
                          </Link>
                          .
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-full lg:max-w-none"
                      src="https://images.squarespace-cdn.com/content/v1/5a2f40a41f318d38ccf0c819/1593066487695-U1K0I1UIO6IL230ECKKO/Website-Redesign_KidsCarePackV2.0-10.png?format=2500w"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
