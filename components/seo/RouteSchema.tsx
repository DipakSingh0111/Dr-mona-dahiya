"use client";

import { usePathname } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { getRoutePageSchema } from "@/data/schemaData";

export default function RouteSchema() {
  const pathname = usePathname() || "/";
  const schema = getRoutePageSchema(pathname);

  if (!schema) {
    return null;
  }

  return <JsonLd data={schema} />;
}
