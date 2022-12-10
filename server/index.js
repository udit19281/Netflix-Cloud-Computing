const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const bp = require("body-parser");

const app1 = express();
const app2 = express();

const url = "mongodb://127.0.0.1:27017";
// const url = "mongodb+srv://udit19281:udit%402211@maincluster.psnttvx.mongodb.net/test";

let dbname;

let db;
const client = new MongoClient(url);

// Handler method
const handler = (num) => (req, res) => {
  const { method, url, headers, body } = req;
  // console.log("url is " + url);
  // console.log("method is " + method);
  // console.log("headers is " + headers);
  //  console.log("body is " + body);

  console.log(url + " " + num);

  if (url == "/log_in") res.render("../views/log_in.ejs");
  else if (url == "/temp") res.render("../views/temp.ejs");
  else res.send("Server is " + num);
};

// Only handle GET and POST requests
// Receive request and pass to handler method
// app2.get('*', handler(1)).post('*', handler(1));
// app1.get('*', handler(0)).post('*', handler(0));

// Start server on PORT 3000
app1.listen(5000, (err) => {
  err
    ? console.log("Failed to listen on PORT 5000")
    : console.log("Application Server listening on PORT 5000");
});

// Start server on PORT 3001
app2.listen(3001, (err) => {
  err
    ? console.log("Failed to listen on PORT 3001")
    : console.log("Application Server listening on PORT 3001");
});

app1.post(
  "/log_in/:username/:password",
  cors(),
  async function (req, res, next) {
    username = req.params.username;
    console.log("username is " + username);
    pword = req.params.password;
    console.log("password search is " + pword);
    dbname = "netflix_log_in";
    db = client.db(dbname);
    db.stats(function (err, result) {
      if (result["collections"] == 0) {
        // Database Avaialability
        dbname = "netflix_log_in_2";
        db = client.db(dbname);
      }
    });

    db.collection("user")
      .find({ uname: "abcd" })
      .toArray(function (err, result) {
        if (err) console.log(err);
      });

    try {
      console.log("Inside try login ");

      var user = await db
        .collection("user")
        .find({ uname: username, password: pword })
        .toArray();

      console.log(user.length);

      if (user.length == 0) res.send({ exists: "false" });
      else res.send({ exists: "true" });
    } catch (err) {
      return res.status(500);
    }
  }
);

app1.post(
  "/change_password/:username/:password/:new_password",
  cors(),
  async function (req, res, next) {
    username = req.params.username;
    console.log("username is " + username);
    pword = req.params.password;
    console.log("password search is " + pword);
    newpword = req.params.new_password;
    console.log("new password search is " + newpword);
    dbname = "netflix_log_in";
    db = client.db(dbname);
    db.stats(function (err, result) {
      if (result["collections"] == 0) {
        // Database Avaialability
        dbname = "netflix_log_in_2";
        db = client.db(dbname);
      }
    });

    db.collection("user")
      .find({ uname: "abcd" })
      .toArray(function (err, result) {
        if (err) console.log(err);
      });

    try {
      console.log("Inside try login ");

      var user = await db
        .collection("user")
        .find({ uname: username, password: pword })
        .toArray();

      console.log(user.length);

      if (user.length == 0) res.send({ changed: "false" });

      var myquery = { uname: username, password: pword };
      var newvalues = { $set: { password: newpword } };
      db.collection("user").updateOne(myquery, newvalues);

      res.send({ changed: "true" });

      if (dbname == "netflix_log_in") {
        console.log("netflix log in 2");
        dbname = "netflix_log_in_2";
        db = client.db(dbname);
        db.collection("user").updateOne(myquery, newvalues);
      } else if (dbname == "netflix_log_in_2") {
        dbname = "netflix_log_in";
        db = client.db(dbname);
        db.collection("user").updateOne(myquery, newvalues);
      }
    } catch (err) {
      return res.status(500);
    }
  }
);

app1.post(
  "/sign_up/:username/:password",
  cors(),
  async function (req, res, next) {
    username = req.params.username;
    console.log("username is " + username);
    pword = req.params.password;
    console.log("password search is " + pword);
    dbname = "netflix_log_in";
    db = client.db(dbname);
    db.stats(function (err, result) {
      if (result["collections"] == 0) {
        // Database Avaialability
        dbname = "netflix_log_in_2";
        db = client.db(dbname);
      }
    });

    db.collection("user")
      .find({ uname: "abcd" })
      .toArray(function (err, result) {
        if (err) console.log(err);
      });

    try {
      console.log("Inside try login ");

      db.collection("user").insertOne({ uname: username, password: pword });

      //Synchronised Writes

      if (dbname == "netflix_log_in") {
        console.log("netflix log in 2");
        dbname = "netflix_log_in_2";
        db = client.db(dbname);
        db.collection("user").insertOne({ uname: username, password: pword });
      } else if (dbname == "netflix_log_in_2") {
        dbname = "netflix_log_in";
        db = client.db(dbname);
        db.collection("user").insertOne({ uname: username, password: pword });
      }
    } catch (err) {
      return res.status(500);
    }
  }
);

app2.post("/videos/:name", cors(), async function (req, res, next) {
  vid = req.params.name;
  console.log("Name is " + vid);
  dbname = "netflix_videos";
  db = client.db(dbname);
  db.stats(function (err, result) {
    if (result["collections"] == 0) {
      // Database Avaialability
      dbname = "netflix_videos_2";
      db = client.db(dbname);
    }
  });
  db.collection("videos")
    .find({ name: "abcd" })
    .toArray(function (err, result) {
      if (err) console.log(err);
    });

  try {
    console.log("Inside try video");
    var video = await db.collection("vidoes").find({ name: vid }).toArray();
    //  console.log({
    //     "total_reports":total_reports.length,
    //     "resolved":resolved.length,
    //     "rejected":rejected.length,
    //     "under_investigation":under_investigation.length
    // })
    res.send({
      src: video[0]["src"],
    });

    // next();
  } catch (err) {
    return res.status(500);
  }
});
app2.post("/recommendation", cors(), async function (req, res, next) {
  dbname = "netflix_videos";
  db = client.db(dbname);
  db.stats(function (err, result) {
    if (result["collections"] == 0) {
      // Database Avaialability
      dbname = "netflix_videos_2";
      db = client.db(dbname);
    }
  });

  db.collection("videos")
    .find({ name: "abcd" })
    .toArray(function (err, result) {
      if (err) console.log(err);
    });

  try {
    console.log("Inside try video");
    var video = await db.collection("videos").find().toArray();
    //  console.log({
    //     "total_reports":total_reports.length,
    //     "resolved":resolved.length,
    //     "rejected":rejected.length,
    //     "under_investigation":under_investigation.length
    // })

    res.send({
      src: video[video.length - 1]["src"],
    });

    //next();
  } catch (err) {
    return res.status(500);
  }
});
