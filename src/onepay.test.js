import ONEPAY from "./onepay";

describe("ONEPAY", () => {
  // Given
  const WALLET_ADDRESS = "0x1563227B1916600037327142E04a457D0effD4fB";

  beforeEach(() => {
    ONEPAY.reset();
  });

  describe("ONEPAY.initialize()", () => {
    it("initialize() default", () => {
      // When
      ONEPAY.initialize(WALLET_ADDRESS);

      // Then
      expect(window.onepay).toBeDefined();
    });
  });
});
