import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  return <div className="text-8xl">{params.id}</div>;
}
