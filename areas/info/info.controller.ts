import { Controller, Get } from "../../deps.ts";

@Controller("/info")
export class InfoController {
  @Get(/^\/?$/)
  text() {
    return `Hello info`;
  }

  @Get("/time")
  time() {
    return `Hello info2`;
  }
}
