"use client";
import useSupabaseBrowser from "@/utils/supabase-browser";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const NoteDropMenu = ({ params }) => {
  const supabase = useSupabaseBrowser();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      return await supabase.from("notes").delete().eq("id", params.id);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      router.push("/");
    },
  });

  return (
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
          <DropdownMenu.Group onClick={() => mutateAsync()}>
            <DropdownMenu.Item className="text-base cursor-pointer outline-none  font-normal text-white flex space-x-[15px]">
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
};
