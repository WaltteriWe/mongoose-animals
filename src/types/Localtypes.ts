import {Types} from 'mongoose';
import {Point} from 'geojson';

type Category = {
  category_name: string;
};

type Species = {
  species_name: string;
  category: Types.ObjectId;
  image: string;
  location: Point;
};

type Animal = {
  animal_name: string;
  birthdate: Date;
  species: Types.ObjectId;
  location: Point;
};

export {Category, Species, Animal};
