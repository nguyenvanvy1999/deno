import { App } from "./deps.ts";
import { settings } from "./app-settings.ts";

// create application
const app = new App(settings);

app.listen();
