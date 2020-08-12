import { handler, dynamoDb } from "../libs";

export const main = handler(
  async (event: any): Promise<{ status: boolean }> => {
    const data = JSON.parse(event.body);
    const params = {
      TableName: process.env.productsTable,
      Key: {
        userId: event.requestContext.identity.cognitoIdentityId,
        productId: event.pathParameters.id,
      },
      UpdateExpression:
        "SET description = :description, attachment = :attachment, title = :title",
      ExpressionAttributeValues: {
        ":attachment": data.attachment || null,
        ":title": data.title || null,
        ":description": data.description || null,
      },
      ReturnValues: "ALL_NEW",
    };

    await dynamoDb.update(params);

    return { status: true };
  }
);
