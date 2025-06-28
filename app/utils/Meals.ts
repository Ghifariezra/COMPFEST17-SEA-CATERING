// Meal plans
const mealPlans = [
    {
        id: "1",
        name: "Balanced Nutrition Plan",
        price: 299000,
    },
    {
        id: "2",
        name: "Weight Loss Accelerator",
        price: 279000,
    },
    {
        id: "3",
        name: "Muscle Building Pro",
        price: 349000,
    },
    {
        id: "4",
        name: "Keto Lifestyle",
        price: 329000,
    },
    {
        id: "5",
        name: "Plant-Based Power",
        price: 259000,
    },
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


export { mealPlans, mealTypes, deliveryDaysOptions, weekDays };