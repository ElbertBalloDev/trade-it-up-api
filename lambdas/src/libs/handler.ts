import { APIGatewayProxyHandler, Context } from "aws-lambda";
import "source-map-support/register";

export const handler = (lambda): APIGatewayProxyHandler => async (
  event: any,
  context: Context
): Promise<any> => {
  try {
    const response = await lambda(event, context);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(response),
    };
  } catch (e) {
    return {
      statusCode: 500,
      error: JSON.stringify(e.message),
    };
  }
};

export default handler;
