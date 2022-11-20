import React from "react";

const StoreBar = () => {
  return (
    <div className="relative h-[50vh] w-full">
      {/* BG img */}
      <img
        className="absolute top-0 h-[50vh] w-full object-cover"
        src="/imgs/city.jpg"
        alt="city-store-bar"
      />

      {/* left section */}

      <div className="flex justify-between">
        {/* left section */}
        <div className="hidden md:block md:w-1/2 h-full my-auto   z-10">
          <img
            className="md:w-2/3 mx-auto  "
            src="/imgs/devices.svg"
            alt="device"
          />
        </div>

        {/* right section    */}

        <div className="flex flex-col md:mr-24 z-10 md:w-[60vh] items-center  ">
          <h1 className="my-20 mb-8 text-3xl z-10 font-bold text-white ">
            Go mobile Read anywhere
          </h1>
          <p className="z-10 text-white mx-12 md:mx-4 mb-12">
            their people there must be some explanation for this, but
            you&apos;ll never know unless you find out what&apos;s really going
            on the main purpose of the game is to try to discover
          </p>
          {/* <div className="flex justify-start mx-4 z-10 ">
          <picture className="w-64 justify-center mx-4 h-20 bg-zinc-700 rounded-xl p-6">
            <img
              className="items-center object-cover "
              src="imgs/appstore-white.png"
              alt="appstore"
            />
          </picture>
          <picture>
            <img src="imgs/appstore-white.png" alt="appstore" />
          </picture>

          <picture>
            <img src="imgs/appstore-white.png" alt="appstore" />
          </picture>
        </div> */}
          <div className="mt-100 z-10 flex w-full justify-center pb-24 lg:pb-0">
            <img
              src="/imgs/App Store.svg"
              className="h-12 pr-4 bounce-top-icons"
              alt="app"
            />
            <img
              src="/imgs/Play Store.svg"
              className="h-12 bounce-top-icons"
              alt="device"
            />
          </div>
        </div>
      </div>
    </div>

    // <div className="h-screen pb-14 bg-right bg-cover bg-[url('/imgs/bg.svg')]">
    //   <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
    //     <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
    //       <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
    //         Main Hero Message to sell your app
    //       </h1>
    //       <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
    //         Sub-hero message, not too long and not too short. Make it just
    //         right!
    //       </p>

    //       <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
    //         Download our app:
    //       </p>
    //       <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
    //         <img
    //           src="/imgs/App Store.svg"
    //           className="h-12 pr-4 bounce-top-icons"
    //           alt="app"
    //         />
    //         <img
    //           src="/imgs/Play Store.svg"
    //           className="h-12 bounce-top-icons"
    //           alt="device"
    //         />
    //       </div>
    //     </div>

    //     <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
    //       <img
    //         className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
    //         src="/imgs/devices.svg"
    //         alt="device"
    //       />
    //     </div>

    //     <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
    //       <a className="text-gray-500 no-underline hover:no-underline" href="#">
    //         &copy; App 2019
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default StoreBar;
