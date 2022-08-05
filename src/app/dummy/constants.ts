import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
    providedIn: 'root'
})
export class ContactsService implements InMemoryDbService {

    constructor() { }
    createDb() {

        let contacts = [
            {
                id: "1",
                name: "Ashutosh Malik",
                designation: "Senior Software Engineer",
                bio: "I am a full stack developer. I have worked on NodeJS (Express, Hapy), AngularJS, ReactJS, VueJS, MongoDB, MySql, GraphQL. I also have experience with AWS (EC2, Lamda functions, S3 bucket for storage)",
                email : ["am.ashutoshmalik@gmail.com", "ashutoshmalik.am@gmail.com"],
                dial: "google meets",
                meetings: "teams meeings",
                phone: ["+919779507577", "+919779507577"],
                social: ["instagram"]
            },
            {
                id: "2",
                name: "Ankit Malik",
                designation: "Senior Software Engineer",
                bio: "I am a full stack developer. I have worked on NodeJS (Express, Hapy), AngularJS, ReactJS, VueJS, MongoDB, MySql, GraphQL. I also have experience with AWS (EC2, Lamda functions, S3 bucket for storage)",
                email : ["am.ankithmalik@gmail.com", "ankithmalik.am@gmail.com"],
                dial: "google meets 1",
                meetings: "teams meeings 1",
                phone: ["+919779507570", "+919779507570"],
                social: ["instagram", "facebook"]
            },
            {
                id: "3",
                name: "Gabi Malik",
                designation: "Designer",
                bio: "I am a full stack developer. I have worked on NodeJS (Express, Hapy), AngularJS, ReactJS, VueJS, MongoDB, MySql, GraphQL. I also have experience with AWS (EC2, Lamda functions, S3 bucket for storage)",
                email : ["am.gabi@gmail.com", "gabi.am@gmail.com"],
                dial: "google meets 2",
                meetings: "teams meeings 2",
                phone: ["+919779507571", "+919779507571"],
                social: ["instagram", "facebook", "twitter"]
            },
            {
                id: "4",
                name: "Vikrant Malik",
                designation: "Team Lead",
                bio: "I am a full stack developer. I have worked on NodeJS (Express, Hapy), AngularJS, ReactJS, VueJS, MongoDB, MySql, GraphQL. I also have experience with AWS (EC2, Lamda functions, S3 bucket for storage)",
                email : ["am.Vikrant@gmail.com", "Vikrant.am@gmail.com"],
                dial: "google meets 3",
                meetings: "teams meeings 3",
                phone: ["+919779507579", "+919779507579"],
                social: []
            },
            {
                id: "5",
                name: "Dhanu Malik",
                designation: "Business Analyst",
                bio: "I am a full stack developer. I have worked on NodeJS (Express, Hapy), AngularJS, ReactJS, VueJS, MongoDB, MySql, GraphQL. I also have experience with AWS (EC2, Lamda functions, S3 bucket for storage)",
                email : ["am.dhanu@gmail.com", "dhanu.am@gmail.com"],
                dial: "google meets 23",
                meetings: "teams meeings 23",
                phone: ["+919779507509", "+919779507009"],
                social: ["instagram"]
            },
            {
                id: "6",
                name: "Arun Malik",
                designation: "Senior Software Engineer",
                bio: "I am a full stack developer. I have worked on NodeJS (Express, Hapy), AngularJS, ReactJS, VueJS, MongoDB, MySql, GraphQL. I also have experience with AWS (EC2, Lamda functions, S3 bucket for storage)",
                email : ["am.arua@gmail.com", "arua.am@gmail.com"],
                dial: "google meets",
                meetings: "teams meeings",
                phone: ["+9197795098577", "+9197795098577"],
                social: []
            },
            {
                id: "7",
                name: "Sandy Malik",
                designation: "Senior Software Engineer",
                bio: "I am a full stack developer. I have worked on NodeJS (Express, Hapy), AngularJS, ReactJS, VueJS, MongoDB, MySql, GraphQL. I also have experience with AWS (EC2, Lamda functions, S3 bucket for storage)",
                email : ["am.sandy@gmail.com", "sandy.am@gmail.com"],
                dial: "google meets 3123",
                meetings: "teams meeings 123",
                phone: ["+919779507123", "+919779507123"],
                social: ["instagram"]
            },
            {
                id: "8",
                name: "Vidushi Malik",
                designation: "Call Handler",
                bio: "I am a full stack developer. I have worked on NodeJS (Express, Hapy), AngularJS, ReactJS, VueJS, MongoDB, MySql, GraphQL. I also have experience with AWS (EC2, Lamda functions, S3 bucket for storage)",
                email : ["am.vidushi@gmail.com", "vidushi.am@gmail.com"],
                dial: "google meets 3123",
                meetings: "teams meeings",
                phone: ["+919779503123", "+919779503123"],
                social: ["instagram", "Pinterest"]
            },
            {
                id: "9",
                name: "Rajinder Malik",
                designation: "Business",
                bio: "I am a full stack developer. I have worked on NodeJS (Express, Hapy), AngularJS, ReactJS, VueJS, MongoDB, MySql, GraphQL. I also have experience with AWS (EC2, Lamda functions, S3 bucket for storage)",
                email : ["am.rajinder@gmail.com", "rajinder.am@gmail.com"],
                dial: "google meets 4234234",
                meetings: "teams meeings",
                phone: ["+919774234234", "+919774234234"],
                social: ["instagram"]
            }
        ];

        return { contacts };

    }
}