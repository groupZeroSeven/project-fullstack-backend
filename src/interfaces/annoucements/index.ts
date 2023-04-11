export interface IAnnoucementRequest {
  brand: string;
  model: string;
  banner: string;
  year: string;
  fuel: string;
  mileage: number;
  color: string;
  price: number;
  description: string;
  is_bargain: boolean;
  is_published: boolean;
}

export interface IAnnoucementResponse {
  id: string;
  brand: string;
  model: string;
  banner: string;
  year: string;
  fuel: string;
  mileage: number;
  color: string;
  price: number;
  description: string;
  is_bargain: boolean;
  is_published: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface IAnnoucement {
  id: string;
  brand: string;
  model: string;
  year: string;
  banner: string;
  fuel: string;
  mileage: number;
  color: string;
  price: number;
  description: string;
  is_bargain: boolean;
  is_published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAnnoucementUpdate {
  brand: string;
  model: string;
  year: string;
  banner: string;
  fuel: string;
  mileage: number;
  color: string;
  price: number;
  description: string;
  is_bargain: boolean;
  is_published: boolean;
}
