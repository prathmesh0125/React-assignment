import React from "react";

const Topbar = () => {
  return (
    <div className="flex float-end justify-center items-center white gap-3 mr-0  sm:mr-8 lg:mr-10 mt-10">
      <div className="text-right">
        <h1 className="text-[20px] font-bold">Hi,Username</h1>
        <p className="text-blue-700 text-[14px] font-semibold -mt-2">
          Credits Left:300
        </p>
      </div>
      <div>
        <img
          src="public/images/user.jpg"
          alt="img"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Topbar;
