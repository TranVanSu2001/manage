create table Class(
id varchar(255) primary key,
name varchar(255),
numberOfStudent int
);

create table Subject(
id varchar(255) primary key,
name varchar(255),
classID varchar(255),
foreign key(classID) references Class(id),
startTime varchar(255),
endTime varchar(255)
);

create table Student(
id varchar(255) primary key,
name varchar(255),
age int,
email varchar(255)
);

create table ClassStudent(
id varchar(255) primary key,
classID varchar(255),
foreign key (classID) references Subject(id),
studentID varchar(255) ,
foreign key (studentID) references Student(id)
);
