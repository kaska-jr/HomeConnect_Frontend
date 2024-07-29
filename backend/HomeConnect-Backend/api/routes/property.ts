import express from "express";
import {
  createProperty,
  getPropertiesByUsername,
  getProperty,
  getPropertiesByType,
  getPropertiesByPriceRange,
  upload,
} from "../controllers/property";
import {
  verifyAdmin,
  verifyToken,
  verifyUser,
} from "../middlewares/authMiddleware";

const router = express.Router();

// router.use(verifyToken, verifyUser)
router.post("/", verifyUser, upload.array("pictures"), createProperty);
router.get("/", getProperty);
router.get("/properties/:username", getPropertiesByUsername);
router.get("/properties", getPropertiesByType); // Route for getting properties by type
router.get("/properties/price-range", getPropertiesByPriceRange); // New route for getting properties by price range

export default router;
