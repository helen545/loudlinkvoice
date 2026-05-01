const VoiceResponse = require("twilio").twiml.VoiceResponse;

module.exports = function handler(req, res) {
  const response = new VoiceResponse();

  const dial = response.dial();

  // This sends the call to your browser (admin user)
  dial.client("admin");

  res.setHeader("Content-Type", "text/xml");
  res.send(response.toString());
};
