-- Active: 1743635926160@@localhost@5432@sea_catering@public

-- INSERT Admin Account
INSERT INTO
    users (
        email,
        password,
        full_name,
        phone,
        role
    )
VALUES (
        'admin@site.com',
        '$2b$10$LV0Mkn893O.zVlW245B4JeO09c4.C0kaqhZfJFRKg5nEim2ceC4XK', -- 'admin123'
        'Admin User',
        '081234567890',
        'admin'
    );

-- INSERT Regular User Account
INSERT INTO
    users (
        email,
        password,
        full_name,
        phone,
        role
    )
VALUES (
        'user@site.com',
        '$2b$10$HlUvy4D4pl7Cs9UhpfG82uULQM6ESHNY8vdbtk0P6wbBlB35Gs47q', -- 'user123'
        'Regular User',
        '089876543210',
        'customer'
    );