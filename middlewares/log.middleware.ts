import { Middleware, MiddlewareTarget } from "../deps.ts";

// @Middleware(/^.*$/)
@Middleware(new RegExp("/"))
export class Log implements MiddlewareTarget<unknown> {
  date: Date = new Date();

  onPreRequest() {
    return new Promise<void>((resolve) => {
      this.date = new Date();
      resolve();
    });
  }

  onPostRequest() {
    return new Promise<void>((resolve) => {
      console.log(new Date().getTime() - this.date.getTime());
      resolve();
    });
  }
}
