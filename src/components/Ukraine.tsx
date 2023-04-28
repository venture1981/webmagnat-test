/* eslint-disable @next/next/no-img-element */
export const Ukraine = () => {
    return (
        <div className="w-full flex md:flex-row flex-col justify-between px-5 items-center bg-[]">
            <div className="flex flex-col w-full md:w-2/5">
                <div className="text-black text-[38px] font-medium mt-10">
                    We support Ukraine
                </div>
                <p className="text-[#5e6d55] text-lg">
                    We are taking action to help our freelancers, our clients, and the people of Ukraine—and so can you
                </p>
                <button className="my-5 text-[16px] w-[175px] font-medium bg-white px-5 py-[6px] rounded-[20px] border-[#108a00] border-[1px] text-[#13544e] cursor-pointer">Learn more</button>
            </div>
            <div className="flex items-start justify-end w-full md:justify-center ">
                <img src="/img/ukraine-help.svg" className="w-[122px] h-[122px]" alt="" />
            </div>
        </div>
    )
}