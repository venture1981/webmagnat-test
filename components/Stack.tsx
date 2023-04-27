import { Star } from "./SvgList"

export const Stack = (props: { title, point, skills }) => {
    return (
        <div className="flex pl-3 flex-col bg-[#f0f5f0] cursor-pointer hover:bg-[#b6b8b6] w-[255px] h-[135px] items-center pt-8 gap-2">
            <p className="text-[20px] font-medium">
                {props.title}
            </p>
            <div className="flex gap-5">
                <div className="flex items-center">
                    <div className="w-3 h-3 flex justify-center items-center">
                        <Star />
                    </div>
                    <p className=" text-[#5e6d55] text-[16px]">
                        {props.point}
                    </p>
                </div>
                <p className=" text-[#5e6d55] text-[16px]">
                    {props.skills} skills
                </p>
            </div>
        </div>
    )
}