import { RootController } from "./root.controller.ts";
import { assertEquals } from "../../deps_test.ts";

Deno.test({
  name: "Root Controller",
  async fn(t): Promise<void> {
    const controller = new RootController();
    await t.step("text", () => {
      const text = controller.getRoot();
      assertEquals(text, "root page");
    });
  },
});
