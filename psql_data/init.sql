CREATE TABLE film_table
(
    id          SERIAL PRIMARY KEY,
    title       TEXT,
    description TEXT,
    magnet_url  TEXT,
    pic_url     TEXT
);
insert into film_table (title, description, magnet_url, pic_url)
values ('Fight Club',
        'Сотрудник страховой компании страдает хронической бессонницей и отчаянно пытается вырваться из мучительно скучной жизни. Однажды в очередной командировке он встречает некоего Тайлера Дёрдена — харизматического торговца мылом с извращенной философией. Тайлер уверен, что самосовершенствование — удел слабых, а единственное, ради чего стоит жить — саморазрушение.',
        'magnet:?xt=urn:btih:0FACFB2D11C9A8F15281A909B45084E6425EF2F0&dn=Fight%20Club&tr=http://track.one:1234/announce&tr=udp://track.two:80',
        'media/fight_club_pic.jpg');
insert into film_table (title, description, magnet_url, pic_url)
values ('The Saw',
        'Два незнакомца просыпаются в подвале, где лежит человек с простреленной головой и пистолетом в руке. Они прикованы к стенам цепями и не помнят, как тут оказались. Голос с найденной плёнки велит одному из них выбрать — убить товарища по несчастью или дать умереть своим жене и дочери. Так начинается жестокая игра, у невольных участников которой есть всего лишь 7 часов.',
        'magnet:?xt=urn:btih:65c8a3ed692735aa36be94aaa851fb6af9adce56&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce',
        'media/the_saw_pic.jpeg');