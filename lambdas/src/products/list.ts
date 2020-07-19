import { handler, dynamoDb } from "../libs";

export const main = handler(
  async (event: any): Promise<any> => {
    const params = {
      TableName: process.env.productsTable,
      KeyConditionExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": event.requestContext.identity.cognitoIdentityId,
      },
    };

    const result = await dynamoDb.query(params);

    return result.Items;
  }
);
