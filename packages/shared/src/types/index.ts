export interface DonationItem {
  id: string;
  title: string;
  description: string;
  image: string;
  images?: string[]; // Multiple images for carousel
  condition: 'Novo' | 'Bom estado' | 'Usado';
  distance: string;
  category: string;
  donorName: string;
  donorRating: number;
  donorReviews: number;
  pickupSchedule?: string; // Preferred pickup time
  location: {
    lat: number;
    lng: number;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
