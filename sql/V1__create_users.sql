
create table movieapp_users(
 id int primary key auto_increment,
 name varchar(100) not null,
 email varchar(100) not null,
 password varchar(100) not null,
 role varchar(10) not null default'USER'
);

select * from movieapp_users 
