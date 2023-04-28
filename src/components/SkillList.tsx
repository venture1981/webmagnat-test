import { TOP_SKILLS, US_SKILLS, CATALOG, TRENDING_SKILLS, SKILLS } from "@/config"
import { useEffect, useState } from "react"
export const SkillList = () => {
    const [selectedSkill, setSelectedSkill] = useState(0);
    const [data, setData] = useState<string[]>([]);
    useEffect(() => {
        if (selectedSkill === 0) {
            setData(TOP_SKILLS);
        } else if (selectedSkill === 1) {
            setData(TRENDING_SKILLS);
        } else if (selectedSkill === 2) {
            setData(US_SKILLS);
        } else if (selectedSkill === 3) {
            setData(CATALOG);
        }

    }, [selectedSkill])
    return (
        <div className="flex flex-col justify-around gap-4 md:flex-row">
            <div className="flex flex-row gap-3 md:flex-col">
                {SKILLS.map((index, key) => {
                    return (
                        <button className="text-[#d5e0d5] cursor-pointer hover:text-[#14a800] text-[18px] md:text-[32px] font-semibold" key={key}
                            onClick={() => {
                                setSelectedSkill(key);
                            }}
                        >{index}</button>
                    )
                })}
            </div>
            <div className="flex flex-row justify-between mb-10">
                <div className="grid gap-3 sm:grid-cols-2">
                    {data.map((title, key) =>
                    (
                        <p key={key} className="text-[#5e6d55] text-[22px]">
                            {title}
                        </p>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}