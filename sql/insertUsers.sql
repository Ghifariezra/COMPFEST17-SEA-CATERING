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

-- Tambahan user dari contentTestimoni

INSERT INTO users (email, password, full_name, phone, role)
VALUES
  ('sarah.dewi1@site.com', '$2b$10$HlUvy4D4pl7Cs9UhpfG82uULQM6ESHNY8vdbtk0P6wbBlB35Gs47q', 'Sarah Dewi', '081111111111', 'customer'),
  ('linda.sari@site.com',  '$2b$10$HlUvy4D4pl7Cs9UhpfG82uULQM6ESHNY8vdbtk0P6wbBlB35Gs47q', 'Linda Sari', '081111111112', 'customer'),
  ('nesya.sari@site.com',  '$2b$10$HlUvy4D4pl7Cs9UhpfG82uULQM6ESHNY8vdbtk0P6wbBlB35Gs47q', 'Nesya Sari', '081111111113', 'customer'),
  ('sarah.dewi2@site.com', '$2b$10$HlUvy4D4pl7Cs9UhpfG82uULQM6ESHNY8vdbtk0P6wbBlB35Gs47q', 'Sarah Dewi', '081111111114', 'customer'),
  ('audrey.sari@site.com', '$2b$10$HlUvy4D4pl7Cs9UhpfG82uULQM6ESHNY8vdbtk0P6wbBlB35Gs47q', 'Audrey Sari', '081111111115', 'customer'),
  ('david@site.com',       '$2b$10$HlUvy4D4pl7Cs9UhpfG82uULQM6ESHNY8vdbtk0P6wbBlB35Gs47q', 'David',      '081111111116', 'customer');