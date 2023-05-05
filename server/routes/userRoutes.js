const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentController,
  getUserInfoController,
  updateProfileController,
  cancelAppointmentController,
} = require("../controllers/userController");
const authMiddlware = require("../middlewares/authMiddleware");

const userRouter = express.Router();

//  Login || post
userRouter.post("/login", loginController);

// Registration || post
userRouter.post("/register", registerController);

//  Auth ||post
userRouter.post("/getUserData", authMiddlware, authController);

// apply Doctor
userRouter.post("/apply-doctor", authMiddlware, applyDoctorController);

//  notification Doctor  || POST

userRouter.post(
  "/get-all-notification",
  authMiddlware,
  getAllNotificationController
);

//  notification Doctor  || POST

userRouter.post(
  "/delete-all-notification",
  authMiddlware,
  deleteAllNotificationController
);

//  get all doctor

userRouter.get("/getAllDoctors", authMiddlware, getAllDoctorController);

//  book appointment

userRouter.post("/book-appointment", authMiddlware, bookAppointmentController);

//  booking availabiility
userRouter.post(
  "/booking-availability",
  authMiddlware,
  bookingAvailabilityController
);

//  appointment list

userRouter.get('/user-appointments',authMiddlware,userAppointmentController);

//  cancelling the appointment by user.

userRouter.post('/cancel-appointment',authMiddlware,cancelAppointmentController);


userRouter.post('/getUserInfo',authMiddlware,getUserInfoController);

//  POST || UPDATE PROFILE

userRouter.put('/updateProfile',authMiddlware,updateProfileController);

//  post || GET SINGLE DOCTOR INFO

module.exports = userRouter;
