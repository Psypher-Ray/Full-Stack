
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Luminary Air Max',
    category: 'Audio',
    price: 549,
    description: 'Immersive sound with adaptive transparency. Experience audio like never before with custom-engineered drivers.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    featured: true,
    specs: ['Active Noise Cancellation', '20hr Battery', 'Spatial Audio']
  },
  {
    id: '2',
    name: 'Horizon Watch S3',
    category: 'Wearables',
    price: 399,
    description: 'Track your health in real-time. A stunning LTPO OLED display that stays on, so you never miss a beat.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    featured: true,
    specs: ['ECG App', 'Fall Detection', 'Swimproof']
  },
  {
    id: '4',
    name: 'Zenith Keyboard',
    category: 'Accessories',
    price: 199,
    description: 'Mechanical precision meet minimalist design. Gasket mounted for the most satisfying typing experience.',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800',
    specs: ['Hot-swappable', 'RGB Lighting', 'Wireless 2.4GHz']
  },
  {
    id: '5',
    name: 'Prime Mouse Ultra',
    category: 'Accessories',
    price: 129,
    description: 'Feather-light performance. Designed for those who demand precision and speed in every movement.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800',
    specs: ['60g Weight', '25K Sensor', '80hr Battery']
  },
  {
    id: '6',
    name: 'Flow Tablet 12',
    category: 'Computing',
    price: 899,
    description: 'The power of a laptop, the portability of a tablet. Powered by the next-gen M-series chip.',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
    featured: true,
    specs: ['Mini-LED Display', 'Thunderbolt 4', 'Pencil Support']
  }
];

export const CATEGORIES = ['All', 'Audio', 'Wearables', 'Photography', 'Accessories', 'Computing'];
