import React from "react";
import { anime } from "./data";
import { Link, useParams } from "react-router-dom";
import { GoChevronLeft ,GoChevronRight } from "react-icons/go";

export default function Anime() {
  let { T } = useParams();
  let { P } = useParams();
  P = Number(P) || 1;

  let anim = anime.find((a) => a.titre === T);
  let Ns = anim.season.length;
  let Np = Math.ceil(Ns / 10);
  console.log(anim);
  console.log(anim.season.length);
  console.log(P);

  return (
    <div className="bg-zinc-950 pt-20">
      <div className="container grid grid-cols-11 gap-3 ">
        <div className="col-span-8">
          <div className=" border-2 rounded-md border-red-700 bg-zinc-800 ">
            <h2 className="text-3xl text-white text-center p-3">
              {anim.titre}
            </h2>
            <div className="px-10  lg:grid-rows-6 md:grid-rows-4 ms:grid-rows-2  ">
              {anim.Classification.map((c) => (
                <button className=" rounded-md border-1 border-white m-2 px-2 py-1 bg-gray-500 hover:bg-gray-800 text-white ">
                  {c}
                </button>
              ))}
            </div>
            <hr className="text-white mx-16" />
            <p className="text-white p-3 ">{anim.description} </p>
          </div>
          <div className="border-2 rounded-md border-red-700 p-3 bg-zinc-800 mt-10">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg  scroll-smooth h-96">
              <table className="w-full text-sm ">
                <thead className="text-xs uppercase bg-zinc-950 text-purple-50">
                  <tr>
                    <th className="px-6 py-3">Season</th>
                    <th className="px-6 py-3">Titre Season</th>
                    <th className="px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {anim.season
                    .slice(0 + P * 10 - 10, 10 + P * 10 - 10)
                    .map((s, i) => (
                      <tr
                        key={i}
                        className="  text-white  odd:bg-zinc-900 even:bg-zinc-950 border-t border-gray-100"
                      >
                        <td className="px-6 py-4   whitespace-nowrap">
                          <Link
                            className="no-underline text-white"
                            to={`/series/${anim.titre}/${s.Nseason}`}
                          >
                            {s.Nseason}
                          </Link>
                        </td>

                        <td className="px-6 py-4">Silver</td>
                        <td className="px-6 py-4">Laptop</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
              <div className=" flex justify-center">
                <Link
                  to={
                    P !== 1 ? `/series/${anim.titre}/page/${P - 1}` : undefined
                  }
                >
                  <button className="w-6 h-6 flex justify-center items-center mx-1 rounded-md my-2 text-black transition-all duration-500 bg-zinc-200 hover:shadow-md hover:shadow-purple-950 hover:bg-zinc-400">
                    <GoChevronLeft />
                  </button>
                </Link>
                {Array.from({ length: Np }, (_, i) => (
                  <Link to={`/series/${anim.titre}/page/${i + 1}`}>
                    <button
                      key={i}
                      className={`w-6 mx-1 rounded-md my-2 text-black transition-all duration-500 ${
                        i + 1 === P
                          ? "bg-zinc-400 hover:shadow-md hover:shadow-purple-950"
                          : "bg-zinc-200 hover:shadow-md hover:shadow-purple-950 hover:bg-zinc-400"
                      }`}
                    >
                      {i + 1}
                    </button>
                  </Link>
                ))}
                <Link
                  to={
                    P !== Np ? `/series/${anim.titre}/page/${P + 1}` : undefined
                  }
                >
                  <button className="w-6 h-6 flex justify-center items-center mx-1 rounded-md my-2 text-black transition-all duration-500 bg-zinc-200 hover:shadow-md hover:shadow-purple-950 hover:bg-zinc-400">
                    <GoChevronRight />
                  </button>
                </Link>
              </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className=" border-2 rounded-md border-red-700 ">
            <img src={anim.image} alt={anim.titre} className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
