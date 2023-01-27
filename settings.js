import dotenv from "dotenv";
dotenv.config();

export default {
  accounts: [
    {
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
      proxyServer: process.env.PROXY,
      // Example of overriding the default `nopechaKey` for this account
      nopechaKey: process.env.NOPECHA_KEY,
    },
    // Add more accounts as needed...
  ],
  // The port the server will run on (optional, defaults to 3000)
  port: 3000,
};
