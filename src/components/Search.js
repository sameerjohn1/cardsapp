import React, { useState } from "react";
import data from "../api/data";

function Search() {
  const [searchterm, setsearchTerm] = useState("");

  return (
    <>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
        Search here...
      </h2>
      <input
        placeholder="search..."
        type="text"
        className="border border-black   "
        style={{
          marginLeft: "35%",
          marginTop: "3%",
          width: "35%",
          height: "40px",
        }}
        onChange={(event) => {
          setsearchTerm(event.target.value);
        }}
      />
      {data
        .filter((val) => {
          if (searchterm == "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchterm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((e) => {
          console.log(e, "test");
          return (
            <>
              <div className="flex justify-center m-10 h-56">
                <div className="w-1/2 flex flex-col justify-center bg-white rounded-lg border shadow-md md:flex-row justify-center md:max-w-xl justify-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img
                    className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={e.images[0]}
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {e.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {e.brand}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {e.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="container flex justify-center text-center flex  justify-center  justify-items-center md:flex justify-center lg:flex justify-center xl:flex justify-center">
                <figure className="w-1/2 m-3 md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 flex justify-center flex-col justify-items-center">
                  <img
                    className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                    src={e.images[0]}
                    alt=""
                    width="384"
                    height="512"
                  />
                  <div className="pt-6 md:p-8 w-1/2 text-center md:text-left space-y-4   ">
                    <blockquote>
                      <p className="text-lg font-medium text-white">
                        {e.title}
                      </p>
                      <h1 style={{ color: "white" }}>{e.id}</h1>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-500 dark:text-sky-400">
                        {e.brand}
                      </div>
                      <div className="text-slate-700 dark:text-slate-500">
                        {e.description}
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div> */}
            </>
          );
        })}
    </>
  );
}

export default Search;
