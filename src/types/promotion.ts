export interface Promotion {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  discount: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  vehicleIds?: string[];
}
