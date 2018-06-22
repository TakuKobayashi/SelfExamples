console.log('Loading function');

const aws = require('aws-sdk');

const s3 = new aws.S3({ apiVersion: '2006-03-01' });


exprts.handler = function(event, context) {
  cnsole.log(JSON.stringify(event));
/*
 {
    "Records": [
      {
        "eventVersion": "2.0",
        "eventSource": "aws:s3",
        "awsRegion": "ap-northeast-1",
        "eventTime": "2018-06-10T15:34:50.955Z",
        "eventName": "ObjectCreated:Put",
        "userIdentity": {
          "principalId": "AEAAMPLCRU1B2"
        },
        "requestParameters": {
          "sourceIPAddress": "110.132.22.14"
        },
        "responseElements": {
          "x-amz-request-id": "C78116ECF1189FB5",
          "x-amz-id-2": "0sWFiAt8OINtbcJryjMvGHMTOsKG6bRg6A0sJc7mwfefQ3Lq/HXHwoGKd0t3xFNnpOm9y2t1Su0="
        },
        "s3": {
          "s3SchemaVersion": "1.0",
          "configurationId": "1fc072bb-6666-4252-a9d7-2a92bdf0ee0a",
          "bucket": {
            "name": "taptappun",
            "ownerIdentity": {
                "principalId": "AEAAMPLCRU1B2"
            },
            "arn": "arn:aws:s3:::taptappun"
          },
          "object": {
            "key": "test/16044377517_52e9cd43ea_b.jpg",
            "size": 232445,
            "eTag": "cdb6f1f88c56f822c236a9441c7f328a",
            "sequencer": "005B1D451AD5ABC30C"
          }
        }
      }
    ]
  }
*/
  // Get the object from the event and show its content type
  const bucket = event.Records[0].s3.bucket.name;
  const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
  const params = {
      Bucket: bucket,
      Key: key,
  };
  console.log(JSON.stringify(params));
  s3.getObject(params).promise().then(function(data){
    // dataの中身 data の中身 Bufferは配列
    /*
      {
        "AcceptRanges":"bytes",
        "LastModified":"2018-06-10T19:19:56.000Z",
        "ContentLength":232445,
        "ETag":"\"cdb6f1f88c56f822c236a9441c7f328a\"",
        "ContentType":"image/jpeg",
        "Metadata":{},
        "Body":{"type":"Buffer","data":[]}
      }
    */
    //console.log(JSON.stringify(data));
    // Upload
    /*
      s3.putObject({
        Bucket: bucket,
        Key: thumbnailKey,
        Body: new Buffer(stdout, 'binary'),
        ContentType: contentType
      }, function(err, res) {
        if (err) {
          context.done('error putting object', err);
        } else {
          callback(null, "success putting object");
        }
      });
    */
  }).catch(function(err) {
    console.log(err);
    const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
    console.log(message);
    throw new Error(message);
  });
};