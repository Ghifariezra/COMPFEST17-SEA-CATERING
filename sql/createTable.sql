-- Active: 1743635926160@@localhost@5432@sea_catering

-- Create database
CREATE DATABASE sea_catering;

-- Create Table: subscriptions, meal_plans & testimonials
CREATE TABLE subscriptions (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    address TEXT NOT NULL,
    plan_id VARCHAR(20) NOT NULL, -- diet, protein, royal
    meal_types TEXT [] NOT NULL, -- array of breakfast/lunch/dinner
    delivery_days_id VARCHAR(20) NOT NULL, -- weekdays, weekends, everyday, custom
    custom_days TEXT [], -- array of monday..sunday (only used if delivery_days_id = custom)
    allergies TEXT, -- optional
    total_price INTEGER NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE meal_plans (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    price INTEGER NOT NULL,
    duration VARCHAR(20) NOT NULL,
    servings INTEGER NOT NULL,
    category VARCHAR(20) CHECK (
        category IN (
            'weight-loss',
            'muscle-gain',
            'balanced',
            'keto',
            'vegetarian'
        )
    ) NOT NULL,
    dietary TEXT [] NOT NULL,
    rating NUMERIC(2, 1) NOT NULL CHECK (
        rating >= 0
        AND rating <= 5
    ),
    reviews INTEGER NOT NULL,
    calories VARCHAR(20) NOT NULL,
    prep_time VARCHAR(20) NOT NULL,
    image TEXT NOT NULL,
    meals TEXT [] NOT NULL
);
CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    "from" VARCHAR(100) NOT NULL,
    feedback TEXT NOT NULL,
    status VARCHAR(100) NOT NULL,
    rate INTEGER NOT NULL CHECK (rate BETWEEN 0 AND 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);