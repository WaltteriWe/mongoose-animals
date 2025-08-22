import mongoose from 'mongoose';
import {Animal} from '../../types/Localtypes';

const animalSchema = new mongoose.Schema<Animal>({
  animal_name: {
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  species: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Species',
    required: true,
  },
  location: {
    type: String,
    enum: ['Point'],
    required: true,
    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere',
    },
  },
});
export default mongoose.model<Animal>('Animal', animalSchema);
