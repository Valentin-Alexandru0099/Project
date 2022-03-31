DROP TABLE IF EXISTS public.users;
DROP TABLE IF EXISTS public.user_stats;
DROP TABLE IF EXISTS public.race;
DROP TABLE IF EXISTS public.upgrade;

CREATE TABLE public.users(
    id SERIAL PRIMARY KEY,
    submision_time timestamp without time zone NOT NULL,
    email text NOT NULL,
    username text NOT NULL,
    password text NOT NULL
);

CREATE TABLE public.user_stats(
    id SERIAL PRIMARY KEY,
    user_id integer NOT NULL,
    race integer NOT NULL,
    money integer NOT NULL,
    click_power integer NOT NULL
);

CREATE TABLE public.race(
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    b1_name text NOT NULL,
    b2_name text NOT NULL,
    b3_name text NOT NULL,
    b4_name text NOT NULL,
    b5_name text NOT NULL,
    b6_name text NOT NULL,
    b7_name text NOT NULL,
    b8_name text NOT NULL,
    b9_name text NOT NULL,
    b10_name text NOT NULL
);

CREATE TABLE public.upgrades(
    id SERIAL PRIMARY KEY,
    user_id integer NOT NULL,
    b1_updrage integer NOT NULL,
    b2_updrage integer NOT NULL,
    b3_updrage integer NOT NULL,
    b4_updrage integer NOT NULL,
    b5_updrage integer NOT NULL,
    b6_updrage integer NOT NULL,
    b7_updrage integer NOT NULL,
    b8_updrage integer NOT NULL,
    b9_updrage integer NOT NULL,
    b10_updrage integer NOT NULL
);