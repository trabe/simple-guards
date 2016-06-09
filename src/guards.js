function test(cond, message) {
  if (!(typeof cond === "function" ? cond() : cond)) {
    throw new Error(`Broken guard: ${message}`);
  }
}

export function guards(fn) {
  if (process.env.NODE_ENV !== "production") {
    fn(test);
  }
}

export function guard(cond, message) {
  guards(() => test(cond, message));
}
