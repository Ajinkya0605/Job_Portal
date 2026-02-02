const mongoose = require("mongoose");

const candidateProfileSchema = new mongoose.Schema(
  {
    // 🔗 Relation to User
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    // 🧠 About
    bio: {
      type: String,
      maxlength: 1000,
    },

    openToWork: {
      type: Boolean,
      default: true,
    },

    verifiedStudent: {
      type: Boolean,
      default: false,
    },

    // 🎓 Education
    education: [
      {
        institution: String,
        degree: String,
        field: String,
        startYear: Number,
        endYear: Number,
      },
    ],

    // 🛠 Skills
    skills: {
      type: [String],
      default: [],
    },

    // 📜 Certifications
    certifications: [
      {
        title: String,
        provider: String,
        issueDate: Date,
        credentialUrl: String,
      },
    ],

    // 🚀 Projects
    projects: [
      {
        title: String,
        description: String,
        techStack: [String],
        liveUrl: String,
        githubUrl: String,
      },
    ],

    // 🔗 External Links
    links: {
      github: String,
      portfolio: String,
      linkedin: String,
    },

    // 📊 System-calculated fields
    profileCompletion: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CandidateProfile", candidateProfileSchema);
