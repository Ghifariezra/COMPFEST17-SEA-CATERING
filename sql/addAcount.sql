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
        '$2b$10$2Y9rCW0Bz1PeXU7H9cSgIuxVvGRCEX9oYeLk5Aiy6GH3yU/3Ld5mu', -- 'admin123'
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
        '$2b$10$H1xtz0ZLZBC1VTLsTgBP4OAvb0UwhqbP9JuSx1TfFzq90nPC6C49a', -- 'user123'
        'Regular User',
        '089876543210',
        'admin'
    );

ALTER TABLE users ADD COLUMN role VARCHAR(20) DEFAULT 'user';
UPDATE users SET role = 'admin' WHERE id = 1;