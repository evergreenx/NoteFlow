"use client";
import React from "react";
import * as Separator from "@radix-ui/react-separator";

export default function NoteDetails() {
  return (
    <div className="mt-[30px] ">
      <div className=" flex items-center space-x-[8px] ">
        <div className="flex items-center space-x-[20px] w-[100px]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <path
                d="M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 1.5V4.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 1.5V4.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.25 7.5H15.75"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 10.5H6.00833"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 10.5H9.00833"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 10.5H12.0083"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 13.5H6.00833"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 13.5H9.00833"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 13.5H12.0083"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>

          <h3 className="text-white opacity-60 text-sm font-semibold ">Date</h3>
        </div>

        <div className="text-white text-sm font-semibold underline">
          21/06/2022
        </div>
      </div>

      <Separator.Root
        className="bg-white  opacity-10  h-[1px] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]"
        decorative
        orientation="horizontal"
      />

      <div className=" flex items-center space-x-[8px] mb-[15px] ">
        <div className="flex items-center space-x-[20px] w-[100px]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <path
                d="M3 15H15C15.3978 15 15.7794 14.842 16.0607 14.5607C16.342 14.2794 16.5 13.8978 16.5 13.5V6C16.5 5.60218 16.342 5.22064 16.0607 4.93934C15.7794 4.65804 15.3978 4.5 15 4.5H9.0525C8.80544 4.49872 8.56252 4.43644 8.34532 4.31868C8.12813 4.20092 7.94338 4.03134 7.8075 3.825L7.1925 2.925C7.05662 2.71866 6.87187 2.54908 6.65468 2.43132C6.43748 2.31356 6.19456 2.25128 5.9475 2.25H3C2.60218 2.25 2.22064 2.40804 1.93934 2.68934C1.65804 2.97064 1.5 3.35218 1.5 3.75V13.5C1.5 14.325 2.175 15 3 15Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>

          <h3 className="text-white opacity-60 text-sm font-semibold ">
            Folder
          </h3>
        </div>

        <div className="text-white text-sm font-semibold underline">
          Personal
        </div>
      </div>

      <Separator.Root
        className="bg-white  opacity-10  h-[1px] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]"
        decorative
        orientation="horizontal"
      />
    </div>
  );
}
