const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "",
// For extra thing : BHASHI-MD~(megafileid)
  MONGODB: process.env.MONGODB || "mongodb+srv://eshanrashmika2007:<db_Eshan2007@>@cluster0.x92kh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",

    
 
};
