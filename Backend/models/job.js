const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    // 🔗 Relations
    recruiter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },

    // 🧾 Basic Info
    title: {
      type: String,
      required: true,
      trim: true,
    },

    jobType: {
      type: String,
      enum: ["Full Time", "Part Time", "Contract", "Internship"],
      required: true,
    },

    workMode: {
      type: String,
      enum: ["Remote", "On-Site", "Hybrid"],
      required: true,
    },

    // 📍 Logistics
    location: {
      type: String,
      trim: true,
    },

    experience: {
      type: String,
      enum: ["0-1 Years", "1-3 Years", "3-5 Years", "5+ Years"],
      required: true,
    },

    fresherFriendly: {
      type: Boolean,
      default: false,
    },

    applyBy: {
      type: Date,
      required: true,
    },

    // 🧠 Description
    skills: {
      type: [String],
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    // 💰 Compensation
    salary: {
      min: {
        type: Number,
      },
      max: {
        type: Number,
      },
      currency: {
        type: String,
        enum: ["USD", "INR", "EUR"],
        default: "USD",
      },
      period: {
        type: String,
        enum: ["Year", "Month", "Hour"],
        default: "Year",
      },
      negotiable: {
        type: Boolean,
        default: false,
      },
    },

    // 📊 System fields
    status: {
      type: String,
      enum: ["Draft", "Active", "Closed"],
      default: "Active",
    },

    views: {
      type: Number,
      default: 0,
    },

    applicantsCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
