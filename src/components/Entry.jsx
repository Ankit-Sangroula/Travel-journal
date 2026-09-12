import { MapPinCheckInside } from "lucide-react";
export default function Entry(props){

    return(
        <div>
            <div className="flex p-10 gap-6">
        <img
          src={props.img.src}
          alt={props.img.alt}
          className="h-[204px] w-[152px] object-cover rounded-md"
        />
        <div className="px-5">
          <div className="">
            <span className="pr-4 inline-flex items-center gap-1">
              <MapPinCheckInside size={14} />
              {props.country}
            </span>
            <a
              href={props.googleMapsLink}
              className="underline"
            >
              View on Google Maps
            </a>
          </div>
          <h1 className="text-3xl font-bold">{props.title}</h1>
          <p className="font-bold mt-5">{props.date}</p>
          <p className="mt-2 leading-5">
           {props.text}
          </p>
        </div>
      </div>
        </div>
    );
}