import { Stack } from "./Stack"

export const TalentBrowse = () => {
    return (
        <div>

            <div className="flex flex-col justify-start mt-10">
                <div className="text-[#001e00] text-[40px]" style={{ "fontFamily": "PT Serif" }}>
                    Browse talent by category
                </div>
                <p className=" text-[#5e6d55] text-[16px] mt-[10px] leading-7">
                    Looking for work?<span className="text-[#108a55] underline cursor-pointer">Broswe jobs</span>
                </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-5 mx-auto lg:grid-cols-4 md:grid-cols-2">
                <Stack skills={"1642"} point={"4.2/5"} title={"Development & IT"} />
                <Stack skills={"432"} point={"4.53/5"} title={"Design & Creative"} />
                <Stack skills={"1642"} point={"4.2/5"} title={"Admin & Customer support"} />
                <Stack skills={"432"} point={"4.53/5"} title={"Finance & Accounting"} />
                <Stack skills={"753"} point={"4.53/5"} title={"Engineering & Architecture"} />
                <Stack skills={"743"} point={"4.2/5"} title={"Legal"} />
                <Stack skills={"753"} point={"4.53/5"} title={"Engineering & Architecture"} />
                <Stack skills={"743"} point={"4.2/5"} title={"Legal"} />
            </div>
        </div>
    )
}