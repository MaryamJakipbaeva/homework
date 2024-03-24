drop database if exists todo;

create database todo;
 use todo;

 create table desk(
    id int primary key auto_increment,
    description varchar(255) not null
 );

 insert into task (description)