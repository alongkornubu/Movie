import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="bg-[#DC3545] h-[83px]">
        <div className="flex xl:ml-40 p-2 md:ml-2">
          <div className="text-white xl:font-bold  lg:text-3xl md:text-sm md:mt-6 md:font-medium lg:mt-4 cursor-pointer">
            <a href="#">MOVIE-FREE</a>
          </div>
          <div className="flex space-x-8 ml-10 mt-6  text-sm cursor-pointer md:ml-5">
            <a className="text-white hover:text-yellow-400" href="#">
              ดูหนังออนไลน์
            </a>
            <a className="text-white hover:text-yellow-400" href="#">
              จัดอันดับ IMDB
            </a>
            <a className="text-white hover:text-yellow-400" href="#">
              หนังภาคต่อ
            </a>

          </div>
          <div class="flex mt-5 md:ml-3 md:w-10 lg:ml-[160px] ">
            <input className="placeholder:italic placeholder:text-slate-400 bg-white xl:w-56 h-8 rounded-md border border-red-400 focus:outline-none focus:border-sky-500 focus:ring-1 sm:text-sm" placeholder=" Search for anything..."/>
               
            <div>
              <button class="bg-[#ffc107] p-1 w-14 h-8  rounded text-black">ค้นหา</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header