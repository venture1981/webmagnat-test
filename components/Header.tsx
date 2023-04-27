import { WalletModalButton } from "@solana/wallet-adapter-react-ui";
import { Search, UpdownArrow } from "./SvgList";
interface IHeaderProps { }

const Header = ({ }: IHeaderProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row justify-between items-center h-[64px] p-[24px] border-b border-[#969696]">
        <div className="flex gap-4 items-center">
          <button className="w-[82px] h-[22px]">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Upwork_Logo.svg" alt="" />
          </button>
          <div className="flex items-center group">
            <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Find Talent</button>
            <div className="w-3 h-3 group-hover:rotate-180">
              <UpdownArrow />
            </div>
          </div>
          <div className="flex items-center group">
            <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Find Upwork</button>
            <div className="w-3 h-3 group-hover:rotate-180">
              <UpdownArrow />
            </div>
          </div>
          <div className="flex items-center group">
            <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Why Upwork</button>
            <div className="w-3 h-3 group-hover:rotate-180">
              <UpdownArrow />
            </div>
          </div>
          <div className="flex items-center group">
            <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">Enterprise</button>
            <div className="w-3 h-3 group-hover:rotate-180">
              <UpdownArrow />
            </div>
          </div>

        </div>
        <div className="flex gap-4 items-center">
          <div className="flex border-[#e4ebe4] border-[2px] rounded-[20px]">
            <div className="flex items-center group-focus:border-[3px] border-[#969696] rounded-[20px]">
              <div className="w-5 h-5 ml-1">
                <Search />
              </div>
              <input type="text" name="" id="" className=" ml-1 w-[230px] text-[14px] placeholder:text-[#001200] block bg-white py-2  focus:outline-none focus:border-[#a5aca5] sm:text-sm group" value={""} placeholder="Search" />
            </div>
            <div className="border-l-2 border-[#e4ebe4]"></div>
            <div className="flex items-center group mr-2 rounded-[20px]">
              <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800] mr-1">Talent</button>
              <div className="w-3 h-3 group-hover:rotate-180">
                <UpdownArrow />
              </div>
            </div>
          </div>
          <button className="text-[14px] font-medium text-[#001200] px-5 py-[10px] rounded-[20px] cursor-pointer">Log In</button>
          <button className="text-[14px] font-medium text-white px-5 py-[10px] rounded-[20px] bg-[#108a00] hover:bg-[#58c754] cursor-pointer">Sign Up</button>

        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center h-[64px] p-[24px]">
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
