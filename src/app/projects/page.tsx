"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Project {
  name: string;
  stargazers_count: number;
  html_url: string;
}
const skeletonStyle = {
  marginBottom: "20px", // Adjust this value to increase the gap
};
const Project: React.FC = () => {
  const [query, setQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [page, setPage] = React.useState(0);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  React.useEffect(() => {
    const pageno = searchParams.get("pageno");
    console.log(pageno);
    pageno ? setPage(parseInt(pageno, 0)) : setPage(1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [searchParams]);

  const pageChange = (i: number) => {
    const params = new URLSearchParams(searchParams);
    setPage(i);
    params.set("pageno", i.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get("https://api.github.com/search/repositories", {
        params: {
          q: `${query}`,
          sort: "stars",
          order: "desc",
        },
      });
      setSearchResults(response.data.items);
      replace(`${pathname}`);
    } catch (error) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center flex-col items-center  ">
      <h1 className="bg-gradient-to-r text-3xl font-bold from-blue-500 to-black text-transparent bg-clip-text px-4 text-center pt-6">Search Open Source Projects</h1>
      <div className="relative flex w-96 mt-10 px-8" data-twe-input-wrapper-init data-twe-input-group-ref>
        <input
          type="text"
          className="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear border border-black"
          placeholder="Search"
          aria-label="Search"
          id="search-focus"
          aria-describedby="basic-addon4"
          value={query}
          onKeyUp={(e) => {
            if (e.key == "Enter") handleSearch();
          }}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="relative z-[2] -ms-0.5 flex items-center rounded-e bg-primary px-5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          type="button"
          id="button-addon1"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          <span className="[&>svg]:h-5 [&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </span>
        </button>
      </div>
      {error && <p>{error}</p>}

      {/* Showing current items in page */}

      {searchResults.length > 0 && (
        <p className=" text-zinc-500  italic font-serif font-semibold w-full mt-5 px-4 md:px-10 max-w-screen-xl mx-auto  ">
          Showing:{" "}
          <span className=" font-normal">
            {page * 9 - 8} - {searchResults.length < page * 9 ? searchResults.length : page * 9} of {searchResults.length} Items
          </span>
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 p-4  ">
        {/* Adding skeletons for better user experience */}
        {loading
          ? Array(9)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="bg-gray-200 p-6 rounded shadow-md" style={skeletonStyle}>
                  <h2 className="text-lg font-semibold">
                    <Skeleton width={200} />
                  </h2>
                  <p className="text-sm">
                    <Skeleton width={100} />
                  </p>
                  <p className="inline-block text-sm break-all lg:text-[1.7vh]">
                    <Skeleton width={250} />
                  </p>
                </div>
              ))
          : searchResults.slice(page * 9 - 9, page * 9).map((project, index) => (
              <div key={index} className="bg-gray-200 p-6 rounded shadow-md">
                <h2 className="text-lg font-semibold">{project.name}</h2>
                <p className="text-sm">{`Stars: ${project.stargazers_count}`}</p>
                <p className=" inline-block text-sm break-all lg:text-[1.7vh] ">
                  <a target="_blank" href={`${project.html_url}`}>
                    URL: <span className="hover:text-gray-600">{`${project.html_url}`}</span>
                  </a>
                </p>
              </div>
            ))}
      </div>

      {/* Pagination section */}
      {searchResults.length > 0 && (
        <section className=" w-full flex items-center justify-center gap-x-2 text-white  my-10  text-[0.8rem] ">
          {/* Each page contains 20 data */}

          <button className={` disabled: px-3 rounded-md py-1 ${page <= 1 ? "pointer-events-none bg-zinc-900" : "cursor-pointer bg-blue-500 "} `} onClick={() => pageChange(page - 1)}>
            Previous
          </button>

          {[...Array(Math.ceil(searchResults.length / 9))].map((_, i) => {
            return (
              <span
                key={i}
                className={`cursor-pointer  size-6 flex items-center justify-center text-center rounded-full ${i + 1 == page ? "  bg-zinc-800 text-white " : "bg-white text-black"} `}
                onClick={() => {
                  pageChange(i + 1);
                }}
              >
                {i + 1}
              </span>
            );
          })}

          <button className={`px-3  rounded-md py-1 ${page >= Math.ceil(searchResults.length / 9) ? "pointer-events-none bg-zinc-900" : "cursor-pointer bg-blue-500"} `} onClick={() => pageChange(page + 1)}>
            Next
          </button>
        </section>
      )}
    </div>
  );
};

export default Project;
