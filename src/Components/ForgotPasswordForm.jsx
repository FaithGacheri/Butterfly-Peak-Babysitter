import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

export default function ForgotPasswordForm() {
  return (
    <div className="flex h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
          Request password change
        </h2>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
              placeholder="you@example.com"
              defaultValue=""
              aria-invalid="true"
              aria-describedby="email-error"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon
                className="h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            </div>
          </div>
          <p className="mt-2 text-sm text-red-600" id="email-error">
            Your email should include @domain name.
          </p>
        </div>
      </div>
    </div>
  );
}
