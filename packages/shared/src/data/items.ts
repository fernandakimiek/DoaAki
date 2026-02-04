import { DonationItem } from '../types';

export const donationItems: DonationItem[] = [
  {
    id: '1',
    title: 'Mesa de Jantar de Madeira',
    description: 'Linda mesa de jantar em madeira maciça, com 6 lugares. Perfeita para reunir a família. Apenas alguns arranhões superficiais, mas em excelente estado geral.',
    image: 'https://images.unsplash.com/photo-1758977404683-d04c315a005b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkaW5pbmclMjB0YWJsZSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NzAwNTY5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1758977404683-d04c315a005b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkaW5pbmclMjB0YWJsZSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NzAwNTY5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1624258395756-c7efa8c9c111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjB0YWJsZSUyMGNsb3NlJTIwZGV0YWlsfGVufDF8fHx8MTc3MDE2OTExOXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1619982440650-c709eda53d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZSUyMHdvb2QlMjB0ZXh0dXJlJTIwZ3JhaW58ZW58MXx8fHwxNzcwMTY5MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    condition: 'Bom estado',
    distance: '1.2 km',
    category: 'Móveis',
    donorName: 'Maria Silva',
    donorRating: 4.8,
    donorReviews: 12,
    pickupSchedule: 'Finais de semana, 9h-18h',
    location: { lat: -23.5505, lng: -46.6333 }
  },
  {
    id: '2',
    title: 'Sofá Vintage 3 Lugares',
    description: 'Sofá vintage em ótimo estado, cor bege. Muito confortável e elegante.',
    image: 'https://images.unsplash.com/photo-1541630010955-6966d6ce9178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwc29mYSUyMGNvdWNofGVufDF8fHx8MTc3MDE2NTU5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Bom estado',
    distance: '2.5 km',
    category: 'Móveis',
    donorName: 'João Santos',
    donorRating: 5.0,
    donorReviews: 8,
    location: { lat: -23.5515, lng: -46.6343 }
  },
  {
    id: '3',
    title: 'Kit de Brinquedos Infantis',
    description: 'Diversos brinquedos educativos e coloridos para crianças de 3 a 7 anos.',
    image: 'https://images.unsplash.com/photo-1553158399-3796bdbc82fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHRveXMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzAxNDg2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Bom estado',
    distance: '0.8 km',
    category: 'Brinquedos',
    donorName: 'Ana Costa',
    donorRating: 4.9,
    donorReviews: 15,
    location: { lat: -23.5495, lng: -46.6323 }
  },
  {
    id: '4',
    title: 'Roupas Femininas Variadas',
    description: 'Lote de roupas femininas, tamanhos P e M, em bom estado de conservação.',
    image: 'https://images.unsplash.com/photo-1542060748-10c28b62716f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGRvbmF0aW9uJTIwd2FyZHJvYmV8ZW58MXx8fHwxNzcwMTY1NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Bom estado',
    distance: '3.1 km',
    category: 'Roupas',
    donorName: 'Carla Oliveira',
    donorRating: 4.7,
    donorReviews: 20,
    location: { lat: -23.5525, lng: -46.6353 }
  },
  {
    id: '5',
    title: 'Notebook para Estudos',
    description: 'Notebook funcional, ideal para estudos e trabalhos básicos. Bateria em bom estado.',
    image: 'https://images.unsplash.com/photo-1668608321466-f164d481f837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXB0b3AlMjBlbGVjdHJvbmljcyUyMGRldmljZXxlbnwxfHx8fDE3NzAxNjU1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Bom estado',
    distance: '4.2 km',
    category: 'Eletrônicos',
    donorName: 'Pedro Lima',
    donorRating: 5.0,
    donorReviews: 6,
    location: { lat: -23.5535, lng: -46.6363 }
  },
  {
    id: '6',
    title: 'Estante de Livros',
    description: 'Estante de madeira com 5 prateleiras. Ideal para organizar livros e decoração.',
    image: 'https://images.unsplash.com/photo-1657223126839-060ad45b6ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc2hlbGYlMjBib29rcyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcwMTY1NTk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Bom estado',
    distance: '1.8 km',
    category: 'Móveis',
    donorName: 'Luciana Freitas',
    donorRating: 4.8,
    donorReviews: 10,
    location: { lat: -23.5545, lng: -46.6313 }
  },
  {
    id: '7',
    title: 'Cadeira de Escritório',
    description: 'Cadeira ergonômica para escritório, ajuste de altura e encosto reclinável.',
    image: 'https://images.unsplash.com/photo-1578894622188-098059daa59e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjaGFpciUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NzAwOTkxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Bom estado',
    distance: '2.9 km',
    category: 'Móveis',
    donorName: 'Ricardo Mendes',
    donorRating: 4.6,
    donorReviews: 9,
    location: { lat: -23.5500, lng: -46.6373 }
  },
  {
    id: '8',
    title: 'Bicicleta Infantil',
    description: 'Bicicleta aro 16, perfeita para crianças de 5 a 8 anos. Com rodinhas laterais.',
    image: 'https://images.unsplash.com/photo-1763098843789-e03a632b4710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWN5Y2xlJTIwYmlrZSUyMG91dGRvb3J8ZW58MXx8fHwxNzcwMTY1NTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Bom estado',
    distance: '1.5 km',
    category: 'Brinquedos',
    donorName: 'Fernanda Rocha',
    donorRating: 4.9,
    donorReviews: 14,
    location: { lat: -23.5510, lng: -46.6303 }
  }
];
