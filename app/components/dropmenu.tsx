"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const NoteDropMenu = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger className="outline-none">
      <div className=" h-[30px] w-[30px] rounded-full border-white border cursor-pointer flex justify-center items-center ">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 10.8334C10.4603 10.8334 10.8334 10.4603 10.8334 10C10.8334 9.53978 10.4603 9.16669 10 9.16669C9.53978 9.16669 9.16669 9.53978 9.16669 10C9.16669 10.4603 9.53978 10.8334 10 10.8334Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10C16.6667 9.53978 16.2936 9.16669 15.8333 9.16669C15.3731 9.16669 15 9.53978 15 10C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.16665 10.8334C4.62688 10.8334 4.99998 10.4603 4.99998 10C4.99998 9.53978 4.62688 9.16669 4.16665 9.16669C3.70641 9.16669 3.33331 9.53978 3.33331 10C3.33331 10.4603 3.70641 10.8334 4.16665 10.8334Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
      <DropdownMenu.Content className="w-[202px]  absolute p-[15px] right-0 bg-[#333] rounded-md top-4 ">
        <DropdownMenu.Item className="text-base cursor-pointer outline-none mb-[20px] font-normal text-white flex space-x-[15px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99996 1.66669L12.575 6.88335L18.3333 7.72502L14.1666 11.7834L15.15 17.5167L9.99996 14.8084L4.84996 17.5167L5.83329 11.7834L1.66663 7.72502L7.42496 6.88335L9.99996 1.66669Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Add to favorites</p>
        </DropdownMenu.Item>

        <DropdownMenu.Item className="text-base cursor-pointer outline-none mb-[20px] font-normal text-white flex space-x-[15px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6666 3.33331H3.33329C2.41282 3.33331 1.66663 4.07951 1.66663 4.99998V5.83331C1.66663 6.75379 2.41282 7.49998 3.33329 7.49998H16.6666C17.5871 7.49998 18.3333 6.75379 18.3333 5.83331V4.99998C18.3333 4.07951 17.5871 3.33331 16.6666 3.33331Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.33337 7.5V15C3.33337 15.442 3.50897 15.866 3.82153 16.1785C4.13409 16.4911 4.55801 16.6667 5.00004 16.6667H15C15.4421 16.6667 15.866 16.4911 16.1786 16.1785C16.4911 15.866 16.6667 15.442 16.6667 15V7.5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.33337 10.8333H11.6667"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p>Archived</p>
        </DropdownMenu.Item>

        <DropdownMenu.Separator className=" h-[1px] bg-white opacity-5"></DropdownMenu.Separator>

        <DropdownMenu.Group>
          <DropdownMenu.Item className="text-base cursor-pointer outline-none mt-[20px] font-normal text-white flex space-x-[15px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 5H17.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8333 5V16.6667C15.8333 17.5 15 18.3333 14.1666 18.3333H5.83329C4.99996 18.3333 4.16663 17.5 4.16663 16.6667V5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66663 5.00002V3.33335C6.66663 2.50002 7.49996 1.66669 8.33329 1.66669H11.6666C12.5 1.66669 13.3333 2.50002 13.3333 3.33335V5.00002"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Delete</p>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);
