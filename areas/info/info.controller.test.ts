import { InfoController } from "./info.controller.ts";
import { assertEquals } from "../../deps_test.ts";

Deno.test({
  name: "Info Controller",
  async fn(t): Promise<void> {
    const controller = new InfoController();
    await t.step("text", () => {
      const text = controller.text();
      assertEquals(text, "Hello info");
    });

    await t.step("time", () => {
      const text = controller.time();
      assertEquals(text, "Hello info2");
    });
  },
});
