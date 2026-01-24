import React from "react";
import { Metadata } from "next";
import AdvanceSearch from "@/app/components/property-list/search";

export const metadata: Metadata = {
  title: "Properties List",
};

const Page = async ({ searchParams }: any) => {
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams?.category || "";

  return (
    <>
      <AdvanceSearch category={category} />
    </>
  );
};

export default Page;
