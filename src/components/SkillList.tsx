import { JOB_TITLES, SKILLS } from "@/config"

export const SkillList = () => {
    return (
        <div className="flex flex-col justify-around gap-4 md:flex-row">
            <div className="flex flex-row gap-3 md:flex-col">
                {SKILLS.map((index, key) => {
                    return (
                        <p className="text-[#d5e0d5] cursor-pointer hover:text-[#14a800] text-[18px] md:text-[32px] font-semibold" key={key}>{index}</p>
                    )
                })}
            </div>
            <div className="flex flex-row justify-between mb-10">
                <div className="grid gap-3 sm:grid-cols-2">
                    {JOB_TITLES.map((title) => (
                        <p key={title} className="text-[#5e6d55] text-[22px]">
                            {title}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}