import Header from "./components/Header";
import mountain from "./assets/mountain.png";

export default function Hero() {
  return (
    <div>
      <Header />
      <div className="flex">
        <img src={mountain} alt="" />
        <div className="px-5">
          <div className="justify-content">
            <span>JAPAN</span>
            <a href="">View on Google Maps</a>
          </div>
          <h1>Mount Fuji</h1>
          <p>12 Jan, 2021-24 Jan, 2021</p>
          <p>
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
