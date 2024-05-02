import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  const ToyCards=toys.map((toy)=>(
    <ToyCard key={toy.id}
    toy={toy}/>
  ))

  return (
    <div id="toy-collection">{ToyCards}</div>
  );
}

export default ToyContainer;
