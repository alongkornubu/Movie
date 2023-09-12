import React from "react";
import { Movies } from "../Data/dataMovie";

const ShowMovies = ({ item }) => {
  return (

    
    <div className="cursor-pointer h-[232px] w-[174px] rounded-t-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="absolute mt-48">
        <div className="backdrop bg-black/40 text-[#fff] w-full ">
          <p className="text-base  p-1 block break-words text-center">
            {item.title}
          </p>
        </div>
      </div>
      <div>
        <img
          className="h-[229px] w-[174px] bg-cover rounded"
          src={item.image}
          alt=""
        />
      </div>
    </div>
  );
};

const Movie = () => {
  return (
    <>
      <div className="container px-10 py15 mx-auto ">
        <div className="grid grid-cols-4">
          <div className="bg-white mt-1  ml-20 md:ml-2 lg:ml-20  w-[85%] rounded-lg col-span-3">
            <div className="text-left p-2 bg-[#DC3545] h-[42px] rounded-t-lg ">
              <h1 className="text-white text-lg">หนังใหม่</h1>
            </div>
            {/* <!-- Grid --> */}
            <div className="">
              <div className="grid grid-cols-4 grid-rows-2 gap-2 p-4 shadow  ">
                {/* <!-- Movie --> */}
                {Movies.map((item, index) => (
                  <ShowMovies key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
          {/* <!-- Category --> */}
          <div className="bg-white  mt-1 rounded-lg w-56 ">
            <div className="bg-[#DC3545] rounded-t-lg h-[43px]">
              <p className="text-white p-2 ml-2">ประเภท</p>
            </div>
            <div className="flex flex-row mt-1 p-2 ">
              <div className="w-full border-2 rounded text-center divide-y-2 divide-solid cursor-pointer">
                <p>ครอบครัว</p>
                <p>จินตนาการ</p>
                <p>ตลก</p>
                <p>บู๊</p>
                <p>ระทึกขวัญ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
