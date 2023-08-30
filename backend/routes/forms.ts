import bcrypt from "bcryptjs";
import { Request, Response, Router } from "express";
import User, { IUser } from "../models/user";
import { verifyTokenAndAuthorization } from "../utils/verifyToken";
import FormModel from "../models/forms";
import { transporter, mailOptions } from "../utils/nodeMailer";
import { SendFormInviteTemplate } from "../utils/sendFormInvite";

const router: Router = Router();

// Create
router.post("/forms", async (req, res) => {
  try {
    const newForm = new FormModel(req.body);
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    res.status(500).json({ error: "Could not create form" });
  }
});

// Send form link invite via email
router.post("/form-invite", async (req, res) => {
  try {
    const { email, url, subject, message } = req.body;

    // Send the email
    transporter.sendMail(
      mailOptions(
        email,
        subject,
        "invited",
        SendFormInviteTemplate({
          email: email,
          url: url,
        })
      ),
      function ({ error, info }: any) {
        console.log("Sending email...");
        if (error) {
          console.log(error);
          res.status(500).json({ error: "Could not send invite email" });
        } else {
          console.log("Email sent: " + info);
          res.status(201).json({ message: "Email sent" + info });
        }
      }
    )
  } catch (error) {
    console.error("Error sending invite email:", error);
    res.status(500).json({ error: "Could not send invite email" });
  }
});

router.get("/forms/:id", async (req, res) => {
  try {
    const form = await FormModel.findById(req.params.id);
    if (!form) {
      res.status(404).json({ error: "Form not found" });
    } else {
      res.json(form);
    }
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve form" });
  }
});

router.put("/forms/:id", async (req, res) => {
  try {
    const updatedForm = await FormModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedForm) {
      res.status(404).json({ error: "Form not found" });
    } else {
      res.json(updatedForm);
    }
  } catch (error) {
    res.status(500).json({ error: "Could not update form" });
  }
});

router.delete("/forms/:id", async (req, res) => {
  try {
    const deletedForm = await FormModel.findByIdAndRemove(req.params.id);
    if (!deletedForm) {
      res.status(404).json({ error: "Form not found" });
    } else {
      res.json(deletedForm);
    }
  } catch (error) {
    res.status(500).json({ error: "Could not delete form" });
  }
});

export default router;
