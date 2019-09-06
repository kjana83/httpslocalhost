const app = express();
const https = require('https');
const fs = require('fs');

// app settings.

var privateKey  = fs.readFileSync('server/sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('server/sslcert/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
    
  console.info('Open up https://0.0.0.0:%s/ in your browser.', port);
});
