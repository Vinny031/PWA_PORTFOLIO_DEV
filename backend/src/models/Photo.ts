import mongoose, { Schema, Document } from 'mongoose';

export interface IPhoto extends Document {
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
  alt: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const PhotoSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true, index: true },
    alt: { type: String, required: true },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model<IPhoto>('Photo', PhotoSchema);
