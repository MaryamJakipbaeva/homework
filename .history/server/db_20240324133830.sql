drop database if exists todo;

create database todo;
 use todo;

 create table desk(
    id int primary key auto_increment,
    message text not null
 );

 insert into desk (description) values ('My test task');
 insert into desk (description) values ('My another task');