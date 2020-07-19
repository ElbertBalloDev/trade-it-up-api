import { v4 } from "uuid";
import { handler, dynamoDb } from "../libs";
import { IProduct } from ".";

export const main = handler(
  async (event: any): Promise<IProduct> => {
    const data = JSON.parse(event.body);

    const params = {
      TableName: process.env.productsTable,
      Item: {
        userId: event.requestContext.identity.cognitoIdentityId,
        productId: v4(),
        title: data.title,
        description: data.description,
        attachment: data.attachment,
        createdAt: Date.now(),
      },
    };

    await dynamoDb.put(params);

    return params.Item;
  }
);
