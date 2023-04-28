/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Search, UpdownArrow } from "./SvgList";
import { useState } from "react";
import Head from 'next/head';
import { ButtonWithArrow } from "./ButtonWithArrow";
interface IHeaderProps { }

const Header = ({ }: IHeaderProps): JSX.Element => {
  const [isMenu, setisMenu] = useState(false);
  const list = [
    "Find Talent",
    "Find Upwork",
    "Why Upwork"
  ]
  const buttonList = [
    "Development & IT", "Design & Creative", "Sales & Marketing", "Writing & Translation", "Admin & Customer Support"
  ]
  return (
    <div className="fixed top-0 z-10 flex flex-col w-full bg-white">
      <Head>
        <title>Upwork | The worlds work Marketplace</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex flex-row justify-between items-center h-[64px] p-[24px] border-b border-[#D5E0D5]">
        <div className="flex items-center gap-4">
          <button className="flex lg:hidden">
            {isMenu &&
              <img src="/img/cross-23.svg" className="w-5 h-5" alt="" onClick={() => {
                setisMenu(!isMenu);
              }} />
            }
            {!isMenu &&
              <img src="/img/ham.svg" className="w-5 h-5" alt="" onClick={() => {
                setisMenu(!isMenu);
              }} />
            }
          </button>
          <button className="w-[82px] h-[22px] flex" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Upwork_Logo.svg" alt="" />
          </button>
          {list.map((index, key) => {
            return (
              <div className="items-center hidden cursor-pointer lg:flex group">
                <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]" key={key}>{index}</button>
                <div className="w-3 h-3 group-hover:rotate-180">
                  <UpdownArrow />
                </div>
              </div>
            )
          })}
          <div className="items-center hidden lg:flex group">
            <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Enterprise</button>
          </div>

        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center space-x-4 border border-gray-300 rounded-full hover:bg-[#E4EBE4]">
            <div className="flex items-center p-2 rounded-full group-focus:border-2 border-gray-600 hover:bg-[#F7FAF7]">
              <div className="w-5 h-5 mr-1">
                <Search />
              </div>
              <input type="text" className="block w-40 text-sm placeholder-gray-500 bg-transparent focus:outline-none" placeholder="Search" />
            </div>
            <div className="border-l-[1px] border-gray-400 h-5">

            </div>
            <div className="flex items-center p-2 rounded-full hover:bg-[#F7FAF7]">
              <button className="text-sm font-medium text-gray-600">Talent</button>
              <div className="w-3 h-3 ml-1">
                <UpdownArrow />
              </div>
            </div>
          </div>

          <button className="hidden lg:flex text-[14px] font-medium text-[#001200] px-5 py-[10px] rounded-[20px] cursor-pointer">Log In</button>
          <button className="text-[14px] font-medium text-white px-3 py-[10px] rounded-[20px] bg-[#108a00] hover:bg-[#58c754] cursor-pointer">Sign Up</button>
          <button className="flex w-6 h-6 lg:hidden">
            <Search />
          </button>


        </div>
      </div>

      <div className={`w-full px-6 lg:hidden flex flex-col justify-between transition-all duration-500 ease-in-out items-center`}
        style={{
          visibility: isMenu ? "visible" : "hidden",
          height: isMenu ? "150px" : "0",
        }}
      >
        <ButtonWithArrow title="Find Talent" />
        <ButtonWithArrow title="Enterprize" />
        <ButtonWithArrow title="Why Upwork" />
        <ButtonWithArrow title="Enterprize" />
      </div>
      <div className="w-full hidden lg:flex flex-row justify-between items-center h-[64px] p-[24px]">
        <div className="flex items-center gap-4">
          {buttonList.map((index, key) => {
            return (
              <div className="flex items-center group">
                <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]" key={key}>{index}</button>
              </div>)
          })}
          <div className="flex items-center group">
            <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">More</button>
            <div className="w-3 h-3 group-hover:rotate-180">
              <UpdownArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;