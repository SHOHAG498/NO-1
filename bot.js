const bedrock = require('bedrock-protocol');

const client = bedrock.createClient({
  host: 'SRSHOHAG9834.aternos.me', // আপনার আটার্নোস সার্ভার আইপি
  port: 19132,                      // পোর্ট
  username: 'AternosBot247',        // বটের নাম
  offline: true
});

client.on('join', () => {
  console.log('বট সফলভাবে সার্ভারে যুক্ত হয়েছে!');
});

client.on('error', (err) => {
  console.log('ভুল হয়েছে:', err);
});

client.on('disconnect', (packet) => {
  console.log('ডিসকানেক্ট হয়ে গেছে, পুনরায় সংযোগের চেষ্টা চলছে...');
});
