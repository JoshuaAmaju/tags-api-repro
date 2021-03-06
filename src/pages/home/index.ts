import { Request, Response } from "express";
import template from "./template.marko";

export default function Home(req: Request, res: Response) {
  template.stream({}).pipe(res);
}
