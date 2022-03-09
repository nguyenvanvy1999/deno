import { HealthController } from "./health.controller.ts";
import { assertEquals } from "../../deps_test.ts";

Deno.test({
  name: "Health Controller",
  async fn(t): Promise<void> {
    const controller = new HealthController();
    await t.step("text", () => {
      const status = controller.getHealth();
      assertEquals(status, { status: "pass" });
    });
  },
});
