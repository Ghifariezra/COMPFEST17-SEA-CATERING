-- Admin Account
INSERT INTO
    users (
        email,
        password,
        full_name,
        phone
    )
VALUES (
        'admin@site.com',
        '$2b$10$LV0Mkn893O.zVlW245B4JeO09c4.C0kaqhZfJFRKg5nEim2ceC4XK', -- 'admin123'
        'Admin User',
        '081234567890'
    );

-- Regular User Account
INSERT INTO
    users (
        email,
        password,
        full_name,
        phone
    )
VALUES (
        'user@site.com',
        '$2b$10$HlUvy4D4pl7Cs9UhpfG82uULQM6ESHNY8vdbtk0P6wbBlB35Gs47q', -- 'user123'
        'Regular User',
        '089876543210',
        'admin'
    );

ALTER TABLE users ADD COLUMN role VARCHAR(20) DEFAULT 'user';
UPDATE users SET role = 'admin' WHERE id = 1;

UPDATE users
SET
    password = '$2b$10$HlUvy4D4pl7Cs9UhpfG82uULQM6ESHNY8vdbtk0P6wbBlB35Gs47q'
WHERE
    email = 'user@site.com';
UPDATE users
SET
    password = '$2b$10$LV0Mkn893O.zVlW245B4JeO09c4.C0kaqhZfJFRKg5nEim2ceC4XK'
WHERE
    email = 'admin@site.com';