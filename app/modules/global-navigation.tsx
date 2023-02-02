"use client";

import { getPath } from "lib/const/path";
import { ActiveLink } from "lib/next";
import { FolderTree, Home, List, Search } from "lucide-react";

import ThemesSwitch from "@/app/modules/themes-switch";

const ITEMS = [
  { href: getPath("INDEX"), label: "トップ", Icon: Home },
  { href: getPath("POSTS"), label: "プロジェクト", Icon: FolderTree },
  { href: getPath("SEARCH"), label: "検索", Icon: Search },
  { href: getPath("STATICS"), label: "static", Icon: List },
  { href: getPath("DYNAMICS"), label: "dynamic", Icon: List },
  { href: getPath("SUSPENSE"), label: "suspense", Icon: List },
];

const activeClass =
  "[&>*]:text-white flex-1 space-y-4 rounded-sm border-b-2 border-slate-600 bg-sky-700 p-4";
const normalClass =
  "[&>*]:text-sky-600 group flex-1 space-y-4 rounded-sm bg-slate-50 p-4 shadow ring-1 ring-slate-900/5 hover:bg-sky-600 hover:ring-sky-600";

export const GlobalNavigation = () => {
  return (
    <nav className="flex gap-x-2 pb-8">
      {ITEMS.map(({ label, href, Icon }) => (
        <ActiveLink key={label} href={href} passHref>
          {(isActive) => {
            return (
              <div className={isActive ? activeClass : normalClass}>
                <p className="flex items-center whitespace-nowrap text-sm font-semibold group-hover:text-slate-50">
                  <Icon className="pr-1" />
                  <span>{label}</span>
                </p>
              </div>
            );
          }}
        </ActiveLink>
      ))}
      <ThemesSwitch />
    </nav>
  );
};
