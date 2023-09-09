import { sayHello } from "../src/say-hello";
describe("sayHello", () => {
    it("should return hello wiliam", () => {
        expect(sayHello("Wiliam")).toBe("Hello Wiliam");
    });
});
