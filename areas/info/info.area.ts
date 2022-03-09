import { Area } from "../../deps.ts";
import { InfoController } from "./info.controller.ts";

@Area({
  baseRoute: "/test",
  controllers: [InfoController],
})
export class InfoArea {
}
