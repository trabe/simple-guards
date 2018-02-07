import { guards, guard } from "../src/guards";

describe("guards", () => {
  it("exports", () => {
    expect(typeof guard).toBe("function");
    expect(typeof guards).toBe("function");
  });

  describe("#guards", () => {
    it("injects the test clause", () => {
      guards(test => {
        expect(() => test(false, "error")).toThrow("Broken guard: error");
      });
    });
  });

  describe("#guard", () => {
    describe("with simple condition", () => {
      it("falsey raises message", () => {
        expect(() => guard(false, "error")).toThrow("Broken guard: error");
      });

      it("truthy does not raises", () => {
        expect(() => guard(true, "error")).not.toThrow();
      });
    });

    describe("with condition function", () => {
      it("falsey raises message", () => {
        expect(() => guard(() => false, "error")).toThrow("Broken guard: error");
      });

      it("truthy does not raises", () => {
        expect(() => guard(() => true, "error")).not.toThrow();
      });
    });
  });
});
