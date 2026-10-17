const bedrock = require('bedrock-protocol');

function createBot() {
  console.log('সার্ভারে সংযোগের চেষ্টা করা হচ্ছে...');
  
  const client = bedrock.createClient({
    host: 'SRSHOHAG9834.aternos.me', // আপনার আটার্নোস সার্ভার আইপি
    port: 19132,                      // পোর্ট
    username: 'AternosBot247',        // বটের নাম
    offline: true,
    skip Ping: true                   // পিং সমস্যা এড়াতে
  });

  client.on('join', () => {
    console.log('বট সফলভাবে সার্ভারে যুক্ত হয়েছে!');
  });

  client.on('text', (packet) => {
    console.log(`[চ্যাট] ${packet.message}`);
  });

  client.on('error', (err) => {
    console.log('ত্রুটি দেখা দিয়েছে:', err);
  });

  client.on('close', () => {
    console.log('কানেকশন বন্ধ হয়ে গেছে। ৫ সেকেন্ড পর পুনরায় চেষ্টার করা হচ্ছে...');
    setTimeout(createBot, 5000); // ডিসকানেক্ট হলে অটোমেটিক আবার ট্রাই করবে
  });
}

createBot();
