import Image from "next/image";

import {
  MarqueeEmployeeSlider,
  MarqueeHouseSlider,
} from "./components/MarqueeSlider";

export default function HomePage() {
  return (
    <>
      <MarqueeHouseSlider />
      <MarqueeEmployeeSlider />
    </>
  );
}
