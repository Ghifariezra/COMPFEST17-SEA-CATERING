'use client';
import { useState } from "react";
import { User, Phone, CreditCard, Calendar, Utensils, MapPin, AlertCircle, CheckCircle } from "lucide-react";

// Plan types
const planTypes = [
  { id: "diet", name: "Diet Plan", price: 30000 },
  { id: "protein", name: "Protein Plan", price: 40000 },
  { id: "royal", name: "Royal Plan", price: 60000 },
];

// Meal types
const mealTypes = [
  { id: "breakfast", name: "Breakfast" },
  { id: "lunch", name: "Lunch" },
  { id: "dinner", name: "Dinner" },
];

// Delivery days options
const deliveryDaysOptions = [
  { id: "weekdays", name: "Monday to Friday (5 days)", days: 5 },
  { id: "weekends", name: "Saturday + Sunday (2 days)", days: 2 },
  { id: "everyday", name: "All 7 days of the week", days: 7 },
  { id: "custom", name: "Custom Days", days: 0 },
];

// Custom days
const weekDays = [
  { id: "monday", name: "Monday" },
  { id: "tuesday", name: "Tuesday" },
  { id: "wednesday", name: "Wednesday" },
  { id: "thursday", name: "Thursday" },
  { id: "friday", name: "Friday" },
  { id: "saturday", name: "Saturday" },
  { id: "sunday", name: "Sunday" },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(price)
    .replace("IDR", "Rp");
}

export default function SubscriptionPlans() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    planSelection: "",
    mealTypes: [] as string[],
    deliveryDays: "",
    customDays: [] as string[],
    allergies: "",
    address: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate total price
  const calculateTotalPrice = () => {
    const selectedPlan = planTypes.find((plan) => plan.id === formData.planSelection);
    if (!selectedPlan) return 0;

    const mealTypesCount = formData.mealTypes.length;
    if (mealTypesCount === 0) return 0;

    let deliveryDaysCount = 0;
    if (formData.deliveryDays === "custom") {
      deliveryDaysCount = formData.customDays.length;
    } else {
      const selectedDeliveryOption = deliveryDaysOptions.find((option) => option.id === formData.deliveryDays);
      deliveryDaysCount = selectedDeliveryOption?.days || 0;
    }

    // Formula: (Plan Price) × (Number of Meal Types Selected) × (Number of Delivery Days Selected) × 4.3
    return selectedPlan.price * mealTypesCount * deliveryDaysCount * 4.3;
  };

  // Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.planSelection) {
      newErrors.planSelection = "Please select a plan";
    }

    if (formData.mealTypes.length === 0) {
      newErrors.mealTypes = "Please select at least one meal type";
    }

    if (!formData.deliveryDays) {
      newErrors.deliveryDays = "Please select delivery days";
    }

    if (formData.deliveryDays === "custom" && formData.customDays.length === 0) {
      newErrors.customDays = "Please select at least one custom day";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Delivery address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitted(true);
      // Here you would normally send data to backend
      console.log("Subscription Data:", formData);
      console.log("Total Price:", calculateTotalPrice());
    }
  };

  const handleMealTypeChange = (mealTypeId: string) => {
    setFormData((prev) => ({
      ...prev,
      mealTypes: prev.mealTypes.includes(mealTypeId) ? prev.mealTypes.filter((id) => id !== mealTypeId) : [...prev.mealTypes, mealTypeId],
    }));
  };

  const handleCustomDayChange = (dayId: string) => {
    setFormData((prev) => ({
      ...prev,
      customDays: prev.customDays.includes(dayId) ? prev.customDays.filter((id) => id !== dayId) : [...prev.customDays, dayId],
    }));
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-800 mb-4">Subscription Submitted Successfully!</h2>
          <p className="text-green-700 mb-6">Thank you for subscribing to SEA Catering. We&apos;ll contact you shortly to confirm your order.</p>
          <div className="bg-white rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Order Summary:</h3>
            <p className="text-gray-600">Plan: {planTypes.find((p) => p.id === formData.planSelection)?.name}</p>
            <p className="text-gray-600">Meal Types: {formData.mealTypes.length} selected</p>
            <p className="text-gray-600">Total: {formatPrice(calculateTotalPrice())}</p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                planSelection: "",
                mealTypes: [],
                deliveryDays: "",
                customDays: [],
                allergies: "",
                address: "",
              });
            }}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Create New Subscription
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {/* Personal Information */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <User className="w-6 h-6 mr-2 text-green-600" />
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.name ? "border-red-500" : "border-gray-300"}`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Address <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.address}
              onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
              rows={3}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.address ? "border-red-500" : "border-gray-300"}`}
              placeholder="Enter your complete delivery address"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.address}
              </p>
            )}
          </div>
        </div>

        {/* Plan Selection */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CreditCard className="w-6 h-6 mr-2 text-green-600" />
            Plan Selection <span className="text-red-500">*</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {planTypes.map((plan) => (
              <div key={plan.id} className="relative">
                <input type="radio" id={plan.id} name="planSelection" value={plan.id} checked={formData.planSelection === plan.id} onChange={(e) => setFormData((prev) => ({ ...prev, planSelection: e.target.value }))} className="sr-only" />
                <label
                  htmlFor={plan.id}
                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${formData.planSelection === plan.id ? "border-green-500 bg-green-50 text-green-900" : "border-gray-200 hover:border-green-300"}`}
                >
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">{plan.name}</h3>
                    <p className="text-xl font-bold text-green-600 mt-2">
                      {formatPrice(plan.price)}
                      <span className="text-sm text-gray-500">/meal</span>
                    </p>
                  </div>
                </label>
              </div>
            ))}
          </div>
          {errors.planSelection && (
            <p className="text-red-500 text-sm mt-2 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.planSelection}
            </p>
          )}
        </div>

        {/* Meal Types */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Utensils className="w-6 h-6 mr-2 text-green-600" />
            Meal Types <span className="text-red-500">*</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mealTypes.map((meal) => (
              <div key={meal.id} className="relative">
                <input type="checkbox" id={meal.id} checked={formData.mealTypes.includes(meal.id)} onChange={() => handleMealTypeChange(meal.id)} className="sr-only" />
                <label
                  htmlFor={meal.id}
                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-all text-center ${formData.mealTypes.includes(meal.id) ? "border-green-500 bg-green-50 text-green-900" : "border-gray-200 hover:border-green-300"}`}
                >
                  <span className="font-medium">{meal.name}</span>
                </label>
              </div>
            ))}
          </div>
          {errors.mealTypes && (
            <p className="text-red-500 text-sm mt-2 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.mealTypes}
            </p>
          )}
        </div>

        {/* Delivery Days */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-green-600" />
            Delivery Days <span className="text-red-500">*</span>
          </h2>

          <div className="space-y-3">
            {deliveryDaysOptions.map((option) => (
              <div key={option.id} className="relative">
                <input
                  type="radio"
                  id={option.id}
                  name="deliveryDays"
                  value={option.id}
                  checked={formData.deliveryDays === option.id}
                  onChange={(e) => setFormData((prev) => ({ ...prev, deliveryDays: e.target.value }))}
                  className="sr-only"
                />
                <label
                  htmlFor={option.id}
                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${formData.deliveryDays === option.id ? "border-green-500 bg-green-50 text-green-900" : "border-gray-200 hover:border-green-300"}`}
                >
                  <span className="font-medium">{option.name}</span>
                </label>
              </div>
            ))}
          </div>

          {formData.deliveryDays === "custom" && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-3">Select Custom Days:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {weekDays.map((day) => (
                  <div key={day.id} className="relative">
                    <input type="checkbox" id={day.id} checked={formData.customDays.includes(day.id)} onChange={() => handleCustomDayChange(day.id)} className="sr-only" />
                    <label
                      htmlFor={day.id}
                      className={`block p-2 rounded border cursor-pointer transition-all text-center text-sm ${
                        formData.customDays.includes(day.id) ? "border-green-500 bg-green-100 text-green-900" : "border-gray-200 hover:border-green-300"
                      }`}
                    >
                      {day.name}
                    </label>
                  </div>
                ))}
              </div>
              {errors.customDays && (
                <p className="text-red-500 text-sm mt-2 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.customDays}
                </p>
              )}
            </div>
          )}

          {errors.deliveryDays && (
            <p className="text-red-500 text-sm mt-2 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.deliveryDays}
            </p>
          )}
        </div>

        {/* Allergies */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Allergies & Dietary Restrictions</h2>

          <textarea
            value={formData.allergies}
            onChange={(e) => setFormData((prev) => ({ ...prev, allergies: e.target.value }))}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Please list any allergies or dietary restrictions (optional)"
          />
        </div>

        {/* Price Summary */}
        <div className="bg-green-50 rounded-xl border border-green-200 p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Price Summary</h2>

          {formData.planSelection && formData.mealTypes.length > 0 && (formData.deliveryDays !== "custom" || formData.customDays.length > 0) ? (
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>Plan: {planTypes.find((p) => p.id === formData.planSelection)?.name}</span>
                <span>{formatPrice(planTypes.find((p) => p.id === formData.planSelection)?.price || 0)}/meal</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Meal Types Selected:</span>
                <span>{formData.mealTypes.length}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Delivery Days:</span>
                <span>{formData.deliveryDays === "custom" ? `${formData.customDays.length} days` : `${deliveryDaysOptions.find((d) => d.id === formData.deliveryDays)?.days} days`}</span>
              </div>
              <div className="border-t border-green-200 pt-2">
                <div className="flex justify-between text-lg font-bold text-green-800">
                  <span>Monthly Total:</span>
                  <span>{formatPrice(calculateTotalPrice())}</span>
                </div>
                <p className="text-sm text-green-600 mt-1">Formula: Plan Price × Meal Types × Delivery Days × 4.3 weeks</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">Please complete the form to see price calculation</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button onClick={handleSubmit} className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
            Subscribe Now
          </button>
          <p className="text-sm text-gray-500 mt-2">
            <span className="text-red-500">*</span> Fields marked with asterisk are required
          </p>
        </div>
      </div>
    </div>
  );
}
