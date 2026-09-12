import Header from "./components/Header";

import Entry from "./components/Entry";
import data from "./data/data";

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function Hero() {
  const entryElement = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        entry={entry}
        // {...entry} to use spread operator we should do porps.id nto props.entry.id
      />
      // <Entry
      //   key={entry.id}
      //   img={entry.img}
      //   title={entry.title}
      //   country={entry.country}
      //   googleMapsLink={entry.googleMapsLink}
      //   dates={entry.dates}
      //   text={entry.text}
      // />
    );
  });
  return (
    <div>
      <Header />
      {entryElement}
    </div>
  );
}
