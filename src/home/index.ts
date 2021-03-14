import { Request, Response } from "express";
import template from "./template.marko";

export default function Home(_: Request, res: Response) {
  template.stream({}).pipe(res);
}
