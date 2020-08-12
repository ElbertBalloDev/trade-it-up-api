import { v4 } from "uuid";
import { handler, dynamoDb } from "../libs";

interface IMessage {
  messageId: string;
  productId: string;
  content: string;
  messagedUser: string;
  createdDate: string;
}

export const main = handler(
  async (event: any): Promise<IMessage> => {
    const data = JSON.parse(event.body);

    const params = {
      TableName: process.env.messageTable,
      Item: {
        messageId: v4(),
        productId: data.productId,
        content: data.content,
        messagedUser: data.messagedUser,
        createdDate: new Date().toISOString(),
      },
    };

    await dynamoDb.put(params);
    return params.Item;
  }
);
