create table Application(
    cip_code  char(6) not null,
    application_id  int not null,
    apply_date  date,
    status text not null CHECK (status IN ('waiting','admitted','rejected')),
    UNIQUE(cip_code, application_id),
    primary key (cip_code, application_id),
    FOREIGN key (cip_code) references Program(cip_code),
    FOREIGN key (application_id) references Applicant(applicant_id)
);


create table Applicant (
   applicant_id int primary key,
   full_name varchar(100) not null,
   email varchar(100) not null unique
);

create table Program (
   cip_code char(6) primary key,
   iped_unit_id int not null,
   name varchar(100) not null,
   degree_level text not null check (degree_level in ('bachelor','master','doctorate')),
   tuition_usd DECIMAL(10,2) not null,
   application_deadline date not null,
   FOREIGN key (iped_unit_id) references University(iped_unit_id)
);

create table University (
    iped_unit_id int primary key,
    name varchar(100) not null,
    us_news_ranking int,
    website_url varchar(255) not null unique

);

create table Inquiry(
    inquiry_id int primary key,
    cip_code char(6) not null,
    message text,
    submit_date datetime,
    FOREIGN key (cip_code) references Program(cip_code)
);