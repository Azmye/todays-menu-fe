import { LandingPageNavbar } from "@/components/navbar";
import { LandingContent, LandingWelcome } from "./sections";

export default function LandingPage() {
  return (
    <>
      <LandingPageNavbar />

      <LandingWelcome />

      <LandingContent />
    </>
  );
}
