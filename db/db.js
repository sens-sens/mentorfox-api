const AWS = require('aws-sdk');
const config = {
    apiVersion: '2023-09-26',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
    AWS_SDK_LOAD_CONFIG: 1,
}

const DynamoDBConnection = (cofig)=>{
    try {
        AWS.config.update(config);
        const DB = new AWS.DynamoDB.DocumentClient();
        console.log('[INFO] connected to DB');
        return DB

    } catch (error) {
        console.log('[ERROR] in connecting to DB',error);
    }
}

const DynamoDB = DynamoDBConnection(config);
module.exports = DynamoDB;