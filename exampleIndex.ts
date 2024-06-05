// declare var require: any;
// // THIS IS THE MOST UP TO DATE AND FUNCTIONAL VERSION
// // Run server and test with "requests.rest" file from top to bottom. Final request should return "Success" if working correctly.
// const geminiAPI = require("./services/geminiApiHandler");
// const movieAPI = require("./services/movieApiHandler");
// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const connectToDatabase = require("./utils/db");
// const authenticateToken = require("./utils/auth");
// require("dotenv").config();
// app.use(express.json());

// // Enable CORS for all routes
// // app.use((req: any, res: any, next: any) => {
// //   res.setHeader(
// //     "Access-Control-Allow-Origin",
// //     "https://google-hack-deploy-frontend.vercel.app" // Change this to be whatever you need
// //   );
// //   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
// //   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
// //   next();
// // });

// app.get("/", (req: any, res: any) => {
//   res.json("hello world");
// });

// /**
//  * Route to fetch specific user data.
//  * @name GET/user
//  * @param {object} req - Express request object
//  * @param {object} res - Express response object
//  * @returns {object} - All the data about the signed-in user
//  */
// app.get("/user", async (req: any, res: any) => {
//   try {
//     // Retrieve all users from the database
//     // console.log(userClaims.username) // Should be name of whatever you signed in as
//     const userClaims = authenticateToken(req);

//     // Use the appropriate database and collection
//     const db = await connectToDatabase();
//     const usersCollection = db.collection("users");

//     const users = await usersCollection.find().toArray();
//     const userData = users
//       .filter((user) => user.username === userClaims.username)
//       .map(({ password, ...rest }) => rest); // Exclude the 'password' field

//     res.json(userData);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// /**
//  * Route to fetch all users.
//  * @name GET/allUsers
//  * @param {object} req - Express request object
//  * @param {object} res - Express response object
//  * @returns {object} - All the data about all the users in the database. Only used for development purposes
//  */
// app.get("/allUsers", async (req: any, res: any) => {
//   try {
//     // Use the appropriate database and collection
//     const db = await connectToDatabase();
//     const usersCollection = db.collection("users");
//     // Retrieve all users from the database
//     const users = await usersCollection.find().toArray();
//     res.json(users);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// /**
//  * Retrieves movie data associated with the authenticated user
//  * @name GET/getUserMovieData
//  * @param {object} req - Express request object
//  * @param {object} res - Express response object
//  * @returns {object} - The movie data associated with the user
//  */
// app.get("/getUserMovieData", async (req: any, res: any) => {
//   try {
//     const userClaims = authenticateToken(req);
//     // Use the appropriate database and collection
//     const db = await connectToDatabase();
//     const usersCollection = db.collection("users");
//     // Find the user directly using the username from the token
//     const user = await usersCollection.findOne({
//       username: userClaims.username,
//     });
//     // Check if the user was found
//     if (user) {
//       // Extract the movieData field from the found user
//       const movieData = user.movieData;

//       // Send the movieData as a response
//       res.json(movieData);
//     } else {
//       // If no user is found, send an appropriate response
//       res.status(404).send("User not found");
//     }
//   } catch (error) {
//     // Handle errors that might occur during the database operation
//     console.error("Error retrieving user data:", error);
//     res.status(500).send("An error occurred while fetching user data.");
//   }
// });

// /**
//  * Retrieves movies from the search query
//  * @name GET/getMoviesFromSearch
//  * @param {object} req - Express request object
//  * @param {object} res - Express response object
//  * @returns {void}
//  */
// app.get("/getMoviesFromSearch", async (req: any, res: any) => {
//   try {
//     const { movie } = req.query;
//     console.log(movie); // Undefined
//     movieAPI
//       .searchForMovie(movie)
//       .then((data) => {
//         if (data === undefined) {
//           res.status(404).send("No movie data found for search");
//         }
//         res.json(data);
//       })
//       .catch((error) => {
//         res.status(500).send("Error fetching movies.", error);
//       });
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// /**
//  * Retrieves trending movies
//  * @name GET/getTrendingMovies
//  * @param {object} req - Express request object
//  * @param {object} res - Express response object
//  * @returns {void}
//  */
// app.get("/getTrendingMovies", (req: any, res: any) => {
//   movieAPI
//     .getTrendingMovies()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((error) => {
//       res.status(500).send("Error fetching popular movies.", error);
//     });
// });

// /**
//  * Retrieves popular movies.
//  * @name GET/getPopularMovies
//  * @param {object} req - Express request object
//  * @param {object} res - Express response object
//  * @returns {void}
//  */
// app.get("/getPopularMovies", (req: any, res: any) => {
//   movieAPI
//     .getPopularMovieHandler()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((error) => {
//       res.status(500).send("Error fetching popular movies.", error);
//     });
// });

// /**
//  * Route to register a new user.
//  * @name POST/register
//  * @param {object} req - Express request object
//  * @param {object} res - Express response object
//  * @returns {void}
//  */
// app.post("/register", async (req: any, res: any) => {
//   try {
//     // Use the appropriate database and collection
//     const db = await connectToDatabase();
//     const usersCollection = db.collection("users");
//     // Testing if username already exists in DB
//     if (
//       (user = await usersCollection.findOne({
//         username: req.body.username,
//       }))
//     ) {
//       return res.status(400).send("User with that username already exists");
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);

//     // Insert the new user into the database
//     const newUser = {
//       username: req.body.username,
//       password: hashedPassword,
//       movieData: req.body.movieData,
//       bio: req.body.bio,
//     };
//     await usersCollection.insertOne(newUser);
//     res.status(201).send("User created successfully");
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// /**
//  * Route to log in a user.
//  * @name POST/login
//  * @param {object} req - Express request object
//  * @param {object} res - Express response object
//  * @returns {void}
//  */
// app.post("/login", async (req: any, res: any) => {
//   // Use the appropriate database and collection
//   const db = await connectToDatabase();
//   const usersCollection = db.collection("users");
//   const user = await usersCollection.findOne({
//     username: req.body.username,
//   });
//   if (user === null) {
//     return res.status(400).send("Cannot find user");
//   }
//   try {
//     if (await bcrypt.compare(req.body.password, user.password)) {
//       const username = req.body.username;
//       const user = { username: username };
//       const accessToken = jwt.sign(user, process.env.JWT_SECRET);
//       console.log("Successfully logged in");
//       res.send(accessToken);
//     } else {
//       res.status(401).send("Incorrect password");
//     }
//   } catch {
//     res.status(500).send();
//   }
// });

// /**
//  * Route to delete an authenticated user and all their data from the database
//  * @name DELETE/delete-account
//  * @param {object} req - Express request object
//  * @param {object} res - Express response object
//  * @returns {void}
//  */
// app.delete("/delete-account", async (req: any, res: any) => {
//   const userClaims = authenticateToken(req);
//   // Use the appropriate database and collection
//   const db = await connectToDatabase();
//   const usersCollection = db.collection("users");
//   const user = userClaims.username;
//   try {
//     // Find the user in the database
//     const userInDb = await usersCollection.findOne({
//       username: user,
//     });

//     // If user does not exist, return error
//     if (!userInDb) {
//       return res.status(400).send("Cannot find user");
//     }

//     // Delete the user from the database
//     await usersCollection.deleteOne({
//       username: user,
//     });

//     // Return success message
//     return res.status(200).send("User deleted successfully");
//   } catch (error) {
//     // Handle any errors
//     console.error("Error deleting user:", error);
//     return res.status(500).send("Internal Server Error");
//   }
// });

// /**
//  * Route to update the state of a movie for an authenticated user
//  * @name PUT/edit-movie-state
//  * @param {object} req - Express request object
//  * @param {object} res - Express response object
//  * @returns {void}
//  */
// app.put("/edit-movie-state", async (req: any, res: any) => {
//   try {
//     const userClaims = authenticateToken(req);
//     // Use the appropriate database and collection
//     const db = await connectToDatabase();
//     const usersCollection = db.collection("users");
//     const { username, action, movie } = req.body;
//     if (!username || !action || !movie) {
//       return res.status(400).send("Missing required fields");
//     }

//     // Retrieve the user from the database
//     const user = await usersCollection.findOne({ username });
//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     // Update the movie state based on the action
//     if (action === "watch" || action === "watch-later") {
//       // Determine which list to update
//       const listToUpdate =
//         action === "watch" ? "watchedMovies" : "watchLaterList";
//       // Determine the list to remove the movie from
//       const listToRemove =
//         listToUpdate === "watchedMovies" ? "watchLaterList" : "watchedMovies";

//       // Ensure that the movieData object and the lists exist
//       user.movieData = user.movieData || {};
//       user.movieData[listToUpdate] = user.movieData[listToUpdate] || [];
//       user.movieData[listToRemove] = user.movieData[listToRemove] || [];

//       // Check if the movie already exists in the specified list
//       const movieIndex = user.movieData[listToUpdate].findIndex((m) => {
//         m.movieId === movie.movieId;
//       });

//       // If the movie exists in the target list, return a message
//       if (movieIndex !== -1) {
//         return res
//           .status(400)
//           .send(`Movie already exists in the '${listToUpdate}' list`);
//       }

//       // Find the index of the movie in the other list
//       const indexInOtherList = user.movieData[listToRemove].findIndex(
//         (m) => m.movieId === movie.movieId
//       );

//       // If the movie exists in the other list, remove it
//       if (indexInOtherList !== -1) {
//         user.movieData[listToRemove].splice(indexInOtherList, 1);
//       }

//       // Add the movie to the specified list
//       user.movieData[listToUpdate].push(movie);
//       // Update the user document in the database
//       await usersCollection.updateOne(
//         { username },
//         { $set: { movieData: user.movieData } }
//       );
//       console.log(
//         `${movie.title} moved to ${listToUpdate} successfully for user ${username}`
//       );
//       res.send(
//         `Movie '${movie.title}' moved to '${listToUpdate}' successfully`
//       );
//     } else {
//       res.status(400).send("Invalid action");
//     }
//   } catch (error) {
//     console.error("Error updating movie state:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// /**
//  * Route to update the state of a movie for an authenticated user
//  * @name PUT/changeBio
//  * @param {object} req - Express request object
//  * @param {object} res - Express response object
//  * @returns {void}
//  */
// app.put("/changeBio", async (req: any, res: any) => {
//   try {
//     const userClaims = authenticateToken(req);
//     // Use the appropriate database and collection
//     const db = await connectToDatabase();
//     const usersCollection = db.collection("users");
//     const { username, bio } = req.body;

//     // Update the user's bio in the database
//     await usersCollection.updateOne(
//       { username: username },
//       { $set: { bio: bio } }
//     );

//     res.send("Bio updated successfully");
//   } catch (error) {
//     console.error("Error updating bio:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// /**
//  * Route to remove a movie from user's lists
//  * @name PUT/remove-movie
//  * @param {object} req - Express request object
//  * @param {object} res - Express response object
//  * @returns {void}
//  */
// app.put("/remove-movie", async (req: any, res: any) => {
//   try {
//     const userClaims = authenticateToken(req);
//     // Use the appropriate database and collection
//     const db = await connectToDatabase();
//     const usersCollection = db.collection("users");
//     const { username, movieName, status } = req.body;
//     if (!username || !movieName) {
//       return res.status(400).send("Missing required fields");
//     }

//     // Retrieve the user from the database
//     const user = await usersCollection.findOne({ username });
//     if (!user) {
//       return res.status(404).send("User not found");
//     }
//     let removedMovie = null;

//     // Find and remove the movie from the watchedMovies list
//     if (status === "Watched") {
//       if (user.movieData.watchedMovies) {
//         removedMovie = user.movieData.watchedMovies.find(
//           (movie) => movie.title === movieName
//         );
//         if (removedMovie) {
//           user.movieData.watchedMovies = user.movieData.watchedMovies.filter(
//             (movie) => movie.title !== movieName
//           );
//         }
//       }
//     } else if (status === "Watch Later") {
//       // Find and remove the movie from the watchLaterList
//       if (user.movieData.watchLaterList) {
//         removedMovie = user.movieData.watchLaterList.find(
//           (movie) => movie.title === movieName
//         );
//         if (removedMovie) {
//           user.movieData.watchLaterList = user.movieData.watchLaterList.filter(
//             (movie) => movie.title !== movieName
//           );
//         }
//       }
//     } else {
//       return res.status(404).send(`Movie with name ${movieName} not found`);
//     }

//     // Update the user document in the database
//     await usersCollection.updateOne(
//       { username },
//       { $set: { movieData: user.movieData } }
//     );

//     // Sending status/logging to the user
//     if (removedMovie) {
//       console.log(
//         `Movie ${removedMovie.title} removed successfully for user ${username}`
//       );
//       res.send(`Movie ${removedMovie.title} removed successfully`);
//     } else {
//       console.log(
//         `Movie with name ${movieName} not found for user ${username}`
//       );
//       res.status(404).send(`Movie with name ${movieName} not found`);
//     }
//   } catch (error) {
//     console.error("Error removing movie:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// /**
//  * Route to update user's rating for a movie
//  * @name PUT/update-user-rating
//  * @param {object} req - Express request object
//  * @param {object} res - Express response object
//  * @returns {void}
//  */
// app.put("/update-user-rating", async (req: any, res: any) => {
//   try {
//     const userClaims = authenticateToken(req);
//     // Use the appropriate database and collection
//     const db = await connectToDatabase();
//     const usersCollection = db.collection("users");
//     const { username, movieTitle, userRating } = req.body;

//     if (
//       !username ||
//       !movieTitle ||
//       userRating === undefined ||
//       userRating < 0 ||
//       userRating > 5
//     ) {
//       return res
//         .status(400)
//         .send(
//           "Invalid request. Please provide username, movieTitle, and a userRating between 0 and 5."
//         );
//     }

//     // Retrieve the user from the database
//     const user = await usersCollection.findOne({ username });
//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     // Check if the movie exists in the watchedMovies list
//     const movieIndex = user.movieData.watchedMovies.findIndex(
//       (movie) => movie.title === movieTitle
//     );
//     if (movieIndex === -1) {
//       return res
//         .status(404)
//         .send(
//           "Movie not found in watchedMovies list. Please add the movie to your list first."
//         );
//     }

//     // Update the userRating of the movie
//     user.movieData.watchedMovies[movieIndex].userRating = userRating;

//     // Update the user document in the database
//     await usersCollection.updateOne(
//       { username },
//       { $set: { movieData: user.movieData } }
//     );

//     console.log(
//       `User rating for ${movieTitle} updated successfully for user ${username}`
//     );
//     res.send(`User rating for ${movieTitle} updated successfully`);
//   } catch (error) {
//     console.error("Error updating user rating:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// /**
//  * Route to get movie recommendations based on a given genre
//  * @name GET/getRecommendations-genre
//  * @param {object} req - Express request object
//  * @param {object} res - Express response object
//  * @returns {void}
//  */
// app.get("/getRecommendations-genre", async (req: any, res: any) => {
//   try {
//     const userGenre = req.query.genre;
//     console.log(userGenre);
//     const movieSuggestions = await geminiAPI.giveMovieSuggestionsBasedOnGenre(
//       userGenre
//     );
//     const movieMetadata = [];
//     for (const movie of movieSuggestions) {
//       if (movie === "") continue;
//       const formattedMovie = await movieAPI.searchForMovieFromGemini(movie);
//       movieMetadata.push(formattedMovie);
//     }
//     res.send(movieMetadata);
//   } catch (error) {
//     console.error("Error getting recommendations:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// /**
//  * Route to get movie recommendations based on the authenticated user's movie lists
//  * @name GET/getRecommendations-list
//  * @param {object} req - Express request object
//  * @param {object} res - Express response object
//  * @returns {void}
//  */
// app.get("/getRecommendations-list", async (req: any, res: any) => {
//   try {
//     const userClaims = authenticateToken(req);
//     // Use the appropriate database and collection
//     const db = await connectToDatabase();
//     const usersCollection = db.collection("users");
//     // Find the user in the database
//     const userInDb = await usersCollection.findOne({
//       username: userClaims.username,
//     });
//     // Check if the user exists
//     if (!userInDb) {
//       return res.status(404).send("User not found");
//     }
//     const movieList = userInDb.movieData;
//     console.log(movieList);
//     const movieSuggestions = await geminiAPI.callWithTimeout(movieList);
//     const movieMetadata = [];
//     for (const movie of movieSuggestions) {
//       const formattedMovie = await movieAPI.searchForMovieFromGemini(movie);
//       movieMetadata.push(formattedMovie);
//     }
//     res.send(movieMetadata);
//   } catch (error) {
//     console.error("Error getting recommendations:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// if (process.env.API_PORT) {
//   app.listen(process.env.API_PORT, () => {
//     console.log(`Server is running on port ${process.env.API_PORT}`);
//   });
// }

// module.exports = app;

// /* 
// Improvements to be Made:
// - More error handling (more detailed and/or specific error messages)
// - Input validation
// - Increase security (Enabling SSL or TSL)
// */