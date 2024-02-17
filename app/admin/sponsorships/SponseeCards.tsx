"use client";
import { useEffect, useState } from "react";
import { EmptySponsee } from "./emptySponsees";
import Image from "next/image";
export default function SponseeCards() {
  const [sponsees, setSponsees] = useState([]);

  useEffect(() => {
    const fetchSponsees = async () => {
      try {
        const res = await fetch("/api/sponsee");
        if (!res.ok) {
          throw new Error("unable to fetch sponsees");
        }
        const data = await res.json();
        setSponsees(data);
        console.log(sponsees);
      } catch (err) {
        console.error(err);
      }
    };
  });
  return (
    <div>
      {!sponsees.length && <EmptySponsee />}

      {sponsees.length && (
        <div>
          <ul>
            {sponsees.map((sponsee, i) => {
              return (<li key={i + Math.random() * 999999}>
                <Image src={sponsee.url} width={100} height={100} alt={``} ></Image>
              </li>);
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
