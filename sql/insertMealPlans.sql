-- Active: 1743635926160@@localhost@5432@sea_catering@public

INSERT INTO
    meal_plans (
        id,
        name,
        description,
        price,
        duration,
        servings,
        category,
        dietary,
        rating,
        reviews,
        calories,
        prep_time,
        image,
        meals
    )
VALUES (
        '1',
        'Balanced Nutrition Plan',
        'Perfect balance of proteins, carbs, and healthy fats for overall wellness',
        299000,
        '7 days',
        21,
        'balanced',
        ARRAY[
            'Gluten-Free Option',
            'Dairy-Free Option'
        ],
        4.8,
        124,
        '1800-2000',
        '15 min',
        'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400',
        ARRAY[
            'Grilled Salmon & Quinoa',
            'Mediterranean Bowl',
            'Lean Protein Stir-fry'
        ]
    ),
    (
        '2',
        'Weight Loss Accelerator',
        'Low-calorie, high-protein meals designed to boost metabolism',
        279000,
        '7 days',
        21,
        'weight-loss',
        ARRAY['Low-Carb', 'High-Protein'],
        4.9,
        89,
        '1200-1500',
        '12 min',
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
        ARRAY[
            'Grilled Chicken Salad',
            'Zucchini Noodles',
            'Protein Power Bowl'
        ]
    ),
    (
        '3',
        'Muscle Building Pro',
        'High-protein meals with complex carbs for muscle growth and recovery',
        349000,
        '7 days',
        21,
        'muscle-gain',
        ARRAY[
            'High-Protein',
            'Post-Workout'
        ],
        4.7,
        156,
        '2200-2500',
        '18 min',
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400',
        ARRAY[
            'Protein-Packed Bowls',
            'Lean Beef & Sweet Potato',
            'Recovery Smoothies'
        ]
    ),
    (
        '4',
        'Keto Lifestyle',
        'Low-carb, high-fat meals to maintain ketosis and energy',
        329000,
        '7 days',
        21,
        'keto',
        ARRAY['Keto-Friendly', 'Low-Carb'],
        4.6,
        73,
        '1600-1900',
        '20 min',
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400',
        ARRAY[
            'Avocado & Salmon',
            'Cauliflower Rice Bowl',
            'Keto Fat Bombs'
        ]
    ),
    (
        '5',
        'Plant-Based Power',
        'Nutritious vegetarian meals packed with plant proteins and vitamins',
        259000,
        '7 days',
        21,
        'vegetarian',
        ARRAY['Vegetarian', 'Plant-Based'],
        4.8,
        92,
        '1700-2000',
        '16 min',
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
        ARRAY[
            'Buddha Bowls',
            'Lentil Power Plates',
            'Quinoa Superfood Salads'
        ]
    );