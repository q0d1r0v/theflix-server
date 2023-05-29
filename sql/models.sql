-- Models of Postgresql database
CREATE DATABASE theflix_db;

CREATE TABLE users(
    id SERIAL,
    full_name TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TABLE categories(
    id SERIAL,
    name TEXT NOT NULL,
    key TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE movie_posts(
    id SERIAL,
    name TEXT,
    country TEXT NOT NULL,
    movie_date TEXT NOT NULL,
    category_name TEXT NOT NULL,
    language TEXT NOT NULL,
    duration TEXT NOT NULL,
    movie_file_name TEXT NOT NULL,
    cover_image_file_name TEXT NOT NULL,
    trailer TEXT,
    rating TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);