"use client";
import { ReactNode } from "react";
import { HeaderSubTitle } from "@/components/onboarding_elements/one/header.subtitle";

interface OnboardingPage {
  title?: string;
  subTitle?: string;
  description?: ReactNode | JSX.Element;
  textTransform?:boolean
}

export interface DesktopOnboardingPagesType {
  "/onboarding/pcr/sign-up": OnboardingPage;
  "/onboarding/pcr/pull-report": OnboardingPage;
  "/onboarding/pcr/meeting": OnboardingPage;
  "/onboarding/pcr/plans": OnboardingPage;
  "/onboarding/pcr/docs-upload": OnboardingPage;
  "/onboarding/pcr/pf": OnboardingPage;
}

export const DesktopOnboardingPages: DesktopOnboardingPagesType = {
  "/onboarding/pcr/sign-up": {
    title: "Create your TGIScaleme account now!",
    description: <HeaderSubTitle />,
  },
  "/onboarding/pcr/pull-report": {
    title: "Get credit report",
    description: <HeaderSubTitle />,
  },
  "/onboarding/pcr/meeting": {
    title: "Get Started by Scheduling your Free Credit Consultation.",
    description: <HeaderSubTitle />,
  },
  "/onboarding/pcr/plans": {
    title: "TGI Scale Me",
    subTitle: "invites you to embark on your credit scaling journey today",
    textTransform: true,
    description: <HeaderSubTitle />,
  },
  "/onboarding/pcr/docs-upload": {
    title: "Upload your Verification Documents",
    description: <HeaderSubTitle />,
  },
  "/onboarding/pcr/pf": {
    title: "Freeze Or Make Your Positive Account !",
    description: <HeaderSubTitle />,
  },
};
