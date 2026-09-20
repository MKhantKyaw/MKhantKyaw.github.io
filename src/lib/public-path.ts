// Public files need the repository prefix when hosted on GitHub project Pages.
export function publicPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
