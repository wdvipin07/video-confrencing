let IS_PROD = false;
const server = IS_PROD
  ? "https://video-confrencing-6dmw.onrender.com"
  : "http://localhost:3000";

export default server;
