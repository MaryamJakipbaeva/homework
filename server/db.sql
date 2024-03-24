drop database if exists todo;

create database todo;
 use todo;

 create table desk(
    id serial primary key,
    message text not null
 );

 insert into desk (message) values ('My test task');
 insert into desk (message) values ('My another task');