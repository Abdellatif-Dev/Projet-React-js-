import React from "react";
import { Link, useParams } from "react-router-dom";
import { anime } from "./data";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function Affichage() {
  let { N } = useParams();
  let { T } = useParams();
  let Season = parseInt(N);
  let anim = anime.find((anime) => anime.titre === T);
  let selectanime = anim.season.find((a) => a.Nseason === Season);
  let firstSeason = Math.min(...anim.season.map((a) => a.Nseason));
  let lastSeason = Math.max(...anim.season.map((a) => a.Nseason));

  console.log(anim);
  console.log(selectanime);

  return (
    <div className="bg-zinc-950 pt-20">
      <div className="container ">
        <div className="flex justify-between mb-3  ">
          <Link
            className={`flex justify-center items-center  mr-5 px-3 py-1 text-white rounded-md no-underline
              ${
                Season === firstSeason
                  ? "bg-zinc-700"
                  : "bg-zinc-600 hover:bg-zinc-700"
              }
              `}
            to={
              Season > firstSeason
                ? `/series/${anim.titre}/${Season - 1}`
                : undefined
            }
          >
            <GoChevronLeft /> Past
          </Link>
          <h3>
            {" "}
            <Link
              to={`/series/${anim.titre}`}
              className="no-underline text-gray-300 hover:text-gray-500 "
            >
              {anim.titre}
            </Link>
          </h3>
          <Link
            className={`flex justify-center items-center  mr-5 px-3 py-1 text-white rounded-md no-underline
              ${
                Season === lastSeason
                  ? "bg-zinc-700"
                  : "bg-zinc-600 hover:bg-zinc-700"
              }
              `}
            to={
              Season < lastSeason
                ? `/series/${anim.titre}/${Season + 1}`
                : undefined
            }
          >
            Next <GoChevronRight />
          </Link>
        </div>
        {selectanime.page.map((p) => (
          <div className="flex justify-center ">
            <img src={p} alt="" className=" w-full" />
          </div>
        ))}
        <div className="flex justify-between my-3  ">
          <Link
            className={`flex justify-center items-center  mr-5 px-3 py-1 text-white rounded-md no-underline
              ${
                Season === firstSeason
                  ? "bg-zinc-700"
                  : "bg-zinc-600 hover:bg-zinc-700"
              }
              `}
            to={
              Season > firstSeason
                ? `/series/${anim.titre}/${Season - 1}`
                : undefined
            }
          >
            <GoChevronLeft /> Past
          </Link>
          <Link
            className={`flex justify-center items-center  mr-5 px-3 py-1 text-white rounded-md no-underline
              ${
                Season === lastSeason
                  ? "bg-zinc-700"
                  : "bg-zinc-600 hover:bg-zinc-700"
              }
              `}
            to={
              Season < lastSeason
                ? `/series/${anim.titre}/${Season + 1}`
                : undefined
            }
          >
            Next <GoChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
