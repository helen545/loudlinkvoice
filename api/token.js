
const twilio = require("twilio");

module.exports = async function handler(req, res) {
  const AccessToken = twilio.jwt.AccessToken;
  const VoiceGrant = AccessToken.VoiceGrant;

  const identity = "admin";

  const voiceGrant = new VoiceGrant({
    outgoingApplicationSid: process.env.TWILIO_TWIML_APP_SID,
    incomingAllow: true,
  });

  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY_SID,
    process.env.TWILIO_API_KEY_SECRET,
    { identity }
  );

  token.addGrant(voiceGrant);

  res.status(200).json({
    identity,
    token: token.toJwt(),
  });
};
