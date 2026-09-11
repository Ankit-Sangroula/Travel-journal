import Header from "./components/Header";
import mountain from "./assets/mountain.png";
import { MapPinCheckInside } from "lucide-react";

export default function Hero() {
  return (
    <div>
      <Header />
      <div className="flex p-10 gap-6">
        <img
          src={mountain}
          alt="mountain"
          className="h-[204px] w-[152px] object-cover rounded-md"
        />
        <div className="px-5">
          <div className="">
            <span className="pr-4 inline-flex items-center gap-1">
              <MapPinCheckInside size={14} />
              JAPAN
            </span>
            <a
              href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
              className="underline"
            >
              View on Google Maps
            </a>
          </div>
          <h1 className="text-3xl font-bold">Mount Fuji</h1>
          <p className="font-bold mt-5">12 Jan, 2021-24 Jan, 2021</p>
          <p className="mt-2 leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi
            explicabo exercitationem temporibus in. Dolore labore nobis quod ex
            asperiores debitis perferendis corrupti eveniet itaque sequi
            excepturi, vero cupiditate reprehenderit?
          </p>
        </div>
      </div>
    </div>
  );
}
