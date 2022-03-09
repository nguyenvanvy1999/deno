import { Controller, ForbiddenError } from "../../deps.ts";
import {
  Body,
  Cookie,
  Delete,
  Get,
  Param,
  Post,
  Put,
  QueryParam,
  QueryParams,
  Res,
} from "../../deps.ts";
import { AlosaurResponse } from "../../deps.ts";

@Controller("/home")
export class HomeController {
  @Get("/text")
  text(
    @QueryParam("name") name: string,
    @QueryParam("test") test: string,
    @Cookie("username") username: string,
  ) {
    return `Hello world, ${name} ${test} ${username}`;
  }

  @Get("/json")
  json(
    @Res() response: AlosaurResponse,
  ) {
    return response.getRaw();
  }

  @Get("/json/")
  obj() {
    return {};
  }

  @Get("/error")
  error() {
    throw new ForbiddenError("error");
  }

  @Get("/query")
  query(
    @QueryParam("a") a: string,
    @QueryParam("b") b: string,
    @QueryParam("c") c: string,
    @QueryParams() all: any,
  ) {
    return { a, b, c, all };
  }

  @Put("/query")
  putQuery(
    @QueryParam("a") a: string,
    @QueryParam("b") b: string,
    @QueryParam("c") c: string,
    @Body() body: any,
  ) {
    return { a, b, c, ...body };
  }

  @Get("/test")
  gerTests() {
    return "test";
  }

  @Get("/test/:id")
  gerParamId(@Param("id") id: string) {
    return id;
  }

  @Get("/test/:id/:name")
  gerParamIdName(@Param("id") id: string, @Param("name") name: string) {
    return `${id} ${name}`;
  }

  @Get("/test/:id/:name/detail")
  gerParamIdNameDetail(@Param("id") id: string, @Param("name") name: string) {
    return `${id} ${name} this is details page`;
  }

  @Post("/post")
  post(@Body() body: any) {
    return body;
  }

  @Delete("/delete/:id")
  delete(@Param("id") id: number) {
    return id;
  }

  @Get("/response-test")
  responseTest() {
    return new Response("Object created", {
      status: 201,
      headers: new Headers([["x-alosaur-header", "test"]]),
    });
  }
}
