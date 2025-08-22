import mongoose from 'mongoose';
import {Category} from '../../types/Localtypes';

const categorySchema = new mongoose.Schema<Category>(
  {
    category_name: {
      type: String,
      required: true,
      unique: true,
      minlength: 2,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<Category>('Category', categorySchema);
