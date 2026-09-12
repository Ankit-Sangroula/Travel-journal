import { MapPinCheckInside } from "lucide-react";
export default function Entry(props) {
  return (
    <div>
      <div className="flex p-10 gap-6">
        <img
          src={props.entry.img.src}
          alt={props.entry.img.alt} 
          className="h-[204px] w-[152px] object-cover rounded-md"
        />
        <div className="px-5">
          <div className="">
            <span className="pr-4 inline-flex items-center gap-1">
              <MapPinCheckInside size={14} />
              {props.entry.country}
            </span>
            <a href={props.entry.googleMapsLink} className="underline">
              View on Google Maps
            </a>
          </div>
          <h1 className="text-3xl font-bold">{props.entry.title}</h1>
          <p className="font-bold mt-5">{props.entry.date}</p>
          <p className="mt-2 leading-5">{props.entry.text}</p>
        </div>
      </div>
    </div>
  );
}
