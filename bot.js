const bedrock = require('bedrock-protocol');
const http = require('http');

// রেন্ডারের এরর বন্ধ রাখার জন্য ওয়েব সার্ভার
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.write("Aternos Bot is Active!");
  res.end();
}).listen(port, () => {
  console.log(`Web server running on port ${port}`);
});

// বট লজিক
function createBot() {
  console.log('সার্ভারে সংযোগের চেষ্টা করা হচ্ছে...');
  
  const client = bedrock.createClient({
    host: 'SRSHOHAG9834.aternos.me',
    port: 19132,
    username: 'AternosBot247',
    offline: true
  });

  client.on('join', () => {
    console.log('বট সফলভাবে সার্ভারে যুক্ত হয়েছে!');
  });

  client.on('error', (err) => {
    console.log('ত্রুটি দেখা দিয়েছে:', err.message);
  });

  client.on('close', () => {
    console.log('কানেকশন বন্ধ হয়ে গেছে। ৫ সেকেন্ড পর পুনরায় চেষ্টা করা হচ্ছে...');
    setTimeout(createBot, 5000); 
  });
}

createBot();
