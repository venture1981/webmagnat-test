import React from 'react';
import { UpdownArrow } from './SvgList';

interface Props {
    title: string;
}

export const ButtonWithArrow: React.FC<Props> = ({ title }) => (
    <div className="flex items-center justify-between w-full cursor-pointer">
        <button className="p-[10px] pr-0 text-[14px] font-medium text-[#001200] hover:text-[#14a800]">{title}</button>
        <div className="w-3 h-3 group-hover:rotate-180">
            <UpdownArrow />
        </div>
    </div>
);
