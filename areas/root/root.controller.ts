import { Controller, Get } from "../../deps.ts";

@Controller()
export class RootController {
  @Get()
  public getRoot() {
    return "root page";
  }
}
