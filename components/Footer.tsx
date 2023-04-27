import { WalletModalButton } from "@solana/wallet-adapter-react-ui";
import { Apple, Cost, Facebook, Instagram, Linkedin, Robot, Search, Twitter, UpdownArrow, Youtube } from "./SvgList";
interface IHeaderProps { }

const Footer = ({ }: IHeaderProps): JSX.Element => {
  return (
    <div className="flex flex-col bg-[#001e00] px-5 rounded-md">
      <div className="flex justify-between">
        <div className="flex flex-col my-10">
          <p className="text-[14px] text-white mb-5">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
        </div>
        <div className="flex flex-col my-10">
          <p className="text-[14px] text-white mb-5">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
        </div>
        <div className="flex flex-col my-10">
          <p className="text-[14px] text-white mb-5">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
        </div>
        <div className="flex flex-col my-10">
          <p className="text-[14px] text-white mb-5">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
          <p className="text-[14px] text-white">For Clients</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="text-[14px] text-white font-bold">Follow us</p>
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-3 border-white border-[1px]">
            <Facebook />
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-3 border-white border-[1px]">
            <Linkedin />
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-3 border-white border-[1px]">
            <Twitter />
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-3 border-white border-[1px]">
            <Youtube />
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-3 border-white border-[1px]">
            <Instagram />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-[14px] text-white font-bold">Mobile App</p>
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-3 border-white border-[1px]">
            <Apple />
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-3 border-white border-[1px]">
            <Robot />
          </div>

        </div>
      </div>
      <div className="w-full border-t-2 border-[white] mt-4 mb-6">
      </div>
      <div className="flex justify-start mb-10">
        <div className="flex flex-col">
          <p className="text-[14px] text-white font-medium">© 2015 - 2023 Upwork®</p>
          <p className="text-[14px] text-white font-medium">Global Inc.</p>
        </div>
        <div className="flex ml-10">
          <p className="text-[14px] text-white font-medium">Terms of service</p>
          <p className="text-[14px] text-white font-medium">Privacy Policy</p>
          <p className="text-[14px] text-white font-medium">CA Notice at Collection</p>
          <p className="text-[14px] text-white font-medium">Cookie Settings</p>
          <p className="text-[14px] text-white font-medium">Accessibility</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
