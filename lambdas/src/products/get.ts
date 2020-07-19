import { handler, dynamoDb } from "../libs";
import { IProduct } from ".";

export const main = handler(
  async (event: any): Promise<IProduct> => {
    const params = {
      TableName: process.env.productsTable,
      Key: {
        userId: event.requestContext.identity.cognitoIdentityId,
        productId: event.pathParameters.id,
      },
    };

    const result = await dynamoDb.get(params);

    if (!result.Item) {
      throw new Error("Item not found.");
    }

    return result.Item as IProduct;
  }
);
