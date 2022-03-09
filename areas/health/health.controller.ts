import { Controller, Get } from "../../deps.ts";

@Controller()
export class HealthController {
  @Get()
  public getHealth() {
    return { status: "pass" };
  }
}
