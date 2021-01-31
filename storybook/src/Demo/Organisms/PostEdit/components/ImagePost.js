import React from "react";
import postImg from "../../../../img/image.png";

const ImagePost = ({ alpha }) => {
  return (
    <div className="flex flex-col">
      <img src={postImg} alt="fashion" width="344" className="md:w-96" />
      <div className="relative mt-xxs">
        <input
          className="hover:border-grey-shd2 focus:text-dark-grey focus:border-dark border border-grey-shd5 bg-transparent md:bg-white py-2.5 pr-m pl-11 text-sm font-normal text-grey-shd1 w-full rounded-b-md focus:outline-none"
          type="text"
          placeholder="Type caption (optional)"
        />
        <div className="bg-grey-shd7 py-0.5 px-xs rounded-sm absolute top-2 left-2">
          <h3 className="text-sm text-grey font-normal leading-snug">
            {alpha}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ImagePost;
