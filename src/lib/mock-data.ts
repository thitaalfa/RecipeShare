import { Recipe, User } from './types';

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Margherita Pizza',
    description: 'A traditional Italian pizza with fresh basil, mozzarella, and tomatoes',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: 'medium',
    cuisine: 'Italian',
    dietary: ['vegetarian'],
    ingredients: [
      '00 flour',
      'Fresh mozzarella',
      'San Marzano tomatoes',
      'Fresh basil',
      'Olive oil',
      'Salt'
    ],
    instructions: [
      'Prepare the pizza dough',
      'Roll out the dough',
      'Add tomato sauce',
      'Top with fresh mozzarella',
      'Bake at 450°F for 12-15 minutes',
      'Garnish with fresh basil'
    ],
    author: {
      id: '1',
      name: 'Chef Mario',
      avatar: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f'
    },
    ratings: [5, 4, 5, 5],
    comments: [
      {
        id: '1',
        text: 'Perfect recipe! Just like in Naples.',
        author: {
          id: '2',
          name: 'Julia',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
        },
        createdAt: '2024-03-20T10:00:00Z'
      }
    ],
    createdAt: '2024-03-19T15:00:00Z',
    updatedAt: '2024-03-19T15:00:00Z'
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Chef Mario',
    email: 'chef.mario@example.com',
    avatar: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f',
    bio: 'Professional chef with 15 years of experience in Italian cuisine',
    favorites: ['2', '3'],
    recipes: ['1']
  }
];