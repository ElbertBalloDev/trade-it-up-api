import { handler } from "../libs";

export const main = handler(
  async (event: any): Promise<any> => {
    return Promise.resolve().then(() => "hello world from serverless");
  }
);
