import { ReactElement } from "react";
import { getStaticParams } from "../../../../../locales/server";

export function generateStaticParams() {
  return getStaticParams();
}

export default function ServicesDetailLayout({
  children,
}: {
  children: ReactElement;
}) {
  return <>{children}</>;
}
