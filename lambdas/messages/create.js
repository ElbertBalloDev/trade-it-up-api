import { v4 } from 'uuid';
import handler from '../libs/handler-lib';
import dynamoDb from '../libs/dynamodb-lib';

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.messageTable,
    Item: {
      messageId: v4(),
      productId: data.productId,
      content: data.content,
      messagedUser: data.messagedUser,
      createdDate: new Date().toISOString()
    }
  };

  await dynamoDb.put(params);

  return params.Item;
});
