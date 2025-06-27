-- Create database
CREATE DATABASE sea_catering;

-- Switch to database (opsional saat di pgAdmin atau psql CLI)
-- \c sea_catering;

-- Table: users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    phone VARCHAR(30),
    role VARCHAR(20) DEFAULT 'customer', -- Tambahan berdasarkan diagram
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: meal_plans
CREATE TABLE meal_plans (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    price INTEGER NOT NULL,
    duration VARCHAR(20) NOT NULL,
    servings INTEGER NOT NULL,
    category VARCHAR(20) NOT NULL CHECK (
        category IN (
            'weight-loss',
            'muscle-gain',
            'balanced',
            'keto',
            'vegetarian'
        )
    ),
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

-- Table: subscriptions
CREATE TABLE subscriptions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    address TEXT NOT NULL,
    plan_id VARCHAR(10) NOT NULL,
    meal_types TEXT[] NOT NULL,
    delivery_days_id VARCHAR(20) NOT NULL,
    custom_days TEXT[],
    allergies TEXT,
    total_price INTEGER NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

-- Relational constraints
CONSTRAINT fk_user_subscription FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_plan_subscription FOREIGN KEY (plan_id) REFERENCES meal_plans(id) ON DELETE CASCADE
);

-- Table: testimonials
CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    name VARCHAR(100) NOT NULL,
    "from" VARCHAR(100) NOT NULL,
    feedback TEXT NOT NULL,
    status VARCHAR(100) NOT NULL,
    rate INTEGER NOT NULL CHECK (rate BETWEEN 0 AND 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

-- Optional relation
CONSTRAINT fk_user_testimonial FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);