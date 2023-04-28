/* eslint-disable @next/next/no-img-element */
import { Cost, Post, Work } from "./SvgList"

export const WorkGame = () => {
    return (
        <div className="flex-col justify-center md:flex md:flex-row md:mx-[120px] mx-10">
            <div className="justify-center w-full md:w-1/2">
                <img className="h-[400px] object-cover w-full mx-auto" src="/img/stairs.gif" alt="" />
            </div>
            <div className="flex flex-col gap-5 pl-8 md:w-1/2">
                <div className="text-[#001e00] text-[40px] font-medium" style={{ "fontFamily": "PT Serif" }}>
                    Up your work game, it&#39;s free
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
    )
}