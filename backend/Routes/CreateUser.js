const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "HaHajecjslher2343";

router.post(
  "/creatuser",
  body("email").isEmail(),
  body("password", "incorrect password").isLength({ min: 5 }),
  body("name").isLength({ min: 5 }),
  async (req, res) => {
    //console.log(req.body);
    // res.send(req.body);
    //copy code from expess.js
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let securePass = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        password: securePass,
        email: req.body.email,
        location: req.body.location || "NA",
      });
      res.json({ sucess: true });
    } catch (error) {
      console.log(error);
      res.json({ sucess: false });
    }
  }
);
router.post(
  "/loginuser",
  body("email").isEmail(),
  body("password", "incorrect password").isLength({ min: 5 }),
  async (req, res) => {
    //console.log(req.body);
    // res.send(req.body);
    //copy code from expess.js
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    let email = req.body.email;
    //let password=req.body.password;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Login with correct credentials" });
      }
      const pwdCompare = await bcrypt.compare(req.body.password, userData.password) // this return true false.
      if (!pwdCompare) {
          return res.status(400).json({ error: "Try Logging in with correct credentials" });
      }
      const data = {
          user: {
              id: userData.id
          }
      }
      const authToken = jwt.sign(data, jwtSecret);
      return res.json({ success: true , authToken:authToken })

    //  const validPassword = bcrypt.compareSync(
    //     req.body.password,
    //     userData.password
    //   );
    //   if (validPassword) {
    //     return res.json({ success: true });
    //   }
    //   return res.json({ succes: false });

      // if (req.body.password !== userData.password) {
      //   return res
      //     .status(400)
      //     .json({ errors: "Login with correct credentials" });
      // }

      res.json({ sucess: true });
    } catch (error) {
      console.log(error);
      res.json({ sucess: false });
    }
  }
);
module.exports = router;
