import mongoose, { Document, Schema, Types } from "mongoose";
import { IUser } from "./users";

export interface IProperty extends Document {
  title: string;
  description: string;
  type: "House" | "Apartment" | "Space" | "Other";
  state:
    | "New"
    | "Old"
    | "Renovated"
    | "Public Compound"
    | "Private Compound"
    | "Estate"
    | "Other";
  rentType: string;
  price: number;
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  createdBy: Types.ObjectId | IUser;
  pictures: string[];
  pdf: string;
  reviews: {
    user: Types.ObjectId | IUser;
    text: string;
    rating: number;
  }[];
  averageRating: number;
}

const PropertySchema: Schema<IProperty> = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true, // Add this line to enforce uniqueness
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["House", "Apartment", "Space", "Other"],
      required: true,
    },
    state: {
      type: String,
      enum: [
        "New",
        "Old",
        "Renovated",
        "Public Compound",
        "Private Compound",
        "Estate",
        "Other",
      ],
      required: true,
    },
    rentType: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    pictures: [
      {
        // New field for property pictures
        type: String,
        required: true,
      },
    ],
    pdf: {
      // New field for PDF filename
      type: String,
      required: true,
    },
    reviews: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        text: {
          type: String,
        },
        rating: {
          type: Number,
        },
      },
    ],
    averageRating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Add the virtual field and populate settings
PropertySchema.virtual("createdByUsername", {
  ref: "User",
  localField: "createdBy",
  foreignField: "_id",
  justOne: true,
});

PropertySchema.set("toObject", { virtuals: true });
PropertySchema.set("toJSON", { virtuals: true });
const Property = mongoose.model<IProperty>("Property", PropertySchema);

export default Property;
