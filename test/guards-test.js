import expect from "expect";
import { guards, guard } from "../src/guards";

describe("guards", () => {

  it("exports", () => {
    expect(guard).toBeA(Function);
    expect(guards).toBeA(Function);
  });


  describe("#guards", () => {
    it("injects the test clause", () => {
      guards((test) => {
        expect(() => test(false, "error")).toThrow("Broken guard: error");
      });
    });
  });

  describe("#guard", () => {

    context("with simple condition", () => {
      it("falsey raises message", () => {
        expect(() => guard(false, "error")).toThrow("Broken guard: error");
      });

      it("truthy does not raises", () => {
        expect(() => guard(true, "error")).toNotThrow();
      });
    });

    context("with condition function", () => {
      it("falsey raises message", () => {
        expect(() => guard(() => false, "error")).toThrow("Broken guard: error");
      });

      it("truthy does not raises", () => {
        expect(() => guard(() => true, "error")).toNotThrow();
      });
    });
  });
});
