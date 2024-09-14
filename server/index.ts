// const express = require("express"); // This is how to set express up in JS
import express, {Express, Request, Response} from "express";
const app: Express = express();
app.use(express.json());
import dotenv from "dotenv";
dotenv.config();
const BCRYPT = require("bcrypt");
const JWT = require("JsonWebToken");

// util and service imports
const CONNECT_TO_DATABASE = require("./utils/db");
const AUTHENTICATE_TOKEN = require("./utils/auth");
const TASK_MAKING = require("./services/taskMaking")

// Enable CORS for all routes
// app.use((req: any, res: any, next: any) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://google-hack-deploy-frontend.vercel.app" // Change this
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });


// Directly sent to service:
app.get("/", (req: Request, res: Response) => {
  res.json("hello world");
});

app.get("/devTest", async (req: Request, res: Response) => {
  try {
    const db = await CONNECT_TO_DATABASE();
    const usersCollection = db.collection("users");
    // Await the toArray method to get all users
    const users = await usersCollection.find().toArray();
    // Filter out users that have a username
    const userData = users.filter((user: any) => user.username);
    // Send the filtered users as response
    res.json(userData);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "An error occurred while retrieving users" });
  }
});

app.post("/registerTest", async (req:Request, res:Response) => {
  // console.log("Request body:", req.body);  // Debugging line
  const db = await CONNECT_TO_DATABASE();
  const usersCollection = db.collection("users");
  if (req.body.username === await usersCollection.findOne({username: req.body.username})) {
      return res.status(400).send("User with that username already exists");
    }
  const hashedPassword = await bcrypt.hash(req.body.password,10);
  
  const newUser = {
    username: req.body.username,
    password: hashedPassword,
    friends: req.body.friends,
    numTasks: req.body.numTasks,
    tasks: req.body.tasks,
  };
  
  await usersCollection.insertOne(newUser);
  res.status(201).send("User created successfully");
})

app.post("/register", async (req:Request, res:Response) => {
  // console.log("Request body:", req.body);  // Debugging line
  const db = await CONNECT_TO_DATABASE();
  const usersCollection = db.collection("users");
  if (req.body.username === await usersCollection.findOne({username: req.body.username})) {
      return res.status(400).send("User with that username already exists");
    }
  const hashedPassword = await bcrypt.hash(req.body.password,10);
  
  const newUser = {
    username: req.body.username,
    password: hashedPassword,
    friends: [],
    numTasks: 0,
    tasks: [],
  };
  
  await usersCollection.insertOne(newUser);
  res.status(201).send("User created successfully");
})

app.get("/login", async (req:Request, res:Response) => {
  const db = await CONNECT_TO_DATABASE();
  const usersCollection = db.collection("users");
  // Find user in db
  const userInDatabase = await usersCollection.findOne({username: req.body.username});
  if (userInDatabase) {
    if (await bcrypt.compare(req.body.password, userInDatabase.password)) {
      const user = { username: req.body.username };
      const accessToken = JWT.sign(user, process.env.JWT_SECRET);
      console.log("Successfully logged in");
      res.send(accessToken);
    } else {
      res.json("incorrect password");
    }
  } else {
    return res.status(400).send("Cannot find user");
  }
})

// Not implemented yet
app.get("/logout", (req:Request, res:Response) => {
  const userClaims = AUTHENTICATE_TOKEN(req);
  res.json("successful logout")
})

// Sent to RabbitMQ
app.get("/rabbitMQ", (req:Request, res:Response) => {
  res.json("rabbit")
})


if (process.env.SERVER_PORT) {
  app.listen(process.env.SERVER_PORT, () => {
    console.log(`[Server] Server is running on port ${process.env.SERVER_PORT}\n`);
  });
}
/* 
Improvements to be Made:
- Error handling
- Login DDOS protection
*/