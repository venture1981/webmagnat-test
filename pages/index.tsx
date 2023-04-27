/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Cost, Post, Star, Whitestar, Work } from "components/SvgList";
import { Stack } from "components/Stack";

export default function HomePage(props: {
  startLoading: Function;
  closeLoading: Function;
  pageLoading: boolean;
}) {
  const jobTitles = [
    "Data Entry Specialist",
    "Vide Editors",
    "Data Analyst",
    "Shopify Developer",
    "Ruby on Rails Developer",
    "Andriod Developer",
    "Bookkeeper",
    "Content Writer",
    "Copywriter",
    "Database Admin",
    "Data Scientist",
    "Front-end developer",
    "Game Developer",
    "Graphic Designer",
    "Javascript Developer",
    "Logo Designer",
    "Mobile App Developer",
    "PHP developer",
    "Python Developer",
    "Resume Writer",
    "SEO Expert",
    "Social Media Manager",
    "Software Developer",
    "Software Engineer",
    "Technical Wroter",
    "UI Designer",
    "UX Designer",
    "Virtual Assistant",
  ];
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
          <div className="md:flex hidden">
            <img src="/img/globe.jpg" className="w-[370px]" alt="" />
          </div>
        </div>
        <div className="md:flex md:flex-row flex-col justify-center">
          <div className="md:w-1/2 w-full justify-center">
            <img className="h-[400px] w-full mx-auto" src="https://media2.giphy.com/media/11xBk5MoWjrYoE/giphy.gif?cid=ecf05e47nkss7ql1551yjybn7oc5i41fk00l1fe1fsl98n8j&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="" />
          </div>
          <div className="pl-8 flex flex-col gap-5">
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
        <div className="grid md:grid-cols-4 grid-cols-2 mx-auto gap-5">
          <Stack skills={"1642"} point={"4.2/5"} title={"Development & IT"} />
          <Stack skills={"432"} point={"4.53/5"} title={"Design & Creative"} />
          <Stack skills={"1642"} point={"4.2/5"} title={"Admin & Customer support"} />
          <Stack skills={"432"} point={"4.53/5"} title={"Finance & Accounting"} />
          <Stack skills={"753"} point={"4.53/5"} title={"Engineering & Architecture"} />
          <Stack skills={"743"} point={"4.2/5"} title={"Legal"} />
          <Stack skills={"753"} point={"4.53/5"} title={"Engineering & Architecture"} />
          <Stack skills={"743"} point={"4.2/5"} title={"Legal"} />
        </div>

        <div className="md:flex md:flex-row flex flex-col mt-7">
          <div className="md:w-3/5 w-full flex flex-col bg-[#13544e] px-4 pt-10 rounded-l-lg pb-7">
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
          <div className="md:w-2/5 w-full order-first md:order-none">
            <img src="/img/hxwn.jpg" className="rounded-r-lg w-full h-full" alt="" />
          </div>
        </div>
        <div className="flex mt-7 w-full relative flex-col px-6">
          <img className="absolute top-0 left-0 -z-[1] bg-cover rounded-lg w-full h-full" src="/img/tal.jpg" alt="" />
          <p className="text-white text-[20px] absolute top-10 left-6">For Client</p>
          <p className="text-white text-[42px] font-bold mt-[180px] leading-8">Find talents</p>
          <p className="text-white text-[42px] font-bold">your way</p>
          <p className="text-white text-[16px] w-[55%]">Work with the largest network of independent professionals and get things done from quick turnarounds to big transformations.</p>
          <div className="md:flex md:flex-row flex flex-col gap-4 justify-around my-10">
            <button className="rounded-lg text-white bg-[#108a00] p-4 flex flex-col md:w-[30%] w-full hover:bg-white hover:text-[#108a00]">
              <p className="font-medium text-[24px] leading-6">Post a job</p>
              <p className="font-medium text-[24px] leading-6">and hire a pro</p>
              <div className="flex md:justify-start justify-end w-full">
                <p className="font-medium text-[14px] mt-5">Talent Marketplace <sup>TM</sup></p>
              </div>
            </button>
            <button className="rounded-lg text-white bg-[#108a00] p-4 flex flex-col md:w-[30%] w-full hover:bg-white hover:text-[#108a00]">
              <p className="font-medium text-[24px] leading-6">Post a job</p>
              <p className="font-medium text-[24px] leading-6">and hire a pro</p>
              <div className="flex md:justify-start justify-end w-full">
                <p className="font-medium text-[14px] mt-5">Talent Marketplace <sup>TM</sup></p>
              </div>

            </button>
            <button className="rounded-lg text-white bg-[#108a00] p-4 flex flex-col md:w-[30%] w-full hover:bg-white hover:text-[#108a00]">
              <p className="font-medium text-[24px] leading-6">Post a job</p>
              <p className="font-medium text-[24px] leading-6">and hire a pro</p>
              <div className="flex md:justify-start justify-end w-full">
                <p className="font-medium text-[14px] mt-5">Talent Marketplace <sup>TM</sup></p>
              </div>

            </button>
          </div>
        </div>
        <div className="flex justify-between py-10">
          <div className="flex flex-col gap-3 w-3/5 bg-[#f2f7f2] py-10 px-5">
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
          <div className="flex flex-row px-3 w-2/5 mx-3 rounded-md  bg-[#108a00] relative">
            <img className="w-[200px] h-[460px] -top-10 -left-[130px] absolute" src="/img/person.png" alt="" />
            <div className="flex flex-col pt-[160px] text-white">
              <p className="text-3xl font-bold">We're the world's work marketplace</p>
              <div className="flex items-center mt-5">
                <div className="w-5 h-5" >

                  <Whitestar />
                </div>
                <div className="ml-2">
                  <p className="text-3xl font-bold">4.9/5</p>
                  <p className="text-sm">Clients rate professionals on Upwork</p>
                </div>
              </div>
              <div className="flex items-center mt-5">
                <div className="w-5 h-5" >

                  <Whitestar />
                </div>
                <div className="ml-2">
                  <p className="text-3xl font-bold">Award winner</p>
                  <p className="text-sm">G2's 2021 best Software Awards</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="md:flex md:flex-row flex flex-col mt-7">
          <div className="md:w-1/2 w-full">
            <img src="/img/woman.jpg" className="rounded-l-lg w-full h-full" alt="" />
          </div>
          <div className="md:w-1/2 w-full flex flex-col bg-[#1f57c3] px-4 pt-10 rounded-r-lg">
            <p className="text-white font-medium text-[20px] leading-4">Find talent</p>
            <p className="text-white font-medium text-[62px] leading-8 mt-5" style={{ fontFamily: "Mirza" }}>Find great</p>
            <p className="text-white font-medium text-[62px] leading-8 mt-5" style={{ fontFamily: "Mirza" }}>work</p>
            <p className="text-white text-[18px] mt-8 pb-[100px] border-b-2 border-white">
              Meet clients you’re excited to work with and take your career or business to new heights.
            </p>
            <div className="flex justify-between">
              <p className="text-white text-[18px] mt-8 pr-5">
                Find opportunities for every stage of your freelance career
              </p>
              <p className="text-white text-[18px] mt-8 pr-5">
                Find opportunities for every stage of your freelance career
              </p>
            </div>
            <div className="flex w-full">
              <p className="text-white text-[18px] ml-5 mt-8 w-1/3">
                Explore different ways to learn
              </p>
            </div>
            <button className="my-5 text-[16px] w-[175px] font-medium bg-white px-5 py-[6px] rounded-[20px] border-[#108a00] border-[1px] text-[#13544e] cursor-pointer">Find opportunities</button>
          </div>
        </div>
        <div className="w-full flex justify-start py-5">
          <p className="text-black text-[62px] w-full md:w-3/5 font-semibold">Trusted by leading brands and startups</p>
        </div>
        <div className="flex w-full gap-4 justify-start overflow-x-auto">
          <div className="flex w-1/2 flex-col gap-3 bg-[#13544e] rounded-md p-3">
            <div className="flex">
              <img src="/img/nasdaq-light.svg" className="w-[200px] h-[30px] ml-4" alt="" />
            </div>
            <p className="text-white text-[20px]">“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”</p>
            <p className="text-white text-[16px]">Josh Machiz, Chief Digital Officer</p>
            <p className="text-white text-[16px] w-full border-b-2 border-white pb-3">Results</p>
            <p className="text-white text-[26px]">Emmy Winning</p>
            <p className="text-white text-[16px]">Facebook watch program</p>
            <p className="text-white text-[26px]">Millions</p>
            <p className="text-white text-[16px]">of impressions generated per client per IPO</p>
          </div>
          <div className="flex w-1/2 flex-col gap-3 bg-[#bc511b] rounded-md p-3">
            <div className="flex">
              <img src="/img/microsoft-lg-light.svg" className="w-[200px] h-[30px] ml-4" alt="" />
            </div>
            <p className="text-white text-[20px]">“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”</p>
            <p className="text-white text-[16px]">Josh Machiz, Chief Digital Officer</p>
            <p className="text-white text-[16px] w-full border-b-2 border-white pb-3">Results</p>
            <p className="text-white text-[26px]">Emmy Winning</p>
            <p className="text-white text-[16px]">Facebook watch program</p>
            <p className="text-white text-[26px]">Millions</p>
            <p className="text-white text-[16px]">of impressions generated per client per IPO</p>
          </div>
          <div className="flex w-1/2 flex-col gap-3 bg-[black] rounded-md p-3">
            <div className="flex">
              <img src="/img/microsoft-lg-light.svg" className="w-[200px] h-[30px] ml-4" alt="" />
            </div>
            <p className="text-white text-[20px]">“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”</p>
            <p className="text-white text-[16px]">Josh Machiz, Chief Digital Officer</p>
            <p className="text-white text-[16px] w-full border-b-2 border-white pb-3">Results</p>
            <p className="text-white text-[26px]">Emmy Winning</p>
            <p className="text-white text-[16px]">Facebook watch program</p>
            <p className="text-white text-[26px]">Millions</p>
            <p className="text-white text-[16px]">of impressions generated per client per IPO</p>
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col justify-between px-5 items-center bg-[]">
          <div className="flex flex-col md:w-2/5 w-full">
            <div className="text-black text-[38px] font-medium mt-10">
              We support Ukraine
            </div>
            <p className="text-[#5e6d55] text-lg">
              We are taking action to help our freelancers, our clients, and the people of Ukraine—and so can you
            </p>
            <button className="my-5 text-[16px] w-[175px] font-medium bg-white px-5 py-[6px] rounded-[20px] border-[#108a00] border-[1px] text-[#13544e] cursor-pointer">Learn more</button>
          </div>
          <div className="flex items-start justify-end md:justify-center w-full ">
            <img src="/img/ukraine-help.svg" className="w-[122px] h-[122px]" alt="" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-around gap-4">
          <div className="flex flex-row md:flex-col gap-3">
            <p className="text-[#14a800] cursor-pointer hover:text-[#14a800] text-[32px] font-semibold">Top skills</p>
            <p className="text-[#d5e0d5] cursor-pointer hover:text-[#14a800] text-[32px] font-semibold">Trending skills</p>
            <p className="text-[#d5e0d5] cursor-pointer hover:text-[#14a800] text-[32px] font-semibold">Top skills in US</p>
            <p className="text-[#d5e0d5] cursor-pointer hover:text-[#14a800] text-[32px] font-semibold">Project catalog</p>
          </div>
          <div className="flex flex-row justify-between mb-10">
            <div className="grid gap-3 sm:grid-cols-2">
              {jobTitles.map((title) => (
                <p key={title} className="text-[#5e6d55] text-[22px]">
                  {title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}