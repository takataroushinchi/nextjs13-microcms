"use client";

import type { LinkProps } from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC, ReactElement } from "react";

type Props = Omit<LinkProps, "children"> & {
  children: (isActive: boolean) => ReactElement;
};

export const ActiveLink: FC<Props> = ({ children, ...linkProps }) => {
  const pathname = usePathname();
  return <Link {...linkProps}>{children(pathname === linkProps.href)}</Link>;
};
