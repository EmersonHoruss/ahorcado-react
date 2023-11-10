import { words } from "../../data/words";
import { randomNumber } from "../../utils/utils";

describe("Test Utils", () => {
  it("check ramdom with data (words)", () => {
    const min = 0;
    const max = words.length - 1;
    const iterations = 10000;
    for (let i = 0; i < iterations; i++) {
      expect(randomNumber(min, max)).toBeGreaterThanOrEqual(min);
      expect(randomNumber(min, max)).toBeLessThanOrEqual(max);
    }
  });
});
