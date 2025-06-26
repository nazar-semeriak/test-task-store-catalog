import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";

const Home: React.FunctionComponent = () => {
  return (
    <div className="max-w-screen-xl m-auto h-full flex justify-center pt-70 px-4">
      <div className=" text-center flex flex-col gap-6 items-center">
        <div>
          <Typography className="text-2xl  md:text-3xl lg:4xl font-bold">
            Welcome to our Store
          </Typography>
          <Typography variant="p">
            Explore our product catalog and find exactly what you’re looking
            for. Great quality, great prices.
          </Typography>
        </div>
        <Link href="/catalog">
          <Button className=" bg-blue-600 transition-all cursor-pointer font-bold">
            Browse Catalog
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
