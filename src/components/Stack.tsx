import { Star } from "./SvgList"

export const Stack = (props: { title: string, point: string, skills: string }) => {
    return (
        <div className="flex pl-3 flex-col  cursor-pointer hover:bg-[#eef1ee] w-[255px] h-[135px] items-center pt-8 gap-2">
            <p className="text-[20px] font-medium">
                {props.title}
            </p>
            <div className="flex gap-5">
                <div className="flex items-center">
                    <div className="flex items-center justify-center w-3 h-3">
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