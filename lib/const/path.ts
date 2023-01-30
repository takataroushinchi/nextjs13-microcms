const PATH = {
  INDEX: "/",
  POSTS: "/posts",
  POST: "/posts/[postid]",
  CATEGORY: "/posts/category/[categoryid]",
  SEARCH: "/search",
  STATICS: "/static",
  STATIC: "/static/[postid]",
  DYNAMICS: "/dynamic",
  DYNAMIC: "/dynamic/[postid]",
  SUSPENSE: "/suspense",
  NOTIFICATION: "/notification",
  SETTINGS: "/settings",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  FORGOT_PASSWORD: "/forgot-password",
} as const satisfies Record<string, `/${string}`>;

export const getPath = (pathKey: keyof typeof PATH, ...args: string[]) => {
  const val = PATH[pathKey];

  if (!args) {
    return val;
  }

  const dirs = val.slice(1).split("/");

  const newPath = dirs.map((dir) => {
    if (dir.startsWith("[")) {
      const replaceDir = args[0];
      args.shift();
      return replaceDir;
    }
    return dir;
  });

  return "/" + newPath.join("/");
};
