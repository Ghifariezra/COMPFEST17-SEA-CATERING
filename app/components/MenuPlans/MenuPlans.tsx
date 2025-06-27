"use client";
import { useState } from "react";
import { Star, Clock, Users, Calendar, Utensils, X } from "lucide-react";
import Image from "next/image";
import { checkLogin } from "../../utils/auth";

interface MealPlan {
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

const mealPlans: MealPlan[] = [
  {
    id: "1",
    name: "Balanced Nutrition Plan",
    description: "Perfect balance of proteins, carbs, and healthy fats for overall wellness",
    price: 299000,
    duration: "7 days",
    servings: 21,
    category: "balanced",
    dietary: ["Gluten-Free Option", "Dairy-Free Option"],
    rating: 4.8,
    reviews: 124,
    calories: "1800-2000",
    prep_time: "15 min",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400",
    meals: ["Grilled Salmon & Quinoa", "Mediterranean Bowl", "Lean Protein Stir-fry"],
  },
  {
    id: "2",
    name: "Weight Loss Accelerator",
    description: "Low-calorie, high-protein meals designed to boost metabolism",
    price: 279000,
    duration: "7 days",
    servings: 21,
    category: "weight-loss",
    dietary: ["Low-Carb", "High-Protein"],
    rating: 4.9,
    reviews: 89,
    calories: "1200-1500",
    prep_time: "12 min",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
    meals: ["Grilled Chicken Salad", "Zucchini Noodles", "Protein Power Bowl"],
  },
  {
    id: "3",
    name: "Muscle Building Pro",
    description: "High-protein meals with complex carbs for muscle growth and recovery",
    price: 349000,
    duration: "7 days",
    servings: 21,
    category: "muscle-gain",
    dietary: ["High-Protein", "Post-Workout"],
    rating: 4.7,
    reviews: 156,
    calories: "2200-2500",
    prep_time: "18 min",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
    meals: ["Protein-Packed Bowls", "Lean Beef & Sweet Potato", "Recovery Smoothies"],
  },
  {
    id: "4",
    name: "Keto Lifestyle",
    description: "Low-carb, high-fat meals to maintain ketosis and energy",
    price: 329000,
    duration: "7 days",
    servings: 21,
    category: "keto",
    dietary: ["Keto-Friendly", "Low-Carb"],
    rating: 4.6,
    reviews: 73,
    calories: "1600-1900",
    prep_time: "20 min",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400",
    meals: ["Avocado & Salmon", "Cauliflower Rice Bowl", "Keto Fat Bombs"],
  },
  {
    id: "5",
    name: "Plant-Based Power",
    description: "Nutritious vegetarian meals packed with plant proteins and vitamins",
    price: 259000,
    duration: "7 days",
    servings: 21,
    category: "vegetarian",
    dietary: ["Vegetarian", "Plant-Based"],
    rating: 4.8,
    reviews: 92,
    calories: "1700-2000",
    prep_time: "16 min",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
    meals: ["Buddha Bowls", "Lentil Power Plates", "Quinoa Superfood Salads"],
  },
];

const categoryColors = {
  "weight-loss": "bg-red-100 text-red-800",
  "muscle-gain": "bg-blue-100 text-blue-800",
  balanced: "bg-green-100 text-green-800",
  keto: "bg-purple-100 text-purple-800",
  vegetarian: "bg-orange-100 text-orange-800",
};

function formatPrice(price: number): string {
  const formatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  return formatted.replace("IDR", "Rp");
}

function MealPlanCard({ plan, onSeeMore }: { plan: MealPlan; onSeeMore: (plan: MealPlan) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <Image src={plan.image} alt={plan.name} width={400} height={192} className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[plan.category]}`}>{plan.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{plan.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{plan.description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-green-600">{formatPrice(plan.price)}</span>
          <span className="text-sm text-gray-500">({plan.reviews} reviews)</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{plan.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{plan.servings} servings</span>
          </div>
          <div className="flex items-center space-x-2">
            <Utensils className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{plan.calories} cal</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{plan.prep_time}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {plan.dietary.slice(0, 2).map((diet, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                {diet}
              </span>
            ))}
            {plan.dietary.length > 2 && <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">+{plan.dietary.length - 2} more</span>}
          </div>
        </div>

        {isExpanded && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Sample Meals:</h4>
            <ul className="space-y-1">
              {plan.meals.map((meal, index) => (
                <li key={index} className="text-sm text-gray-600">
                  • {meal}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex space-x-3">
          <button onClick={() => setIsExpanded(!isExpanded)} className="flex-1 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors duration-200 cursor-pointer">
            {isExpanded ? "Show Less" : "Quick Preview"}
          </button>
          <button onClick={() => onSeeMore(plan)} className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 cursor-pointer">
            See More Details
          </button>
        </div>
      </div>
    </div>
  );
}

function MealPlanModal({ plan, isOpen, onClose }: { plan: MealPlan | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !plan) return null;
  const [isLoading, setIsLoading] = useState(false);
  const handleAddToCart = async () => {
    const isLoggedIn = await checkLogin();
    if (!isLoggedIn) {
      sessionStorage.setItem("afterLoginRedirect", "/subscription");
      window.location.href = "/get-started";
      return;
    }

    // TODO: Add logic to add to cart
    alert(`Added "${plan.name}" to cart!`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <Image src={plan.image} alt={plan.name} width={800} height={256} className="w-full h-64 object-cover rounded-t-xl" priority />
          <button onClick={onClose} className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[plan.category]}`}>{plan.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-lg font-semibold">{plan.rating}</span>
              <span className="text-gray-500">({plan.reviews} reviews)</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{plan.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Duration</span>
              </div>
              <span className="text-gray-600">{plan.duration}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Servings</span>
              </div>
              <span className="text-gray-600">{plan.servings} meals</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Utensils className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Calories</span>
              </div>
              <span className="text-gray-600">{plan.calories} per day</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Prep Time</span>
              </div>
              <span className="text-gray-600">{plan.prep_time} avg</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Dietary Options</h3>
            <div className="flex flex-wrap gap-2">
              {plan.dietary.map((diet, index) => (
                <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {diet}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Sample Meals Included</h3>
            <div className="grid gap-2">
              {plan.meals.map((meal, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Utensils className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{meal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-bold text-green-600">{formatPrice(plan.price)}</span>
              <span className="text-gray-500">for {plan.duration}</span>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isLoading}
              className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer
    ${isLoading ? "bg-green-300 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 text-white"}
  `}
            >
              {isLoading ? "Adding..." : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MenuPlans() {
  const [selectedPlan, setSelectedPlan] = useState<MealPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSeeMore = (plan: MealPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mealPlans.map((plan) => (
          <MealPlanCard key={plan.id} plan={plan} onSeeMore={handleSeeMore} />
        ))}
      </div>

      <MealPlanModal plan={selectedPlan} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
