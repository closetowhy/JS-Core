//task1 
const http = require("http");
const os = require("os");
const path = require("path");

http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });

  const userInfo = os.userInfo();
  const osType = os.type();
  const uptime = Math.floor(os.uptime()/60);
  const cwd = process.cwd();
  const serverFileName = path.basename(__filename);

  const html = `
        <h1>System Information</h1>
        <p>Current User: ${userInfo.username}</p>
        <p>OS type: ${osType}</p>
        <p>System work time: ${uptime} minutes </p>
        <p>Current work Directory: ${cwd}</p>
        <p>Server File Name: ${serverFileName}</p>
  `;

  response.end(html);
}).listen(5000);

console.log("Server running at http://127.0.0.1:5000/");



//task2
////personalmodule
function greetUser() {
    const os = require("os");
    const userInfo = os.userInfo();
    const date = new Date();
    const hour = date.getHours();
  
    let greeting;
    if (hour >= 6 && hour < 12) {
      greeting = "Good morning";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
    return `${greeting}, ${userInfo.username}!`;
  }
  
  module.exports = { greetUser }; 


///server
const http = require("http");
const personalmodule = require("./personalmodule");

http.createServer((req, res) => {
  const date = new Date();
  const greeting = personalmodule.greetUser("user");
  html = `<p>Date of request: ${date.toString()}</p>
          <p>${greeting}</p> `
  res.end(html);
}).listen(8000);

console.log("Server running at http://127.0.0.1:8000/");
