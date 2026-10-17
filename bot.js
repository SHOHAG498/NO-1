const bedrock = require('bedrock-protocol');

function createBot() {
  console.log('সার্ভারে সংযোগের চেষ্টা করা হচ্ছে...');
  
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
    console.log('ত্রুটি দেখা দিয়েছে:', err);
  });

  client.on('close', () => {
    console.log('কানেকশন বন্ধ হয়ে গেছে। ৫ সেকেন্ড পর পুনরায় চেষ্টা করা হচ্ছে...');
    setTimeout(createBot, 5000); 
  });
}

createBot();
