const axios = require("axios");
const Message = require("../model/Message");

const apiUrl = process.env.API_URL;
const apiToken = process.env.API_TOKEN;

// Create an API route to send bulk SMS
module.exports.message = async (req, res) => {
  const { sender, numbers, message } = req.body;
  try {
    const response = await axios.post(apiUrl, {
      to: Array.isArray(numbers) ? numbers.join(",") : numbers,
      body: message,
      from: sender,
      api_token: apiToken,
    });
    res.json({ success: true, response: response.data });

    const messageData = { sender, numbers, message };
    const mongoResponse = await Message.create({
      messageData,
      user: req.user.id,
    });
    console.log("Data inserted into MongoDB:", mongoResponse);
  } catch (error) {
    console.error("Error sending bulk SMS:", error);
    res.status(500).json({ success: false, error: "Failed to send bulk SMS" });
  }
};

// user history

module.exports.getUserHistory = async (req, res) => {
  try {
    const message = await Message.find({ user: req.user.id });
    console.log("Message history ", message.length);
    res.status(200).json({ message });

    console.log(message, "user message");
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching user data." });
  }
};
