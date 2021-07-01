const app = require('./index')
require('colors')
require('dotenv').config()
const normalizePort = require('normalize-port')

//VARIABLES GLOBALES
const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);
app.set('appName', process.env.APP_NAME || 'SERVER CON NODE Y EXPRESS');

//SERVER
app.listen(app.get('port'), () => {
    console.log(app.get('appName').blue);
    console.log(`Server on port ${app.get('port')} :D`.blue);
});


