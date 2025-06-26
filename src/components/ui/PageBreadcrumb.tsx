import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./breadcrumb";
import Link from "next/link";

interface IBredcrumbData {
  label: string;
  href: string;
}

interface IPageBreadcrumbProps {
  data?: IBredcrumbData[];
}

const PageBreadcrumb: React.FunctionComponent<IPageBreadcrumbProps> = ({
  data,
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {data?.map(({ label, href }, i) => (
          <React.Fragment key={label}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={href}
                  className={`${data?.length - 1 === i ? "text-black" : ""}`}
                >
                  {label}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {data && data?.length - 1 !== i && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PageBreadcrumb;
