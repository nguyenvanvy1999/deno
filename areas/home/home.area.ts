import { Area } from "../../deps.ts";
import { HomeController } from "./home.controller.ts";

@Area({
  baseRoute: "/app",
  controllers: [HomeController],
})
export class HomeArea {
}
