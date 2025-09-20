import { Link, useLocation } from "react-router";
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";

export default function BreadCrumb() {
  const location = useLocation();
  const pathList = location.pathname.split("/").filter(Boolean);

  const formatPath = (str: string) =>
    str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className="flex items-center space-x-2 text-sm">
      {pathList.map((path, index) => {
        const routeTo = "/" + pathList.slice(0, index + 1).join("/");

        return (
          <Fragment key={index}>
            {index !== pathList.length - 1 ? (
              <>
                <Link to={routeTo} className="text-[var(--text)] text-[16px]">
                  {formatPath(path)}
                </Link>

                <span className="mx-2 flex items-center justify-center">
                  <ChevronRight className="w-4 h-4 text-[var(--text)]" />
                </span>
              </>
            ) : (
              <h6 className="text-[var(--main)] text-[16px]">
                {formatPath(path)}
              </h6>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
