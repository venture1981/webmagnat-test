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
    <div className="flex flex-col bg-[#001e00] p-5 mx-4 md:mx-10 mt-10 rounded-md">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="md:flex flex-col flex md:justify-start justify-between  border-b-[1px] border-white md:border-none md:pb-5 pb-0">
          <div className="flex flex-row justify-between my-5 transition-all duration-500 ease-in-out cursor-pointer md:flex md:flex-col md:border-none"
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
          <div className="mx-5 overflow-hidden transition-all duration-500 ease-in-out opacity-100 md:flex md:flex-col"
            style={{
              height: isList ? "250px" : "0"
            }}
          >
            {list.map((index, key) => {
              return (
                <p className="text-[14px] text-white hover:underline cursor-pointer" key={key}>{index}</p>
              )
            })}

          </div>

        </div>

        <div className="md:flex flex-col flex transition-all duration-500 ease-in-out md:justify-start justify-between  border-b-[1px] border-white md:border-none md:pb-5 pb-0">
          <div className="flex flex-row justify-between my-5 cursor-pointer md:flex md:flex-col"
            onClick={() => {
              setIsList1(!isList1);
            }}
          >
            <p className="text-[14px] mx-5 text-white">For Talent</p>
            <div className={`w-6 h-6 flex group-hover:rotate-180 md:hidden ${isList1 ? 'rotate-180' : ''}`}>
              <UpdownArrowwhite />
            </div>
          </div>
          <div className="mx-5 overflow-hidden transition-all duration-500 ease-in-out opacity-100 md:flex md:flex-col"
            style={{
              height: isList1 ? "100px" : "0"
            }}
          >
            <p className="text-[14px] text-white hover:underline cursor-pointer">How to find work</p>
            <p className="text-[14px] text-white hover:underline cursor-pointer">Direct Contracts</p>
            <p className="text-[14px] text-white hover:underline cursor-pointer">Find Freelance</p>
            <p className="text-[14px] text-white hover:underline cursor-pointer">Find Freelance jobs</p>
          </div>

        </div>
        <div className="md:flex flex-col flex md:justify-start justify-between border-b-[1px] border-white md:border-none md:pb-5 pb-0 overflow-hidden">
          <div
            className="flex flex-row justify-between my-5 transition-all duration-500 ease-in-out cursor-pointer md:flex md:flex-col"
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

          <div className="mx-5 overflow-hidden transition-all duration-500 ease-in-out opacity-100 md:flex md:flex-col"
            style={{
              height: isList2 ? "200px" : "0"
            }}
          >
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

        </div>

        <div className="md:flex flex-col flex md:justify-start justify-between  border-b-[1px] border-white md:border-none md:pb-5 pb-0">
          <div className="flex flex-row justify-between my-5 transition-all duration-500 ease-in-out cursor-pointer md:flex md:flex-col"
            onClick={() => {
              setIsList3(!isList3);
            }}
          >
            <p className="text-[14px] mx-5 text-white">Company</p>
            <div className={`w-6 h-6 flex group-hover:rotate-180 md:hidden ${isList3 ? 'rotate-180' : ''}`}>
              <UpdownArrowwhite />
            </div>
          </div>
          <div className="mx-5 overflow-hidden transition-all duration-500 ease-in-out opacity-100 md:flex md:flex-col"
            style={{
              height: isList3 ? "220px" : "0"
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
      <div className="flex flex-col items-start justify-between gap-5 py-5 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:flex-row">
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
        <div className="flex flex-col items-center gap-2 md:flex-row">
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
      <div className="flex flex-col justify-between gap-4 my-10 md:flex-row">
        <div className="flex flex-col gap-4">
          <p className="text-[14px] text-white font-medium">© 2015 - 2023 Upwork®</p>
          <p className="text-[14px] text-white font-medium">Global Inc.</p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
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
