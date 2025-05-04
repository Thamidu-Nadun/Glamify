import React from 'react';

function Sidebar () {
  return (
    <div className="sidebar">
      <div class="text-sm w-56 p-4 bg-white border border-gray-300/30 text-gray-500 rounded-md font-medium">
        <ul class="flex flex-col gap-2">
          <li class="flex items-center gap-2 bg-blue-600 text-white cursor-pointer px-3 py-2 rounded">
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.672 6.763 5.58 15.854l-.166 2.995 2.995-.166L17.5 9.59m-2.828-2.828 1.348-1.349a2 2 0 1 1 2.829 2.829L17.5 9.59m-2.828-2.828L17.5 9.591"
                stroke="currentColor"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <a href="#">Rename</a>
          </li>
          <li class="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-300/40 transition">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15.75V14.25C12 13.4544 11.6839 12.6913 11.1213 12.1287C10.5587 11.5661 9.79565 11.25 9 11.25H3.75C2.95435 11.25 2.19129 11.5661 1.62868 12.1287C1.06607 12.6913 0.75 13.4544 0.75 14.25V15.75M15 6V10.5M17.25 8.25H12.75M9.375 5.25C9.375 6.90685 8.03185 8.25 6.375 8.25C4.71815 8.25 3.375 6.90685 3.375 5.25C3.375 3.59315 4.71815 2.25 6.375 2.25C8.03185 2.25 9.375 3.59315 9.375 5.25Z"
                stroke="currentColor"
                stroke-opacity="0.9"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <a href="#">Add Member</a>
          </li>
          <div class="w-full h-px bg-gray-300/50 my-2" />
          <li class="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-300/40 transition">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.001 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                stroke="currentColor"
                stroke-opacity=".9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.935 10a1.1 1.1 0 0 0 .22 1.213l.04.04a1.332 1.332 0 0 1-.433 2.176 1.33 1.33 0 0 1-1.454-.289l-.04-.04a1.1 1.1 0 0 0-1.213-.22 1.1 1.1 0 0 0-.667 1.007V14a1.333 1.333 0 1 1-2.667 0v-.06a1.1 1.1 0 0 0-.72-1.007 1.1 1.1 0 0 0-1.213.22l-.04.04a1.334 1.334 0 1 1-1.887-1.886l.04-.04a1.1 1.1 0 0 0 .22-1.214 1.1 1.1 0 0 0-1.006-.666H2A1.333 1.333 0 0 1 2 6.72h.06A1.1 1.1 0 0 0 3.068 6a1.1 1.1 0 0 0-.22-1.213l-.04-.04A1.333 1.333 0 1 1 4.695 2.86l.04.04a1.1 1.1 0 0 0 1.213.22h.053a1.1 1.1 0 0 0 .667-1.007V2a1.333 1.333 0 1 1 2.667 0v.06A1.1 1.1 0 0 0 10 3.067a1.1 1.1 0 0 0 1.214-.22l.04-.04a1.334 1.334 0 1 1 1.886 1.886l-.04.04a1.1 1.1 0 0 0-.22 1.214V6a1.1 1.1 0 0 0 1.007.667H14a1.333 1.333 0 1 1 0 2.666h-.06a1.1 1.1 0 0 0-1.006.667"
                stroke="currentColor"
                stroke-opacity="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <a href="#">Settings</a>
          </li>
          <li class="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-red-300/40 hover:text-red-500 transition">
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 13.75q-.62 0-1.06-.44a1.45 1.45 0 0 1-.44-1.06V2.5H0V1h3.75V.25h4.5V1H12v1.5h-.75v9.75q0 .619-.44 1.06-.442.44-1.06.44zM9.75 2.5h-7.5v9.75h7.5zm-6 8.25h1.5V4h-1.5zm3 0h1.5V4h-1.5z"
                fill="currentColor"
                fill-opacity=".9"
              />
            </svg>
            <a href="#">Delete</a>
          </li>
          <div class="w-full h-px bg-gray-300/50 my-2" />
          <li class="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-300/40 transition">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.75 14.75v-1.5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1.5m16.5 0v-1.5A3 3 0 0 0 15 10.348m-3-9a3 3 0 0 1 0 5.812M9.75 4.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
                stroke="currentColor"
                stroke-opacity="1.5"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <a href="#">Add Team</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
