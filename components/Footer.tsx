import { WalletModalButton } from "@solana/wallet-adapter-react-ui";
import { Apple, Cost, Facebook, Instagram, Linkedin, Robot, Search, Twitter, UpdownArrow, UpdownArrowwhite, Youtube } from "./SvgList";
import { useState } from "react";
interface IHeaderProps { }

const Footer = ({ }: IHeaderProps): JSX.Element => {
  const [isList, setIsList] = useState(true);
  const [isList1, setIsList1] = useState(true);
  const [isList2, setIsList2] = useState(true);
  const [isList3, setIsList3] = useState(true);
  const list = [
    "For Clients",
    "How to hire",
    "Talent Marketplace",
    "Project Catalog",
    "Talent Scout",
    "Hire an Agency",
    "Enterprise",
    "Payroll Services",
    "Direct Contracts",
    "Hire Worldwide",
    "Hire in the USA"
  ]
  return (
    <div className="flex flex-col bg-[#001e00] p-5 container mx-auto rounded-md">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="md:flex flex-col flex md:justify-start justify-between  border-b-[1px] border-white md:border-none md:pb-5 pb-0">
          <div className="md:flex md:flex-col transition-all duration-500 ease-in-out justify-between cursor-pointer flex flex-row my-5 md:border-none"
            onClick={() => {
              if (window.innerWidth < 1024) {
                setIsList(!isList);

              } else {

              }
            }}
          >
            <p className="text-[14px] mx-5 text-white">For Clients</p>
            <div className={`w-6 h-6 flex group-hover:rotate-180 md:hidden ${isList ? 'rotate-180' : ''}`}>
              <UpdownArrowwhite />
            </div>
          </div>
          {
            isList &&
            <div className="md:flex md:flex-col mx-5 transition-all duration-500 ease-in-out opacity-100">
              {list.map((index) => {
                return (
                  <p className="text-[14px] text-white hover:underline cursor-pointer">{index}</p>
                )
              })}

            </div>
          }
        </div>

        <div className="md:flex flex-col flex transition-all duration-500 ease-in-out md:justify-start justify-between  border-b-[1px] border-white md:border-none md:pb-5 pb-0">
          <div className="md:flex md:flex-col justify-between cursor-pointer flex flex-row my-5"
            onClick={() => {
              setIsList1(!isList1);
            }}
          >
            <p className="text-[14px] mx-5 text-white">For Talent</p>
            <div className={`w-6 h-6 flex group-hover:rotate-180 md:hidden ${isList1 ? 'rotate-180' : ''}`}>
              <UpdownArrowwhite />
            </div>
          </div>
          {
            isList1 &&
            <div className="md:flex md:flex-col mx-5 transition-all duration-500 ease-in-out opacity-100">
              <p className="text-[14px] text-white hover:underline cursor-pointer">How to find work</p>
              <p className="text-[14px] text-white hover:underline cursor-pointer">Direct Contracts</p>
              <p className="text-[14px] text-white hover:underline cursor-pointer">Find Freelance</p>
              <p className="text-[14px] text-white hover:underline cursor-pointer">Find Freelance jobs</p>
            </div>
          }
        </div>
        <div className="md:flex flex-col flex md:justify-start justify-between border-b-[1px] border-white md:border-none md:pb-5 pb-0 overflow-hidden">
          <div
            className="md:flex md:flex-col transition-all duration-500 ease-in-out justify-between cursor-pointer flex flex-row my-5"
            onClick={() => {
              setIsList2(!isList2);
            }}
          >
            <p className="text-[14px] mx-5 text-white">Resources</p>
            <div
              className={`w-6 h-6 flex group-hover:rotate-180 md:hidden ${isList2 ? "rotate-180" : ""
                }`}
            >
              <UpdownArrowwhite />
            </div>
          </div>

          {isList2 && (
            <div className="md:flex md:flex-col mx-5 transition-all duration-500 ease-in-out opacity-100">
              <p className="text-[14px] text-white hover:underline cursor-pointer">
                Help & Support
              </p>
              <p className="text-[14px] text-white hover:underline cursor-pointer">
                Success Stories
              </p>
              <p className="text-[14px] text-white hover:underline cursor-pointer">
                Upwork Review
              </p>
              <p className="text-[14px] text-white hover:underline cursor-pointer">
                Resources
              </p>
              <p className="text-[14px] text-white hover:underline cursor-pointer">
                Blog
              </p>
              <p className="text-[14px] text-white hover:underline cursor-pointer">
                Community
              </p>
              <p className="text-[14px] text-white hover:underline cursor-pointer">
                Program
              </p>
              <p className="text-[14px] text-white hover:underline cursor-pointer">
                Free Business
              </p>
            </div>
          )}
        </div>

        <div className="md:flex flex-col flex md:justify-start justify-between  border-b-[1px] border-white md:border-none md:pb-5 pb-0">
          <div className="md:flex md:flex-col transition-all duration-500 ease-in-out justify-between cursor-pointer flex flex-row my-5"
            onClick={() => {
              setIsList3(!isList3);
            }}
          >
            <p className="text-[14px] mx-5 text-white">Company</p>
            <div className={`w-6 h-6 flex group-hover:rotate-180 md:hidden ${isList3 ? 'rotate-180' : ''}`}>
              <UpdownArrowwhite />
            </div>
          </div>
          <div className="md:flex md:flex-col mx-5 transition-all duration-500 ease-in-out opacity-100 overflow-hidden"
            style={{
              height: isList3 ? "400px" : "0"
            }}
          >
            <p className="text-[14px] text-white hover:underline cursor-pointer">About Us</p>
            <p className="text-[14px] text-white hover:underline cursor-pointer">Leadership</p>
            <p className="text-[14px] text-white hover:underline cursor-pointer">Investor Relations</p>
            <p className="text-[14px] text-white hover:underline cursor-pointer">Careers</p>
            <p className="text-[14px] text-white hover:underline cursor-pointer">Our Impact</p>
            <p className="text-[14px] text-white hover:underline cursor-pointer">Press</p>
            <p className="text-[14px] text-white hover:underline cursor-pointer">Contract Us</p>
            <p className="text-[14px] text-white hover:underline cursor-pointer">Trust,Safety & Security</p>
            <p className="text-[14px] text-white hover:underline cursor-pointer">Modern Slavery Statement</p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-start gap-5 py-5">
        <div className="flex md:flex-row flex-col gap-2 items-center">
          <p className="text-[14px] text-white font-bold">Follow us</p>
          <div className="flex gap-3">
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-3 border-white border-[1px]  cursor-pointer">
              <Facebook />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-3 border-white border-[1px]  cursor-pointer">
              <Linkedin />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-3 border-white border-[1px]  cursor-pointer">
              <Twitter />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-3 border-white border-[1px]  cursor-pointer">
              <Youtube />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-3 border-white border-[1px]  cursor-pointer">
              <Instagram />
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center md:flex-row flex-col">
          <p className="text-[14px] text-white font-bold">Mobile App</p>
          <div className="flex gap-3">
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-3 border-white border-[1px] cursor-pointer">
              <Apple />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-3 border-white border-[1px] cursor-pointer">
              <Robot />
            </div>
          </div>

        </div>
      </div>
      <div className="w-full border-t-[1px] border-[white] mt-4 mb-2">
      </div>
      <div className="flex md:flex-row flex-col justify-between my-10  gap-4">
        <div className="flex flex-col  gap-4">
          <p className="text-[14px] text-white font-medium">© 2015 - 2023 Upwork®</p>
          <p className="text-[14px] text-white font-medium">Global Inc.</p>
        </div>
        <div className="flex md:flex-row flex-col gap-4">
          <p className="text-[14px] text-white font-medium cursor-pointer">Terms of service</p>
          <p className="text-[14px] text-white font-medium cursor-pointer">Privacy Policy</p>
          <p className="text-[14px] text-white font-medium cursor-pointer">CA Notice at Collection</p>
          <p className="text-[14px] text-white font-medium cursor-pointer">Cookie Settings</p>
          <p className="text-[14px] text-white font-medium cursor-pointer">Accessibility</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
