import { HomeController } from "./home.controller.ts";
import {
  AlosaurResponse,
  assertEquals,
  assertThrows,
} from "../../deps_test.ts";

Deno.test({
  name: "Home Controller",
  async fn(t): Promise<void> {
    const controller = new HomeController();
    await t.step("text", () => {
      const text = controller.text("1", "2", "3");
      assertEquals(text, "Hello world, 1 2 3");
    });

    await t.step("obj", () => {
      const obj = controller.obj();
      assertEquals(obj, {});
    });

    await t.step("error", () => {
      assertThrows(() => controller.error());
    });

    await t.step("query", () => {
      const query = controller.query("1", "2", "3", "body");
      assertEquals(query, { a: "1", b: "2", c: "3", all: "body" });
    });

    await t.step("put query", () => {
      const query = controller.query("1", "2", "3", "body");
      assertEquals(query, { a: "1", b: "2", c: "3", all: "body" });
    });

    await t.step("get tests", () => {
      const result = controller.gerTests();
      assertEquals(result, "test");
    });

    await t.step("get param id", () => {
      const result = controller.gerParamId("123");
      assertEquals(result, "123");
    });

    await t.step("get param id name", () => {
      const result = controller.gerParamIdName("123", "name");
      assertEquals(result, "123 name");
    });

    await t.step("put query", () => {
      const result = controller.putQuery("123", "name", "c", "d");
      assertEquals(result, { "0": "d", a: "123", b: "name", c: "c" });
    });

    await t.step("put query", () => {
      const result = controller.json(new AlosaurResponse());
      assertEquals(result.status, undefined);
      assertEquals(result.body, undefined);
    });

    await t.step("get param id name details", () => {
      const result = controller.gerParamIdNameDetail("123", "name");
      assertEquals(result, "123 name this is details page");
    });

    await t.step("post body", () => {
      const result = controller.post({ data: "123", message: "456" });
      assertEquals(result, { data: "123", message: "456" });
    });

    await t.step("delete", () => {
      const result = controller.delete(123);
      assertEquals(result, 123);
    });

    await t.step("delete", () => {
      const result = controller.responseTest();
      assertEquals(result.ok, true);
      assertEquals(result.status, 201);
    });
  },
});
