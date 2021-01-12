import React from "react";

export const Upload = () => {
  return (
    <>
      <div className="relative flex justify-center items-center border-2 border-dashed border-accent bg-grey-shd7 rounded-md text-accent focus:outline-none h-14">
        <div className="flex items-center">
          <svg
            className="mr-1 w-4 h-4 fill-current inline"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 5H17V12H19V5C19 3.897 18.103 3 17 3H4C2.897 3 2 3.897 2 5V17C2 18.103 2.897 19 4 19H12V17H4V5Z"
              fill="currentColor"
            />
            <path d="M8 11L5 15H16L12 9L9 13L8 11Z" fill="currentColor" />
            <path
              d="M19 14H17V17H14V19H17V22H19V19H22V17H19V14Z"
              fill="currentColor"
            />
          </svg>
          <p className="pl-xxs text-accent font-medium font-sm">
            Upload one or multiple images
          </p>
        </div>
        <input
          type="file"
          id="myFile"
          name="filename"
          multiple
          className="absolute top-0 bottom-0 right-0 left-0 opacity-0 min-w-full h-full cursor-pointer"
        />
      </div>
    </>
  );
};
