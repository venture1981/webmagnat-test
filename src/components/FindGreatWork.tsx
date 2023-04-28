/* eslint-disable @next/next/no-img-element */
export const FindGreatWork = () => {
    return (
        <div className="flex flex-col md:flex md:flex-row mt-7">
            <div className="w-full md:w-1/2">
                <img src="/img/woman.jpg" className="object-cover w-full h-full rounded-l-lg " alt="" />
            </div>
            <div className="md:w-1/2 w-full flex flex-col bg-[#1f57c3] px-4 pt-10 rounded-r-lg">
                <p className="text-white font-medium text-[62px] leading-8 mt-5" style={{ fontFamily: "PT Serif" }}>Find great</p>
                <p className="text-white font-medium text-[62px] leading-8 mt-5" style={{ fontFamily: "PT Serif" }}>work</p>
                <div className="text-white text-[18px] mt-8 pb-[150px] border-b-2 border-white ">
                    <div className="w-3/5">
                        Meet clients you&#39;re excited to work with and take your career or business to new heights.
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="text-white text-[18px] mt-8 pr-5 w-1/3">
                        Find opportunities for every stage of your freelance career
                    </p>
                    <p className="text-white text-[18px] mt-8 pr-5 w-1/3">
                        Find opportunities for every stage of your freelance career
                    </p>
                    <p className="text-white text-[18px] ml-5 mt-8 w-1/3">
                        Explore different ways to learn
                    </p>
                </div>
                <button className="my-7 text-[16px] w-[175px] font-medium bg-white px-5 py-[6px] rounded-[20px] border-[#108a00] border-[1px] text-[#13544e] cursor-pointer">Find opportunities</button>
            </div>
        </div>
    )
}