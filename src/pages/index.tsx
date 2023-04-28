/* eslint-disable @next/next/no-img-element */

import { Enterprize } from "@/components/Enterprize";
import { FindGreatWork } from "@/components/FindGreatWork";
import { FindTalents } from "@/components/FindTalents";
import { Intro } from "@/components/Intro";
import { SkillList } from "@/components/SkillList";
import { Stack } from "@/components/Stack";
import { Cost, Post, Whitestar, Work } from "@/components/SvgList";
import { TalentBrowse } from "@/components/TalentBrowse";
import TrustSlider from "@/components/TrustSlider";
import { TrustedBy } from "@/components/TrustedBy";
import { Ukraine } from "@/components/Ukraine";
import { WhyBusiness } from "@/components/WhyBusiness";
import { WorkGame } from "@/components/WorkGame";
import { BUTTONS, JOB_TITLES, SKILLS } from "@/config";

export default function HomePage(props: {
  startLoading: Function;
  closeLoading: Function;
  pageLoading: boolean;
}) {
  return (
    <>
      <main className="container mx-auto px-4 md:px-10 w-full min-h-100vh flex flex-col mt-[120px]">
        <Intro />
        <WorkGame />
        <TalentBrowse />
        <Enterprize />
        <FindTalents />
        <WhyBusiness />
        <FindGreatWork />
        <TrustedBy />
        <TrustSlider />
        <Ukraine />
        <SkillList />
      </main>
    </>
  );
}