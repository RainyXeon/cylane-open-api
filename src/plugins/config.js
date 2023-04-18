require("dotenv").config();
const { resolve } = require("path");
const yaml = require('js-yaml');
const fs   = require('fs');

let doc

try {
  const yaml_files = yaml.load(fs.readFileSync('./application.yml', 'utf8'));
  doc = yaml_files
} catch (e) {
  console.log(e);
}


module.exports = {
  PORT: process.env.PORT || doc.dash.PORT,
  TOKEN: process.env.TOKEN || doc.bot.TOKEN,
  REDIRECT: doc.dash.REDIRECT,
  MONGO_URI: doc.bot.MONGO_URI,
  SIGNATURE: process.env.SIGNATURE || doc.dash.SIGNATURE,
  CLIENT_ID: doc.dash.DISCORD_CLIENT_ID,
  CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET || doc.dash.DISCORD_CLIENT_SECRET,
  REDIRECT_URL: doc.dash.DISCORD_REDIRECT_URL,
  API_URL: doc.dash.DISCORD_API_URL,
  SECURE: doc.dash.SECURE,
  all: doc
}