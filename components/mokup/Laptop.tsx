import React from "react";

export default function Laptop({ url }: { url: string }) {
  return (
    <div>
      <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-[12px] h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[36px] h-[5px] md:w-[56px] md:h-[8px] bg-gray-800 flex justify-center items-center">
        <div className="bg-black w-[5px] h-[5px] rounded-full "></div>
      </div>
        <div className="rounded-[6px] overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
          <img
            src={url}
            className="block h-[156px] md:h-[278px] w-full rounded-lg"
            alt=""
          />
        </div>
      </div>
      <div className="relative mx-auto bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
      </div>
    </div>
  );
}
