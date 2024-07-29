import express, { Router, Request, Response, NextFunction } from "express";
import Property from "../models/property";
import User from "../models/users";
//import { Client, ClientOptions } from "@googlemaps/google-maps-services-js";
require("dotenv").config();
import fs from "fs";
import multer from "multer";
import { createError } from "../utils/error";
import PDFDocument from "pdfkit"

// Create the uploads directory if it doesn't exist
const uploadDirectory = 'uploads/';
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    const originalExtension = file.originalname.split('.').pop();
    const filenameWithoutExtension = file.originalname.replace(/\.[^/.]+$/, ""); // Remove the extension
    const uniqueSuffix =  new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 12)
    + '-' + Math.round(Math.random() * 1E9);
    const newFilename = filenameWithoutExtension + '-' + uniqueSuffix + '.' + originalExtension;
    cb(null, newFilename);
  },
  
});

export const upload = multer({ storage });

export const createProperty = async (req: Request, res: Response, next: NextFunction) => {
 
  try {
    const pictures: string[] = (req.files as Express.Multer.File[]).map((file: Express.Multer.File) => file.filename);
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return next(createError("failed", "user not found"))
    }

    if (user.role == ( 'basic')) {
      return res.status(403).json({ message: "Only authorized user can create properties" });
    }
    // const pictures: string[] = (req.files as Express.Multer.File[]).map((file: Express.Multer.File) => file.filename)
   
   // Create a new PDF document
   const pdfDoc = new PDFDocument();
    
   // Create a unique filename for the PDF
   const pdfFilename = `property-${Date.now()}.pdf`;
   const pdfPath = `${uploadDirectory}${pdfFilename}`;

   // Pipe the PDF output to a writable stream
   const pdfStream = fs.createWriteStream(pdfPath);
   pdfDoc.pipe(pdfStream);

   // Define text styles
   pdfDoc.font('Helvetica-Bold').fontSize(24);
   pdfDoc.fillColor('#333'); // Dark gray color
   pdfDoc.text('Property Details', { align: 'center' });

   // Add property details to the PDF with proper formatting
   pdfDoc.moveDown(); // Move down a line
   pdfDoc.fontSize(18).text(`Title: ${req.body.title}`);
   pdfDoc.fontSize(14).text(`Description: ${req.body.description}`);
   pdfDoc.fontSize(14).text(`Type: ${req.body.type}`);
   pdfDoc.fontSize(14).text(`State: ${req.body.state}`);
   pdfDoc.fontSize(14).text(`Rent Type: ${req.body.rentType}`);
   pdfDoc.fontSize(14).text(`Price: $${req.body.price}`);
   
   // Add images with captions
   pictures.forEach((picture, index) => {
     const picturePath = `${uploadDirectory}${picture}`;
     pdfDoc.moveDown(); // Move down a line
     pdfDoc.image(picturePath, { width: 400 })
       .text(`Image ${index + 1}`, { align: 'center' });
   });

   // End the PDF document
   pdfDoc.end();
   
    const newProperty = new Property({
      title: req.body.title,
      description: req.body.description,
      type: req.body.type,
      state: req.body.state,
      rentType: req.body.rentType,
      price: req.body.price,
      location: {
        address: req.body.location.address,
        city: req.body.location.city,
        state: req.body.location.state,
        zip: req.body.location.zip,
      },
      createdBy: user._id, 
      pictures: pictures, // Use the uploaded filename if available, otherwise an empty string
      pdf: pdfFilename,
    });

    await newProperty.save();

    res.status(201).json(newProperty);
  } catch (error) {
    next(error);
  }
};

export const getProperty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (err) {
    next(err);
  }
};

export const getPropertiesByUsername = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const properties = await Property.find({ createdBy: user._id });

    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};

export const getPropertiesByType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { propertytype } = req.query;

    const properties = await Property.find({ type: propertytype });

    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};

export const getPropertiesByPriceRange = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { minprice, maxprice } = req.query;

    const properties = await Property.find({ price: { $gte: minprice, $lte: maxprice } });

    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};

export const getPropertiesByRentType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { renttype } = req.query;

    const properties = await Property.find({ "rent type": renttype });

    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};

export const getPropertiesByDuration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { minduration, maxduration } = req.query;

    const properties = await Property.find({ "rent.duration": { $gte: minduration, $lte: maxduration } });

    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};

// export const getPropertiesByLocation = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { address, maxDistance = 1000 } = req.query as unknown as { address: string; maxDistance: number };

//     const client = new Client({ apiKey: process.env.API_KEY } as ClientOptions);

//     const geocodeResponse = await client.geocode({
//       params: {
//         address,
//         client_id: process.env.CLIENT_ID,
//         client_secret: process.env.CLIENT_SECRET,
//       },
//     });
//     const { lat, lng } = geocodeResponse.data.results[0].geometry.location;

//     const properties = await Property.find({
//       location: {
//         $near: {
//           $geometry: { type: "Point", coordinates: [lng, lat] },
//           $maxDistance: maxDistance,
//         },
//       },
//     }).lean();

//     res.status(200).json({
//       message: `Found ${properties.length} properties within ${maxDistance} meters of ${address}. You can specify a custom maximum distance by adding a 'maxDistance' query parameter to your request.`,
//       properties,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
