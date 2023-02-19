import Image from "next/image";

import {
  MarqueeEmployeeSlider,
  MarqueeHouseSlider,
} from "../components/MarqueeSlider";

export default function HomePage() {
  return (
    <main className="pb-60">
      <h1 className="text-red-200">hello</h1>
      <MarqueeHouseSlider />
      <div className="w-full my-80">padding</div>
      <MarqueeEmployeeSlider />
    </main>
  );
}
