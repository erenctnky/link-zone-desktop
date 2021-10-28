import React from "react";

export default function ConnectionCard({
  title,
  status,
  timing,
  traffic,
  network_type,
  battery,
  users_connected,
  linkZoneController
}) {
  return (
    <div className="rounded-lg w-72 p-4 bg-white shadow-lg dark:bg-gray-800 max-w-xs m-5">
      <p className="text-2xl leading-normal  font-bold text-black dark:text-white pt-4">
        {status}
      </p>
      <ul>
        <li
          className="text-xs font-inter leading-normal flex items-center font-medium text-black dark:text-white py-4 border-t border-gray-300">
          <span className="text-gray-600 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          {timing}
        </li>
        <li
          className="text-xs font-inter leading-normal flex items-center font-medium text-black dark:text-white py-4 border-t border-gray-300">
          <span className="text-gray-600 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </span>
          {traffic}
        </li>
        <li
          className="text-xs font-inter leading-normal flex items-center font-medium text-black dark:text-white py-4 border-t border-gray-300">
          <span className="text-gray-600 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </span>
          {network_type}
        </li>
        <li
          className="text-xs font-inter leading-normal flex items-center font-medium text-black dark:text-white py-4 border-t border-gray-300">
          <span className="text-gray-600 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </span>
          {battery}
        </li>
        <li
          className="text-xs font-inter leading-normal flex items-center font-medium text-black dark:text-white py-4 border-t border-gray-300">
          <span className="text-gray-600 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
          {users_connected}
        </li>
      </ul>
    </div>
  )
}