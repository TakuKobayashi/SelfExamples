var callLambdaResponse = function(promise, context){
  promise.then((response) => {
    var lambdaResponse = {
      statusCode: 200,
      headers: { "X-Line-Status": "OK"},
      body: JSON.stringify({"result": "completed"})
    };
    context.succeed(lambdaResponse);
  }).catch(function(err){
    console.log(err);
    console.log(JSON.stringify(err.originalError.response.data));
  });
}

exports.handler = function (event, context) {
  console.log(JSON.stringify(event));
};