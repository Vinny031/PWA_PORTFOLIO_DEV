import axios from 'axios';
import type { Photo, Category, ApiResponse } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getPhotos = async (category?: string): Promise<Photo[]> => {
  const params = category ? { category } : {};
  const response = await api.get<ApiResponse<Photo[]>>('/photos', { params });
  return response.data.data || [];
};

export const getPhoto = async (id: string): Promise<Photo | null> => {
  const response = await api.get<ApiResponse<Photo>>(`/photos/${id}`);
  return response.data.data || null;
};

export const getCategories = async (): Promise<Category[]> => {
  const response = await api.get<ApiResponse<Category[]>>('/categories');
  return response.data.data || [];
};

export const getCategory = async (slug: string): Promise<Category | null> => {
  const response = await api.get<ApiResponse<Category>>(`/categories/${slug}`);
  return response.data.data || null;
};
