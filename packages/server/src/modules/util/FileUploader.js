// import AWS from 'aws-sdk';
const AWS = require('aws-sdk');

// const s3 = new AWS.S3();
class FileUploader {
  constructor() {
    this.bucket = 'rcomm';
    this.s3 = new AWS.S3({
      signatureVersion: 'v4',
      region: 'us-west-2'
    });
  }
  getSignedUrl = async ({ filename, filetype }) => {
    var params = {
      Bucket: 'chf-rcomm',
      Key: filename,
      ContentType: `"${filetype}"`,
      Expires: 60,
      ACL: 'public-read'
    };
    const signedRequest = await this.s3.getSignedUrl('putObject', params);
    const url = `https://s3-us-west-2.amazonaws.com/chf-rcomm/${filename}`;
    return { signedRequest, url };
  };
  testListImages = cb => {
    this.s3.listObjects({ Bucket: 'rcomm' }, (err, data) => {
      if (err) {
        console.log('WHAT IS THE ERRR', err);
      }
      // console.log('WE GOT BUCKET DATA', data);
      cb(data);
    });
  };
}

export default new FileUploader();
