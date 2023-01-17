import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import moment from 'moment';
function Appointment({ person }) {
  const [id, setId]=useState(0)
  const [enabled, setEnabled] = useState(false);
  const start=moment(person.start_time).format('dddd, Do YYYY, h:mm a');
  const end=moment(person.end_time).format('dddd, Do YYYY, h:mm a')
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  function handleToggle(event) {
    event.preventDefault();
    fetch(`/bookings/${id}/toggle`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: enabled })
    })
    .then((r)=>r.json())
    .then(data=>console.log(data))
  }
  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={person.parent.image}
              alt="Parent_image"
            />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">
              {person.parent.first_name} {person.parent.last_name}
            </div>
            <div className="text-gray-500">{person.parent.phone}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <div className="text-gray-900">{start}</div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <div className="text-gray-900">{end}</div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <form onSubmit={handleToggle}>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          onClick={()=>setId(person.id)}
          className={classNames(
            enabled ? "bg-indigo-600" : "bg-gray-200",
            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          )}
        >
          <span className="sr-only">Use setting</span>
          <span
            className={classNames(
              enabled ? "translate-x-5" : "translate-x-0",
              "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            )}
          >
            <span
              className={classNames(
                enabled
                  ? "opacity-0 ease-out duration-100"
                  : "opacity-100 ease-in duration-200",
                "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
              )}
              aria-hidden="true"
            >
              <svg
                className="h-3 w-3 text-gray-400"
                fill="none"
                viewBox="0 0 12 12"
              >
                <path
                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              className={classNames(
                enabled
                  ? "opacity-100 ease-in duration-200"
                  : "opacity-0 ease-out duration-100",
                "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
              )}
              aria-hidden="true"
            >
              <svg
                className="h-3 w-3 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
              </svg>
            </span>
          </span>
        </Switch>
        </form>
      </td>
    </tr>
  );
}

export default Appointment;

// import React, { useState } from "react";
// function Toggle({ bookingId, initialStatus }) {
//   const [status, setStatus] = useState(initialStatus);
//   const handleToggle = event => {
//     event.preventDefault();
//     const newStatus = event.target.checked;
//     setStatus(newStatus);
//     // Send PATCH request to update the status in the backend
//     fetch(`/bookings/${bookingId}/toggle`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ status: newStatus })
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(response.statusText);
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Handle successful toggle
//       })
//       .catch(error => {
//         console.error("Error:", error);
//       });
//   };
//   return (
//     <label>
//       <input
//         type="checkbox"
//         checked={status}
//         onChange={handleToggle}
//         data-booking-id={bookingId}
//       />
//       {status ? "Accepted" : "Pending"}
//     </label>
//   );
// }
// export default Toggle;