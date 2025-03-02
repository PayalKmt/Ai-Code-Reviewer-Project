// dotenv package is used to access the variables in .env file GOOGLE_GEMINI_KEY=AIzaSyDIeBrty_rQyKt71w_eJZozpMLrk1JA7Qk
require('dotenv').config()

const app = require('./src/app')

app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
});