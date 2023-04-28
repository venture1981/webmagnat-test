import { WalletModalButton } from "@solana/wallet-adapter-react-ui";
import { Search, UpdownArrow } from "./SvgList";
import { useState } from "react";
import Head from 'next/head';
interface IHeaderProps { }

const Header = ({ }: IHeaderProps): JSX.Element => {
  const [isMenu, setisMenu] = useState(false);
  return (
    <div className="flex flex-col">
      <Head>
        <title>Upwork | The world's work Marketplace</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex flex-row justify-between items-center h-[64px] p-[24px] border-b border-[#D5E0D5]">
        <div className="flex gap-4 items-center">
          <button className="lg:hidden flex">
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
          <div className="hidden lg:flex items-center group cursor-pointer">
            <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Find Talent</button>
            <div className="w-3 h-3 group-hover:rotate-180">
              <UpdownArrow />
            </div>
          </div>
          <div className="hidden lg:flex items-center group">
            <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Find Upwork</button>
            <div className="w-3 h-3 group-hover:rotate-180">
              <UpdownArrow />
            </div>
          </div>
          <div className="hidden lg:flex items-center group">
            <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Why Upwork</button>
            <div className="w-3 h-3 group-hover:rotate-180">
              <UpdownArrow />
            </div>
          </div>
          <div className="hidden lg:flex items-center group">
            <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Enterprise</button>
          </div>

        </div>
        <div className="flex gap-4 items-center">
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
          <button className="w-6 h-6 lg:hidden flex">
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
        <div className="w-full flex justify-between items-center cursor-pointer">
          <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Find Talent</button>
          <div className="w-3 h-3 group-hover:rotate-180">
            <UpdownArrow />
          </div>
        </div>
        <div className="w-full flex justify-between items-center cursor-pointer">
          <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Enterprize</button>
          <div className="w-3 h-3 group-hover:rotate-180">
            <UpdownArrow />
          </div>
        </div>
        <div className="w-full flex justify-between items-center cursor-pointer">
          <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Why Upwork</button>
          <div className="w-3 h-3 group-hover:rotate-180">
            <UpdownArrow />
          </div>
        </div>
        <div className="w-full flex justify-between items-center cursor-pointer">
          <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Enterprize</button>
          <div className="w-3 h-3 group-hover:rotate-180">
            <UpdownArrow />
          </div>
        </div>
      </div>


      <div className="w-full hidden lg:flex flex-row justify-between items-center h-[64px] p-[24px]">
        <div className="flex gap-4 items-center">
          <div className="flex items-center group">
            <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Development & IT</button>
          </div>
          <div className="flex items-center group">
            <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Design & Creative</button>
          </div>
          <div className="flex items-center group">
            <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Sales & Marketing</button>
          </div>
          <div className="flex items-center group">
            <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Writing & Translation</button>
          </div>
          <div className="flex items-center group">
            <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Admin & Customer Support</button>
          </div>
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