export default function handler(lambda) {
  return async (event, context) => {
    try {
      const response = await lambda(event, context);

      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: response
      };
    } catch (e) {
      return [500, { error: e.message }];
    }
  };
}
