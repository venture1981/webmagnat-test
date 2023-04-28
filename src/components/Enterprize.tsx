/* eslint-disable @next/next/no-img-element */
import { Cost, Post, Work } from "./SvgList"

export const Enterprize = () => {
    return (
        <div className="flex flex-col md:flex md:flex-row mt-7">
            <div className="md:w-3/5 w-full flex flex-col bg-[#13544e] px-4 pt-10 rounded-l-lg pb-7">
                <p className="text-white font-medium text-[20px] leading-5">Enterprise suite</p>
                <p className="text-white font-medium text-[42px] leading-10 mt-5 lg:mt-10" style={{ fontFamily: "PT Serif" }}>This is how</p>
                <p className="text-[#91e6b3] font-medium text-[42px] leading-10 lg:mt-4" style={{ fontFamily: "PT Serif" }}>good companies</p>
                <p className="text-[#91e6b3] font-medium text-[42px] leading-10 lg:mt-4" style={{ fontFamily: "PT Serif" }}>find good company.</p>
                <p className="text-white text-[18px] mt-3 lg:mt-6">
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
                <button className="mt-5 text-[16px] w-[175px] lg:mt-10 font-medium bg-white px-5 py-[6px] rounded-[20px] border-[#108a00] border-[1px] text-[#13544e] cursor-pointer">Learn more</button>
            </div>
            <div className="order-first w-full md:w-2/5 md:order-none">
                <img src="/img/hxwn.jpg" className="object-cover w-full h-full rounded-r-lg " alt="" />
            </div>
        </div>
    )
}