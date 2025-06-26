import React, { ReactNode } from "react";
import { Typography } from "../ui/typography";

interface IPageLayout {
  children: ReactNode;
  breadcrumb?: ReactNode;
  title?: string;
}

const PageLayout: React.FunctionComponent<IPageLayout> = ({
  children,
  breadcrumb,
  title,
}) => {
  return (
    <div className=" p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6 lg:gap-8">
      {breadcrumb && breadcrumb}
      <Typography variant="h1" className=" text-center">
        {title}
      </Typography>
      {children}
    </div>
  );
};

export default PageLayout;
