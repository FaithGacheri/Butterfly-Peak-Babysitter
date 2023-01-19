import React, { useEffect, useState } from "react";
import Appointment from "./Appointment";
export default function AppointmentTable({ user }) {
  console.log(user);
  const [bookings, setBookings] = useState([]);
  
  useEffect(() => {
    fetch(`/caregivers/${user.id}/bookings`)
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      setBookings(data);
    });
  }, []);
  console.log(bookings);

  return (
    <div className="mt-10 w-4/5 m-auto sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl te font-medium text-center text-gray-900">
            Appointments
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Welcome Naomi. Here are you latest appointments, Accept or Decline
            as soon as possible.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none"></div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Parent Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Start_Time
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      End_Time
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Accept/Decline
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {bookings.map((person) => (
                    <Appointment person={person}/>
                  ))} 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}