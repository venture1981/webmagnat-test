/* eslint-disable @next/next/no-img-element */

import { Enterprize } from "@/components/Enterprize";
import { FindGreatWork } from "@/components/FindGreatWork";
import { FindTalents } from "@/components/FindTalents";
import { Intro } from "@/components/Intro";
import { SkillList } from "@/components/SkillList";
import { TalentBrowse } from "@/components/TalentBrowse";
import TrustSlider from "@/components/TrustSlider";
import { TrustedBy } from "@/components/TrustedBy";
import { Ukraine } from "@/components/Ukraine";
import { WhyBusiness } from "@/components/WhyBusiness";
import { WorkGame } from "@/components/WorkGame";

export default function HomePage(props: {
  startLoading: Function;
  closeLoading: Function;
  pageLoading: boolean;
}) {
  return (
    <>
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
    </>
  );
}