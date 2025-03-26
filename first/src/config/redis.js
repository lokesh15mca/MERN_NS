const redis = require('redis');

const client = redis.createClient();

// client.connect();
client.on("error", function(error){
    console.log(error)
});
// import { createClient } from 'redis';

// const client = await createClient()
//   .on('error', err => console.log('Redis Client Error', err))
//   .connect();

module.exports = client;