export interface Photo {
  _id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
  alt: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  coverImage?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
