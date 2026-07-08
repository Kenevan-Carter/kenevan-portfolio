require("dotenv").config();

const fs = require("fs");
const jwt = require("jsonwebtoken");

const teamId = process.env.APPLE_TEAM_ID;
const keyId = process.env.APPLE_KEY_ID;
const privateKeyPath = process.env.APPLE_PRIVATE_KEY_PATH;

if (!teamId || !keyId || !privateKeyPath) {
  throw new Error("Missing Apple Music environment variables.");
}

const privateKey = fs.readFileSync(privateKeyPath, "utf8");

const now = Math.floor(Date.now() / 1000);

// Apple Music developer token
const token = jwt.sign(
  {
    iss: teamId,
    iat: now,
    exp: now + 60 * 60 * 24 * 30, // 30 days
  },
  privateKey,
  {
    algorithm: "ES256",
    header: {
      alg: "ES256",
      kid: keyId,
    },
  }
);

console.log(token);


