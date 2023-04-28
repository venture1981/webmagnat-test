/* eslint-disable @next/next/no-img-element */
export const Intro = () => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col justify-start">
                <p className=" text-[#14a800] leading-[70px] text-[70px]" style={{ fontFamily: "PT Serif" }}>How work<br />should work</p>
                <p className=" text-[#5e6d55] text-[20px] mt-5 leading-7">
                    Forget the old rules. You can have the best people.<br />
                    Right now. Right here
                </p>
                <button className="mt-5 text-[14px] w-[140px] font-medium text-white px-5 py-[6px] rounded-[20px] bg-[#108a00] hover:bg-[#58c754] cursor-pointer">Get started</button>
                <p className=" text-[#9aaa97] text-[16px] mt-[60px] leading-7">
                    Trusted by
                </p>
                <div className="flex gap-3 mb-4">
                    <img className="w-[106px] h-10" src="/img/microsoft.svg" alt="" />
                    <img className="w-[82px] h-10" src="/img/airbnb.svg" alt="" />
                    <img className="w-[55px] h-10" src="/img/bissell.svg" alt="" />
                </div>
            </div>
            <div className="hidden md:flex">
                <img src="/img/globe.jpg" className="w-[440px] h-[440px] object-contain" alt="" />
            </div>
        </div>
    )
}