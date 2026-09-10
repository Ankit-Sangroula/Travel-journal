import Header from "./components/Header";
import mountain from "./assets/mountain.png";

export default function Hero() {
  return (
    <div>
      <Header />
      <div className="flex p-10 gap-6">
        <img src={mountain} alt="mountain" className="h-[204px] w-[152px] object-cover rounded-md" />
        <div className="px-5">
          <div className="">
            <span className="pr-4">JAPAN</span>
            <a href="">View on Google Maps</a>
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
