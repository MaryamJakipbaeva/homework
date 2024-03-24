drop database if exists todo;

create database todo;
 use todo;

 create table desk(
    id serial primary key a,
    message text not null
 );

 insert into desk (description) values ('My test task');
 insert into desk (description) values ('My another task');