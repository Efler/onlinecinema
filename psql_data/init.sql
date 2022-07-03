CREATE TABLE film_table(
  id SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  pic_url TEXT
);
insert into film_table (name, description, pic_url) values ('Fight Club', 'Best film', 'media/fight_club_pic.jpg');
insert into film_table (name, description, pic_url) values ('The Saw', 'Reznya bro', 'media/the_saw_pic.jpeg');