export interface MealPlan {
    id: string;
    name: string;
    description: string;
    price: number;
    duration: string;
    servings: number;
    category: "weight-loss" | "muscle-gain" | "balanced" | "keto" | "vegetarian";
    dietary: string[];
    rating: number;
    reviews: number;
    calories: string;
    prep_time: string;
    image: string;
    meals: string[];
}