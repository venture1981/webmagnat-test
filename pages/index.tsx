/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { errorAlert } from "../components/ToastGroup";
import { Cost, Post, Star, Whitestar, Work } from "components/SvgList";

export default function HomePage(props: {
  startLoading: Function;
  closeLoading: Function;
  pageLoading: boolean;
}) {


  return (
    <>
      <main className="container mx-auto w-full min-h-100vh flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col justify-start">
            <p className=" text-[#14a800] leading-[42px] text-[70px]" style={{ fontFamily: "Mirza" }}>How work<br />should work</p>
            <p className=" text-[#5e6d55] text-[20px] mt-5 leading-7">
              Forget the old rules. You can have the best people.<br />
              Right now. Right here
            </p>
            <button className="mt-5 text-[14px] w-[140px] font-medium text-white px-5 py-[6px] rounded-[20px] bg-[#108a00] hover:bg-[#58c754] cursor-pointer">Get started</button>
            <p className=" text-[#9aaa97] text-[16px] mt-[60px] leading-7">
              Trusted by
            </p>
            <div className="flex gap-3">
              <img className="w-[106px] h-10" src="/img/microsoft.svg" alt="" />
              <img className="w-[82px] h-10" src="/img/airbnb.svg" alt="" />
              <img className="w-[55px] h-10" src="/img/bissell.svg" alt="" />
            </div>
          </div>
          <div>
            <img src="/img/globe.jpg" className="w-[370px]" alt="" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-1/2 justify-center">
            <img className="h-[400px] mx-auto" src="https://media2.giphy.com/media/11xBk5MoWjrYoE/giphy.gif?cid=ecf05e47nkss7ql1551yjybn7oc5i41fk00l1fe1fsl98n8j&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-[#001e00] text-[40px]" style={{ "fontFamily": "Mirza" }}>
              Up your work game, it's free
            </div>
            <div className="flex gap-5">
              <div className="w-6 h-6">
                <Cost />
              </div>
              <div className="flex flex-col">
                <p className="text-[20px] font-medium">No cost to join.</p>
                <p className="text-[14px] font-normal">Register and browse professionals, explore projects, or even book a consultation.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-6 h-6">
                <Post />
              </div>
              <div className="flex flex-col">
                <p className="text-[20px] font-medium">Post a job and hire a top talent.</p>
                <p className="text-[14px] font-normal">Finding talent doesnt have to be a chore. Post a job or we can search for you!</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-6 h-6">
                <Work />
              </div>
              <div className="flex flex-col">
                <p className="text-[20px] font-medium">Work with the best—without breaking the bank.</p>
                <p className="text-[14px] font-normal">Upwork makes it affordable to up your work and take advantage of low transaction rates.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <button className="mt-5 text-[16px] w-[160px] font-medium text-white px-5 py-[6px] rounded-[20px] bg-[#108a00] hover:bg-[#58c754] cursor-pointer">Sign up for free</button>
              <button className="mt-5 text-[16px] w-[175px] font-medium bg-white px-5 py-[6px] rounded-[20px] border-[#108a00] border-[1px] text-[#108a00] cursor-pointer">Learn how to hire</button>
            </div>
          </div>
        </div>
        <div className="flex justify-start flex-col">
          <div className="text-[#001e00] text-[40px]" style={{ "fontFamily": "Mirza" }}>
            Browse talent by category
          </div>
          <p className=" text-[#5e6d55] text-[16px] mt-[10px] leading-7">
            Looking for work?<span className="text-[#108a55] underline cursor-pointer">Broswe jobs</span>
          </p>
        </div>
        <div className="flex mt-[40px] flex-row">
          <div className="w-1/2 flex flex-col gap-10">
            <div className="flex pl-3 flex-col">
              <p className="text-[20px] font-medium">
                Development & IT
              </p>
              <div className="flex gap-5">
                <div className="flex items-center">
                  <div className="w-3 h-3 flex justify-center items-center">
                    <Star />
                  </div>
                  <p className=" text-[#5e6d55] text-[16px]">
                    4.85/5
                  </p>
                </div>
                <p className=" text-[#5e6d55] text-[16px]">
                  1853 skills
                </p>
              </div>
            </div>
            <div className="flex pl-3 flex-col">
              <p className="text-[20px] font-medium">
                Development & IT
              </p>
              <div className="flex gap-5">
                <div className="flex items-center">
                  <div className="w-3 h-3 flex justify-center items-center">
                    <Star />
                  </div>
                  <p className=" text-[#5e6d55] text-[16px]">
                    4.85/5
                  </p>
                </div>
                <p className=" text-[#5e6d55] text-[16px]">
                  1853 skills
                </p>
              </div>
            </div>
            <div className="flex pl-3 flex-col">
              <p className="text-[20px] font-medium">
                Development & IT
              </p>
              <div className="flex gap-5">
                <div className="flex items-center">
                  <div className="w-3 h-3 flex justify-center items-center">
                    <Star />
                  </div>
                  <p className=" text-[#5e6d55] text-[16px]">
                    4.85/5
                  </p>
                </div>
                <p className=" text-[#5e6d55] text-[16px]">
                  1853 skills
                </p>
              </div>
            </div>
            <div className="flex pl-3 flex-col">
              <p className="text-[20px] font-medium">
                Development & IT
              </p>
              <div className="flex gap-5">
                <div className="flex items-center">
                  <div className="w-3 h-3 flex justify-center items-center">
                    <Star />
                  </div>
                  <p className=" text-[#5e6d55] text-[16px]">
                    4.85/5
                  </p>
                </div>
                <p className=" text-[#5e6d55] text-[16px]">
                  1853 skills
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-10">

            <div className="flex pl-3 flex-col">
              <p className="text-[20px] font-medium">
                Development & IT
              </p>
              <div className="flex gap-5">
                <div className="flex items-center">
                  <div className="w-3 h-3 flex justify-center items-center">
                    <Star />
                  </div>
                  <p className=" text-[#5e6d55] text-[16px]">
                    4.85/5
                  </p>
                </div>
                <p className=" text-[#5e6d55] text-[16px]">
                  1853 skills
                </p>
              </div>
            </div>
            <div className="flex pl-3 flex-col">
              <p className="text-[20px] font-medium">
                Development & IT
              </p>
              <div className="flex gap-5">
                <div className="flex items-center">
                  <div className="w-3 h-3 flex justify-center items-center">
                    <Star />
                  </div>
                  <p className=" text-[#5e6d55] text-[16px]">
                    4.85/5
                  </p>
                </div>
                <p className=" text-[#5e6d55] text-[16px]">
                  1853 skills
                </p>
              </div>
            </div>
            <div className="flex pl-3 flex-col">
              <p className="text-[20px] font-medium">
                Development & IT
              </p>
              <div className="flex gap-5">
                <div className="flex items-center">
                  <div className="w-3 h-3 flex justify-center items-center">
                    <Star />
                  </div>
                  <p className=" text-[#5e6d55] text-[16px]">
                    4.85/5
                  </p>
                </div>
                <p className=" text-[#5e6d55] text-[16px]">
                  1853 skills
                </p>
              </div>
            </div>
            <div className="flex pl-3 flex-col">
              <p className="text-[20px] font-medium">
                Development & IT
              </p>
              <div className="flex gap-5">
                <div className="flex items-center">
                  <div className="w-3 h-3 flex justify-center items-center">
                    <Star />
                  </div>
                  <p className=" text-[#5e6d55] text-[16px]">
                    4.85/5
                  </p>
                </div>
                <p className=" text-[#5e6d55] text-[16px]">
                  1853 skills
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="flex mt-7">
          <div className="w-3/5 flex flex-col bg-[#13544e] px-4 pt-10 rounded-l-lg">
            <p className="text-white font-medium text-[20px] leading-4">Enterprise suite</p>
            <p className="text-white font-medium text-[42px] leading-8 mt-5" style={{ fontFamily: "Mirza" }}>This is how</p>
            <p className="text-[#91e6b3] font-medium text-[42px] leading-10" style={{ fontFamily: "Mirza" }}>good companies</p>
            <p className="text-[#91e6b3] font-medium text-[42px] leading-10" style={{ fontFamily: "Mirza" }}>find good company.</p>
            <p className="text-white text-[18px] mt-3">
              Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools. This is how innovation works now.
            </p>
            <div className="flex gap-3 mt-3">
              <div className="w-6 h-6">
                <Cost />
              </div>
              <div className="flex flex-col">
                <p className="text-[16px] text-white font-medium">Access expert talent to fill your skill gaps</p>
              </div>
            </div>
            <div className="flex gap-3 mt-3">
              <div className="w-6 h-6">
                <Post />
              </div>
              <div className="flex flex-col">
                <p className="text-[16px] text-white font-medium">Control your workflow: hire, classify and pay your talent</p>
              </div>
            </div>
            <div className="flex gap-3 mt-3">
              <div className="w-6 h-6">
                <Work />
              </div>
              <div className="flex flex-col">
                <p className="text-[16px] text-white font-medium">Partner with Upwork for end-to-end support</p>
              </div>
            </div>
            <button className="mt-5 text-[16px] w-[175px] font-medium bg-white px-5 py-[6px] rounded-[20px] border-[#108a00] border-[1px] text-[#13544e] cursor-pointer">Learn more</button>
          </div>
          <div className="w-2/5">
            <img src="/img/hxwn.jpg" className="rounded-r-lg" alt="" />
          </div>
        </div>
        <div className="flex mt-7 w-full relative flex-col px-6">
          <img className="absolute top-0 left-0 -z-[1] rounded-lg w-full h-full" src="/img/tal.jpg" alt="" />
          <p className="text-white text-[20px] absolute top-10 left-6">For Client</p>
          <p className="text-white text-[42px] font-bold mt-[180px] leading-8">Find talents</p>
          <p className="text-white text-[42px] font-bold">your way</p>
          <p className="text-white text-[16px] w-[55%]">Work with the largest network of independent professionals and get things done from quick turnarounds to big transformations.</p>
          <div className="flex justify-around my-10">
            <button className="rounded-lg bg-[#108a00] p-4 flex flex-col w-[30%]">
              <p className="text-white font-medium text-[24px] leading-6">Post a job</p>
              <p className="text-white font-medium text-[24px] leading-6">and hire a pro</p>
              <p className="text-white font-medium text-[14px] mt-5">Talent Marketplace <sup>TM</sup></p>
            </button>
            <button className="rounded-lg bg-[#108a00] p-4 flex flex-col w-[30%]">
              <p className="text-white font-medium text-[24px] leading-6">Post a job</p>
              <p className="text-white font-medium text-[24px] leading-6">and hire a pro</p>
              <p className="text-white font-medium text-[14px] mt-5">Talent Marketplace <sup>TM</sup></p>
            </button>
            <button className="rounded-lg bg-[#108a00] p-4 flex flex-col w-[30%]">
              <p className="text-white font-medium text-[24px] leading-6">Post a job</p>
              <p className="text-white font-medium text-[24px] leading-6">and hire a pro</p>
              <p className="text-white font-medium text-[14px] mt-5">Talent Marketplace <sup>TM</sup></p>
            </button>
          </div>
        </div>
        <div className="flex justify-between py-10">
          <div className="flex flex-col gap-3">
            <p className="text-[42px] text-black font-normal leading-[42px]" style={{ fontFamily: "Inter" }}>Why businesses</p>
            <p className="text-[42px] text-black leading-[42px]">turn to Upwork</p>
            <div className="flex mt-3">
              <div className="flex">
                <div className="w-5 h-5">
                  <Cost />
                </div>
                <div className="flex flex-col">
                  <p className="text-[36px] text-black">Proof of quality</p>
                  <p className="text-[16px] text-black"> Check any pros work samples, client reviews, and identity verification.</p>
                </div>
              </div>
            </div>
            <div className="flex mt-3">
              <div className="flex">
                <div className="w-5 h-5">
                  <Cost />
                </div>
                <div className="flex flex-col">
                  <p className="text-[36px] text-black">No cost until you hire</p>
                  <p className="text-[16px] text-black"> Check any pros work samples, client reviews, and identity verification.</p>
                </div>
              </div>
            </div>
            <div className="flex mt-3">
              <div className="flex">
                <div className="w-5 h-5">
                  <Cost />
                </div>
                <div className="flex flex-col">
                  <p className="text-[36px] text-black">Safe and secure</p>
                  <p className="text-[16px] text-black"> Check any pros work samples, client reviews, and identity verification.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-[#108a00] pt-[100px] pb-[50px] px-8 relative">
            <img className="absolute w-full h-full -left-[90%] top-0" src="/img/person.png" alt="" />
            <p className="text-[33px] text-white">We're</p>
            <p className="text-[33px] text-white">the world's</p>
            <p className="text-[33px] text-white">work</p>
            <p className="text-[33px] text-white">marketplace</p>
            <div className="flex">
              <div className="w-5 h-5 mt-3">
                <Whitestar />
              </div>

              <div className="flex flex-col">
                <p className="text-[33px] text-white">4.9/5</p>
                <p className="text-[16px] text-white">Clients rate</p>
                <p className="text-[16px] text-white">professionals on</p>
                <p className="text-[16px] text-white">Upwork</p>
              </div>

            </div>
            <div className="flex">
              <div className="w-5 h-5 mt-3">
                <Whitestar />
              </div>

              <div className="flex flex-col">
                <p className="text-[33px] text-white">Award winner</p>
                <p className="text-[16px] text-white">G2's 2021 best</p>
                <p className="text-[16px] text-white">Software Awards</p>
              </div>

            </div>
          </div>
        </div>
        <div className="flex mt-7">
          <div className="w-1/2">
            <img src="/img/woman.jpg" className="rounded-r-lg" alt="" />
          </div>
          <div className="w-1/2 flex flex-col bg-[#13544e] px-4 pt-10 rounded-l-lg">
            <p className="text-white font-medium text-[20px] leading-4">Find talent</p>
            <p className="text-white font-medium text-[62px] leading-8 mt-5" style={{ fontFamily: "Mirza" }}>Find great</p>
            <p className="text-white font-medium text-[62px] leading-8 mt-5" style={{ fontFamily: "Mirza" }}>work</p>
            <p className="text-white text-[18px] mt-8">
              Meet clients you’re excited to work with and take your career or business to new heights.
            </p>

            <button className="mt-5 text-[16px] w-[175px] font-medium bg-white px-5 py-[6px] rounded-[20px] border-[#108a00] border-[1px] text-[#13544e] cursor-pointer">Find opportunities</button>
          </div>

        </div>
      </main>
    </>
  );
}
