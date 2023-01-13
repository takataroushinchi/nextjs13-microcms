"use client";

import { IconHome, IconList } from "@tabler/icons";
import { getPath } from "libs/const/path";
import { ActiveLink } from "libs/next";

const ITEMS = [
  { href: getPath("INDEX"), label: "トップ", Icon: IconHome },
  { href: getPath("POSTS"), label: "案件リスト", Icon: IconList },
  { href: getPath("STATICS"), label: "static", Icon: IconList },
  { href: getPath("DYNAMICS"), label: "dynamic", Icon: IconList },
  { href: getPath("SUSPENSE"), label: "suspense", Icon: IconList },
];

const activeClass =
  "[&>*]:text-white flex-1 space-y-4 rounded-sm border-b-2 border-slate-600 bg-sky-700 p-4";
const normalClass =
  "[&>*]:text-sky-600 group flex-1 space-y-4 rounded-sm bg-slate-50 p-4 shadow ring-1 ring-slate-900/5 hover:bg-sky-600 hover:ring-sky-600";

export const Tab = () => {
  return (
    <nav className="flex gap-x-2 pb-8">
      {ITEMS.map(({ label, href, Icon }) => (
        <ActiveLink key={label} href={href} passHref>
          {(isActive) => {
            return (
              <div className={isActive ? activeClass : normalClass}>
                <p className="flex items-center text-sm font-semibold group-hover:text-slate-50">
                  <Icon className="pr-1" />
                  <span>{label}</span>
                </p>
              </div>
            );
          }}
        </ActiveLink>
      ))}
    </nav>
  );
};
