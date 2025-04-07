import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    minLength: [2, 'First name must be at least 2 characters'],
    maxLength: [25, 'First name must be at most 50 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    minLength: [2, 'Last name must be at least 2 characters'],
    maxLength: [25, 'Last name must be at most 50 characters'],
  },
  subject: {
    type: String,
    default: 'No subject',
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export default contact;