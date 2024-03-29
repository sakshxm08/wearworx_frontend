import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const Breadcrumb = ({ routes }) => {
  return (
    <div className="flex gap-1">
      {routes.map((breadcrumb, index) => (
        <div
          className="flex uppercase items-center justify-center gap-1 overflow-hidden "
          key={index}
        >
          <Link
            to={breadcrumb.path}
            className={`text-sm ${
              index === routes.length - 1 ? "text-green-600" : "text-slate-700"
            } truncate w-full max-w-20 `}
          >
            {breadcrumb.value.length > 24
              ? breadcrumb.value.slice(0, 24) + "..."
              : breadcrumb.value}
          </Link>
          {index !== routes.length - 1 && (
            <HiChevronRight className="text-slate-700" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
