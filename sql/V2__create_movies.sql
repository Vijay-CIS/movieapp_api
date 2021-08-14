create table movieapp_movies(
 id int primary key auto_increment,
 title varchar(100) not null,
 image_url varchar(100) not null,
 language varchar(100) not null
);

select * from movieapp_movies
