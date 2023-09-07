import { Component } from '@angular/core';

type Experience = {
  ongoing: boolean,
  title: string,
  company: string,
  duration: string,
  desc: string[],
  skills: string[]
};

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css']
})
export class ExperiencePageComponent {
  experiences: Experience[] = [
    {
      "ongoing": true,
      "title": "Computer Science Teaching Assistant",
      "company": "Brown University",
      "duration": "Aug 2023 - Present",
      "desc": [
        "Teaching assistant for CS1410: Artificial Intelligence (Fall 2023)",
        "Organized weekly office hours to help students with assignments involving search, hidden markov models, machine learning, and reinforcement learning.",
        "Responsible for mentoring students on their final project which invovles coding an AI bot to beat a game."
      ], 
      "skills": [
        "Python",
        "NumPy",
        "Machine Learning",
        "Reinforcement Learning",
        "Teaching",
        "Mentoring",
        "Time Management"
      ],
    },
    {
      "ongoing": false,
      "title": "Django Backend Developer",
      "company": "WeCodeucate.org",
      "duration": "Aug 2021 - Aug 2023",
      "desc": [
        "Codeucate is a fast-paced non-profit that offers computer science courses geared towards the younger generation.",
        "Helped develop, refactor and document their student portal that uses Django as the backend.",
        "Deployed the Django backend on Azure and worked with technologies like SQL and Redis as per the requirements of the Codeucate student portal.",
        "Collaborated with front-end developers to integrate user-facing elements with server-side logic, integrated features like instructor onboarding, referral system, certificate generator, and a payments system using the PayPal API."
      ],
      "skills": [
        "Python",
        "Django",
        "JavaScript",
        "Integrating APIs",
        "Microsoft Azure",
        "SQL",
        "Redis",
        "Collaboration",
        "Time Management",
        "Code Refactoring/Documentation",
      ],
    },
    {
      "ongoing": false,
      "title": "Android Tech Fellow",
      "company": "CodePath.org",
      "duration": "Jan 2022 - May 2022",
      "desc": [
        "Responsible for teaching CodePath's Android Development course at Penn State via weekly sessions where the students developed 4 Android apps throughout a span of 10 weeks.",
        "Mentored and supported a class of 14 students by providing technical support during labs and assignments to ensure they are on track with the pace of the course.",
        "Brought up student enrollment by marketing the course on-campus by reaching out to several Computer Science and Engineering professors and clubs.",
      ],
      "skills": [
        "Java",
        "Android Development",
        "Communication",
        "Teaching",
        "Facilitation",
        "Classroom Management",
      ],
    },
    {
      "ongoing": false,
      "title": "Capstone Project Software Engineer",
      "company": "Medtronic, Plc",
      "duration": "Aug 2021 - Dec 2021",
      "desc": [
        "Penn State Computer Engineering capstone project sponsored by Medtronic, plc.",
        "Collaborated with a team of four to build a custom motion capture Android app utilizing the XsensDOT SDK to establish real-time connections with up to three wireless sensors and display live arm angle calculations on the screen.",
        "Worked closely with Medtronic, plc sponsors to optimize the app's performance, coordinating regular meetings to analyze and troubleshoot the raw data latency issues, resulting in a 50ms reduction in background data collection latency and improving the overall user experience."
      ],
      "skills": [
        "Java",
        "Android Development",
        "Communication",
        "Team Leadership",
      ],
    },
    {
      "ongoing": false,
      "title": "Computer Science Grader",
      "company": "Penn State University - Main Campus",
      "duration": "Aug 2021 - Dec 2021",
      "desc":[
        "Graded assignments covering data structures and algorithmic design for over 300 students."
      ],
      "skills": [
        "Algorithms & Data Structures"
      ],
    },
  ];
}