import useSupabaseBrowser from "@/utils/supabase-browser";
import {
  useInsertMutation,
  useMutateItem,
} from "@supabase-cache-helpers/postgrest-react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { TypedSupabaseClient } from "@/utils/types";
import { Database } from "@/utils/database.types";


type folderType = Database['public']['Tables']['folders']['Row']
export default function FolderSidebar({
 
  folders,
  selectedFolder,
  setSelectedFolder,
  isLoading,
}:{

  folders: folderType[] | undefined | null,
  selectedFolder  : string,
  setSelectedFolder : React.Dispatch<React.SetStateAction<string>>,
  isLoading : boolean
  
}) {


  const adjectives = ['happy', 'sunny', 'funny', 'colorful', 'exciting'];
const nouns = ['elephant', 'pizza', 'rocket', 'unicorn', 'guitar'];

function generateDummyRepoName() {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  
  return `${adjective}${noun}`;
}
 
  const queryClient = useQueryClient();
  const supabase = useSupabaseBrowser();
  const mutation = useMutation({
    mutationFn: async () => {
      return supabase.from("folders").insert({
        name: generateDummyRepoName(),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folders"] });
    },
  });

  const mutationnotes = useMutation({
    mutationFn: async () => {
      return supabase.from("notes").insert({
        content: "",
        folderid: selectedFolder,
        title: "untitled note",
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  



  // const { mutateAsync: insert } = useInsertMutation(
  //   supabase.from('notes'),
  //   ['id'],
  //   null,
    
  //   {
  //     onSuccess: () => console.log('Success!'),
     
  //   }
  // );







  const handleCreateFolder = () => {
    mutation.mutate();
  };

  return (
    <div className="w-[300px] h-screen py-[30px] bg-[#181818] ">
      <div className="px-[20px]">
        <div className="mb-[30px] ">
          <svg
            width="101"
            height="38"
            viewBox="0 0 101 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.94 29.976C3.952 29.6813 3.28467 29.3953 2.938 29.118C2.59133 28.858 2.418 28.494 2.418 28.026C2.418 27.506 2.53933 26.778 2.782 25.842C3.02467 24.8887 3.33667 23.8313 3.718 22.67C4.11667 21.5087 4.56733 20.2953 5.07 19.03C5.57267 17.7647 6.084 16.5513 6.604 15.39C7.124 14.2287 7.62667 13.1713 8.112 12.218C8.61467 11.2473 9.05667 10.4933 9.438 9.956L9.256 8.864C9.49867 8.864 9.83667 8.92467 10.27 9.046C10.7033 9.16733 11.1367 9.31467 11.57 9.488C12.0207 9.66133 12.4107 9.84333 12.74 10.034C13.0867 10.2073 13.2773 10.3547 13.312 10.476C13.2253 10.892 13.156 11.5247 13.104 12.374C13.052 13.206 13.026 14.0987 13.026 15.052C13.026 16.9413 13.0953 18.796 13.234 20.616C13.39 22.4187 13.7367 24.256 14.274 26.128C14.5513 24.7413 14.846 23.3633 15.158 21.994C15.4873 20.6073 15.8253 19.29 16.172 18.042C16.5187 16.7767 16.8653 15.6067 17.212 14.532C17.5587 13.4573 17.888 12.5213 18.2 11.724C18.5293 10.9093 18.8327 10.2767 19.11 9.826C19.3873 9.358 19.6387 9.10667 19.864 9.072C20.0547 9.10667 20.2627 9.18467 20.488 9.306C20.7133 9.41 20.93 9.54 21.138 9.696C21.346 9.852 21.5367 10.0253 21.71 10.216C21.8833 10.4067 22.022 10.5973 22.126 10.788C21.5713 11.0133 21.0167 11.542 20.462 12.374C19.9247 13.206 19.4047 14.22 18.902 15.416C18.4167 16.5947 17.9573 17.8773 17.524 19.264C17.108 20.6507 16.7353 22.02 16.406 23.372C16.094 24.7067 15.8427 25.946 15.652 27.09C15.4787 28.234 15.3833 29.1527 15.366 29.846C15.366 29.8807 15.3747 29.9067 15.392 29.924C15.34 29.9413 15.2793 29.95 15.21 29.95C15.158 29.95 15.106 29.95 15.054 29.95C14.2567 29.95 13.546 29.846 12.922 29.638C12.3153 29.4473 11.9167 29.17 11.726 28.806C11.362 27.35 11.0587 25.946 10.816 24.594C10.5733 23.242 10.3653 21.89 10.192 20.538C10.036 19.186 9.906 17.8253 9.802 16.456C9.71533 15.0693 9.646 13.622 9.594 12.114C9.26467 12.634 8.918 13.3187 8.554 14.168C8.19 15 7.83467 15.9187 7.488 16.924C7.14133 17.9293 6.80333 18.9867 6.474 20.096C6.162 21.2053 5.88467 22.2887 5.642 23.346C5.39933 24.4033 5.20867 25.4087 5.07 26.362C4.93133 27.298 4.862 28.1127 4.862 28.806C4.862 29.17 4.862 29.43 4.862 29.586C4.87933 29.742 4.90533 29.872 4.94 29.976ZM22.6525 28.91C21.6645 28.806 20.8758 28.3727 20.2865 27.61C19.6972 26.8473 19.4025 25.8767 19.4025 24.698C19.4025 24.0047 19.5065 23.2853 19.7145 22.54C19.9225 21.7947 20.2172 21.0753 20.5985 20.382C20.9798 19.6713 21.4305 19.004 21.9505 18.38C22.4705 17.756 23.0338 17.2187 23.6405 16.768C24.5938 16.0573 25.4865 15.702 26.3185 15.702C26.8732 15.9967 27.4192 16.612 27.9565 17.548C28.0432 17.548 28.1212 17.548 28.1905 17.548C28.2598 17.5307 28.3378 17.522 28.4245 17.522C29.3432 17.522 29.8025 18.3367 29.8025 19.966C29.8025 21.058 29.6205 22.098 29.2565 23.086C28.9098 24.0567 28.4158 24.9407 27.7745 25.738C27.1505 26.5353 26.3965 27.2113 25.5125 27.766C24.6458 28.3033 23.6925 28.6847 22.6525 28.91ZM23.9785 20.72C23.6838 21.1187 23.4065 21.552 23.1465 22.02C22.8865 22.488 22.6612 22.9647 22.4705 23.45C22.2798 23.918 22.1325 24.3773 22.0285 24.828C21.9245 25.2613 21.8725 25.6513 21.8725 25.998C21.8725 26.414 21.9418 26.8127 22.0805 27.194C22.2192 27.5753 22.3752 27.792 22.5485 27.844C23.3285 27.6707 24.0392 27.35 24.6805 26.882C25.3392 26.3967 25.9025 25.7987 26.3705 25.088C26.8558 24.3773 27.2285 23.5713 27.4885 22.67C27.7658 21.7687 27.9045 20.8067 27.9045 19.784C27.9045 19.3333 27.8785 18.978 27.8265 18.718C27.7745 18.458 27.6878 18.2327 27.5665 18.042C26.8038 18.2673 26.1192 18.6313 25.5125 19.134C24.9232 19.6367 24.4118 20.1653 23.9785 20.72ZM31.2951 26.934C31.2951 26.5873 31.3297 26.102 31.3991 25.478C31.4857 24.854 31.5897 24.178 31.7111 23.45C31.8497 22.722 31.9971 21.9767 32.1531 21.214C32.3264 20.4513 32.4997 19.7667 32.6731 19.16C32.8984 18.3453 33.2451 17.7213 33.7131 17.288C34.1984 16.8373 34.7964 16.612 35.5071 16.612C35.8884 16.612 36.2611 16.6727 36.6251 16.794C37.0064 16.9153 37.2317 17.0713 37.3011 17.262C36.7984 17.678 36.3911 18.198 36.0791 18.822C35.7844 19.4287 35.5417 20.0873 35.3511 20.798C35.1777 21.4913 35.0391 22.2107 34.9351 22.956C34.8484 23.684 34.7531 24.3687 34.6491 25.01C35.2211 24.2473 35.7584 23.5627 36.2611 22.956C36.7811 22.332 37.2404 21.838 37.6391 21.474C38.1764 20.9713 38.5404 20.5553 38.7311 20.226C38.9217 19.8793 39.0864 19.5067 39.2251 19.108C39.3291 18.796 39.4504 18.432 39.5891 18.016C39.7451 17.6 39.9964 17.2187 40.3431 16.872C40.4124 16.8547 40.5597 16.846 40.7851 16.846C40.9584 16.846 41.1404 16.8547 41.3311 16.872C41.5391 16.8893 41.7297 16.924 41.9031 16.976C42.0764 17.028 42.2237 17.0887 42.3451 17.158C42.4664 17.2273 42.5357 17.314 42.5531 17.418C42.2757 17.782 42.0157 18.354 41.7731 19.134C41.5304 19.8967 41.3137 20.7373 41.1231 21.656C40.9324 22.5747 40.7591 23.4933 40.6031 24.412C40.4471 25.3133 40.3084 26.076 40.1871 26.7C40.2564 26.6653 40.4124 26.5267 40.6551 26.284C40.8977 26.0413 41.1664 25.738 41.4611 25.374C41.7731 25.01 42.0937 24.6113 42.4231 24.178C42.7697 23.7447 43.0731 23.32 43.3331 22.904C43.6624 22.4013 43.9311 21.9333 44.1391 21.5C44.3644 21.0493 44.5551 20.5727 44.7111 20.07C44.8844 19.5673 45.0404 19.0127 45.1791 18.406C45.3177 17.782 45.4651 17.0453 45.6211 16.196C45.7251 16.0573 45.9504 15.9447 46.2971 15.858C46.6611 15.754 46.9904 15.702 47.2851 15.702C47.5451 15.702 47.7357 15.7453 47.8571 15.832C47.7704 16.8027 47.6057 17.6693 47.3631 18.432C47.1377 19.1947 46.8257 19.94 46.4271 20.668C46.0284 21.3787 45.5344 22.098 44.9451 22.826C44.3557 23.5367 43.6624 24.3167 42.8651 25.166C42.5357 25.5127 42.1717 25.894 41.7731 26.31C41.3917 26.726 41.0104 27.116 40.6291 27.48C40.2651 27.8267 39.9184 28.1213 39.5891 28.364C39.2771 28.6067 39.0344 28.728 38.8611 28.728C38.4624 28.728 38.1331 28.572 37.8731 28.26C37.6131 27.948 37.4831 27.5493 37.4831 27.064C37.4831 26.5613 37.5004 26.128 37.5351 25.764C37.5871 25.3827 37.6651 24.984 37.7691 24.568C37.8731 24.1867 37.9511 23.866 38.0031 23.606C38.0724 23.346 38.1244 23.1207 38.1591 22.93C38.2111 22.7393 38.2457 22.5747 38.2631 22.436C38.2804 22.2973 38.2977 22.1587 38.3151 22.02C38.1764 22.0893 37.9944 22.2367 37.7691 22.462C37.5437 22.67 37.3097 22.9213 37.0671 23.216C36.8244 23.4933 36.5817 23.7793 36.3391 24.074C36.0964 24.3687 35.8971 24.62 35.7411 24.828C35.4117 25.2787 35.1257 25.6773 34.8831 26.024C34.6404 26.3707 34.4064 26.7 34.1811 27.012C33.9731 27.324 33.7651 27.6447 33.5571 27.974C33.3491 28.286 33.1064 28.624 32.8291 28.988C32.2744 28.8147 31.8757 28.5547 31.6331 28.208C31.4077 27.8613 31.2951 27.4367 31.2951 26.934ZM49.099 18.042C49.0123 17.938 48.9343 17.7213 48.865 17.392C48.7956 17.0453 48.761 16.7507 48.761 16.508C49.2116 16.5427 49.645 16.5773 50.061 16.612C50.477 16.6293 50.8583 16.6467 51.205 16.664C51.465 16.144 51.7423 15.6327 52.037 15.13C52.349 14.61 52.6436 14.142 52.921 13.726C53.2156 13.2927 53.4843 12.9287 53.727 12.634C53.987 12.3393 54.1863 12.1487 54.325 12.062C54.4983 12.062 54.715 12.0967 54.975 12.166C55.2523 12.218 55.5296 12.296 55.807 12.4C56.0843 12.4867 56.3356 12.582 56.561 12.686C56.7863 12.79 56.9423 12.894 57.029 12.998C56.509 13.6567 56.0583 14.272 55.677 14.844C55.313 15.3987 54.9143 16.04 54.481 16.768C54.8276 16.768 55.1743 16.7593 55.521 16.742C55.885 16.7247 56.249 16.6987 56.613 16.664C56.6996 16.7507 56.769 16.8633 56.821 17.002C56.873 17.1233 56.899 17.2533 56.899 17.392C56.0496 17.704 55.0183 17.8773 53.805 17.912C53.3716 18.744 52.9816 19.576 52.635 20.408C52.3056 21.2227 52.0196 22.0113 51.777 22.774C51.5516 23.5367 51.3696 24.256 51.231 24.932C51.1096 25.608 51.049 26.2147 51.049 26.752C51.049 27.5147 51.335 27.9393 51.907 28.026C52.427 27.9567 52.921 27.8267 53.389 27.636C53.857 27.4453 54.273 27.2027 54.637 26.908C54.741 27.064 54.8016 27.194 54.819 27.298C54.715 27.454 54.533 27.636 54.273 27.844C54.0303 28.052 53.7616 28.2513 53.467 28.442C53.1723 28.65 52.8863 28.8233 52.609 28.962C52.3316 29.1007 52.1236 29.1787 51.985 29.196C51.5516 29.1787 51.1183 29.0833 50.685 28.91C50.2516 28.7367 49.853 28.52 49.489 28.26C49.1423 28 48.8563 27.714 48.631 27.402C48.4056 27.0727 48.293 26.752 48.293 26.44C48.293 26.024 48.345 25.504 48.449 24.88C48.5703 24.2387 48.735 23.5453 48.943 22.8C49.151 22.0547 49.3936 21.2747 49.671 20.46C49.9483 19.6453 50.2516 18.8393 50.581 18.042H49.099ZM66.0136 17.236C65.9443 18.3107 65.7536 19.238 65.4416 20.018C65.1296 20.7807 64.6789 21.4567 64.0896 22.046C63.5176 22.618 62.8156 23.138 61.9836 23.606C61.1516 24.074 60.1809 24.5247 59.0716 24.958C59.0716 25.062 59.0629 25.1747 59.0456 25.296C59.0456 25.4 59.0456 25.5127 59.0456 25.634C59.0456 25.8593 59.0629 26.0933 59.0976 26.336C59.1323 26.5787 59.1929 26.804 59.2796 27.012C59.3663 27.22 59.4876 27.3933 59.6436 27.532C59.7996 27.6533 59.9989 27.714 60.2416 27.714C60.7096 27.714 61.1689 27.61 61.6196 27.402C62.0703 27.194 62.4949 26.9427 62.8936 26.648C63.3096 26.336 63.6909 26.0067 64.0376 25.66C64.4016 25.296 64.7223 24.9667 64.9996 24.672C65.1729 24.828 65.3203 24.9753 65.4416 25.114C64.6616 26.154 63.8036 27.0207 62.8676 27.714C61.9489 28.39 61.0736 28.8233 60.2416 29.014C59.0456 28.8753 58.1096 28.442 57.4336 27.714C56.7749 26.9687 56.4456 26.076 56.4456 25.036C56.4456 24.3253 56.5409 23.606 56.7316 22.878C56.9396 22.1327 57.2169 21.422 57.5636 20.746C57.9276 20.0527 58.3436 19.4027 58.8116 18.796C59.2969 18.1893 59.8083 17.6607 60.3456 17.21C60.9003 16.7593 61.4636 16.404 62.0356 16.144C62.6249 15.884 63.2056 15.754 63.7776 15.754C64.5749 15.858 65.3203 16.352 66.0136 17.236ZM64.2196 18.094C63.7516 18.1633 63.2663 18.354 62.7636 18.666C62.2609 18.978 61.7843 19.394 61.3336 19.914C60.9003 20.434 60.5016 21.0407 60.1376 21.734C59.7736 22.4273 59.4876 23.1727 59.2796 23.97C60.6663 23.2767 61.8189 22.4273 62.7376 21.422C63.6563 20.3993 64.1503 19.29 64.2196 18.094ZM72.8853 15.858C73.232 15.858 73.6306 15.962 74.0813 16.17C74.532 16.378 74.9306 16.6467 75.2773 16.976C75.1906 16.2827 75.078 15.6327 74.9393 15.026C74.818 14.402 74.6273 13.7607 74.3673 13.102C74.1246 12.4433 73.7953 11.724 73.3793 10.944C72.9633 10.164 72.4433 9.27133 71.8193 8.266C71.8713 8.11 71.984 7.928 72.1573 7.72C72.348 7.512 72.556 7.32133 72.7813 7.148C73.024 6.95733 73.2666 6.79267 73.5093 6.654C73.7693 6.51533 74.012 6.42867 74.2373 6.394C74.7226 6.93133 75.182 7.60733 75.6153 8.422C76.0486 9.21933 76.43 10.086 76.7593 11.022C77.0886 11.9407 77.34 12.894 77.5133 13.882C77.704 14.87 77.7993 15.8147 77.7993 16.716C77.7993 17.6173 77.6953 18.5447 77.4873 19.498C77.2966 20.4513 77.0193 21.3873 76.6553 22.306C76.3086 23.2073 75.9013 24.0653 75.4333 24.88C74.9653 25.6947 74.454 26.4227 73.8993 27.064C73.362 27.7053 72.7986 28.2253 72.2093 28.624C71.62 29.04 71.0306 29.3 70.4413 29.404C69.2453 29.2653 68.3266 28.8753 67.6853 28.234C67.0613 27.61 66.7493 26.7433 66.7493 25.634C66.7493 25.0447 66.836 24.4033 67.0093 23.71C67.2 23.0167 67.4426 22.332 67.7373 21.656C68.0493 20.9627 68.4046 20.2953 68.8033 19.654C69.2193 18.9953 69.6526 18.406 70.1033 17.886C70.5713 17.366 71.0393 16.924 71.5073 16.56C71.9753 16.196 72.4346 15.962 72.8853 15.858ZM70.2333 28.364C70.84 28.156 71.4466 27.6967 72.0533 26.986C72.66 26.2753 73.206 25.4433 73.6913 24.49C74.1766 23.5193 74.5666 22.488 74.8613 21.396C75.1733 20.2867 75.3293 19.2207 75.3293 18.198C75.3293 17.9033 75.3293 17.7213 75.3293 17.652C75.3293 17.5827 75.3206 17.5133 75.3033 17.444C74.8873 17.6173 74.4453 17.912 73.9773 18.328C73.5093 18.744 73.0413 19.2293 72.5733 19.784C72.1053 20.3213 71.6633 20.9107 71.2473 21.552C70.8313 22.1933 70.4586 22.8347 70.1293 23.476C69.8 24.1173 69.54 24.7327 69.3493 25.322C69.1586 25.9113 69.0633 26.4313 69.0633 26.882C69.0633 27.7487 69.4533 28.2427 70.2333 28.364Z"
              fill="white"
            />
            <g clip-path="url(#clip0_18_313)">
              <path
                d="M96.625 1.87501C96.7892 1.71085 96.984 1.58064 97.1985 1.4918C97.413 1.40296 97.6429 1.35724 97.875 1.35724C98.1071 1.35724 98.337 1.40296 98.5515 1.4918C98.766 1.58064 98.9608 1.71085 99.125 1.87501C99.2892 2.03916 99.4194 2.23404 99.5082 2.44851C99.597 2.66299 99.6428 2.89286 99.6428 3.12501C99.6428 3.35715 99.597 3.58703 99.5082 3.8015C99.4194 4.01598 99.2892 4.21085 99.125 4.37501L90.6875 12.8125L87.25 13.75L88.1875 10.3125L96.625 1.87501Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_18_313">
                <rect
                  width="15"
                  height="15"
                  fill="white"
                  transform="translate(86)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <button
          onClick={() => {
            mutationnotes.mutateAsync()
          }}
          className="font-semibold h-[40px]  items-center flex rounded justify-center w-full text-white bg-[#1C1C1C] mb-[30px] p-[10px]"
        >
          <svg
            className="mr-2"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 4.16666V15.8333"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.66669 10H16.3334"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          New Note
        </button>
      </div>

      <div className="mb-[8px] flex justify-between text-white p-[20px] items-center">
        <h2>Folders</h2>

        {mutation.isPending ? (
          <RotatingLines width="30" strokeWidth="2" strokeColor="white" />
        ) : (
          <svg
            className="cursor-pointer "
            onClick={() => handleCreateFolder()}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                d="M3.33332 16.6667H16.6667C17.1087 16.6667 17.5326 16.4911 17.8452 16.1785C18.1577 15.866 18.3333 15.442 18.3333 15V6.66667C18.3333 6.22464 18.1577 5.80072 17.8452 5.48816C17.5326 5.17559 17.1087 5 16.6667 5H10.0583C9.78381 4.99858 9.5139 4.92937 9.27257 4.79853C9.03124 4.66769 8.82597 4.47927 8.67499 4.25L7.99166 3.25C7.84068 3.02073 7.6354 2.83231 7.39407 2.70147C7.15275 2.57063 6.88283 2.50142 6.60832 2.5H3.33332C2.8913 2.5 2.46737 2.67559 2.15481 2.98816C1.84225 3.30072 1.66666 3.72464 1.66666 4.16667V15C1.66666 15.9167 2.41666 16.6667 3.33332 16.6667Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 8.33331V13.3333"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 10.8333H12.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        )}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <RotatingLines
            visible={true}
            width="50"
            strokeColor="white"
            strokeWidth="3"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </div>
      ) : null}

      {folders &&folders?.map((i) => {
        return (
          <div
            onClick={() => {
              if (i.id) {
                setSelectedFolder(i.id);
              }
            }}
            className={`text-xl cursor-pointer text-white  flex space-x-4 items-center
         ${selectedFolder === i.id && "bg-[#312EB5]"}
          
          p-3`}
            key={i.id}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33335 16.6667H16.6667C17.1087 16.6667 17.5326 16.4911 17.8452 16.1785C18.1578 15.866 18.3334 15.442 18.3334 15V6.66667C18.3334 6.22464 18.1578 5.80072 17.8452 5.48816C17.5326 5.17559 17.1087 5 16.6667 5H10.0584C9.78384 4.99858 9.51393 4.92937 9.2726 4.79853C9.03127 4.66769 8.826 4.47927 8.67502 4.25L7.99169 3.25C7.84071 3.02073 7.63543 2.83231 7.39411 2.70147C7.15278 2.57063 6.88287 2.50142 6.60835 2.5H3.33335C2.89133 2.5 2.4674 2.67559 2.15484 2.98816C1.84228 3.30072 1.66669 3.72464 1.66669 4.16667V15C1.66669 15.9167 2.41669 16.6667 3.33335 16.6667Z"
                stroke="white"
                stroke-opacity="0.6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="capitalize">{i.name}</p>
          </div>
        );
      })}
    </div>
  );
}
