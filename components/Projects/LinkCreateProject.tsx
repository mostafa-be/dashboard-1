import Link from "next/link";
import React from "react";

type Props = {};

const LinkCreateProject = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-end my-10">
      <Link
        href={"/dashboard/projects/create-project"}
        className="px-4 py-3 text-center rounded-lg bg-indigo-700 text-white hover:scale-105 transition-all cursor-pointer text-sm font-semibold "
      >
        Create Project{" "}
      </Link>
    </div>
  );
};

export default LinkCreateProject;
