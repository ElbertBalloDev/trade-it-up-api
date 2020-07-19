import { handler, dynamoDb } from "../libs";

export const main = handler(
  async (event: any): Promise<{ status: boolean }> => {
    const params = {
      TableName: process.env.productsTable,
      Key: {
        userId: event.requestContext.identity.cognitoIdentityId,
        productId: event.pathParameters.id,
      },
    };

    await dynamoDb.delete(params);

    return { status: true };
  }
);
