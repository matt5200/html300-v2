// Json data 
   
// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

const userData = [
  {
    "name": "Paolo Maldini",
    "jobTitle": "Front End Developer",
    "company": "Web Weavers",
    "experience": "3 years",
    "school": "University of Washington",
    "major": "Marketing",
    "email": "paolo@example.com",
    "linkedInUrl": "paolo.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Node", "Express"
    ]
  },
  {
    "name": "Barbara Bonansea",
    "jobTitle": "Software Engineer",
    "company": "Excellence in the Cloud",
    "experience": "12 years",
    "school": "University of Southern California",
    "major": "Computer Science",
    "email": "barbara@example.com",
    "linkedInUrl": "barbara.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "JavaScript", "C", "Go"
    ]
  },
  {
    "name": "Javier Hernandez",
    "jobTitle": "User Experience Engineer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "Seattle University",
    "major": "Performing Arts",
    "email": "javier@example.com",
    "linkedInUrl": "javier.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS"
    ]
  },
  {
    "name": "Maribel Dominguez",
    "jobTitle": "Front End Engineer",
    "company": "Bits and Bytes",
    "experience": "6 years",
    "school": "University of Washington",
    "major": "Mechanical Engineering",
    "email": "maribel@example.com",
    "linkedInUrl": "maribel.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
    ]
  }
 ];

const container = document.querySelector(".template-hook");
container.classList.add('main');
let employee_card = document.createElement('div');
employee_card.className = 'employee-card';
let profile = document.createElement('div');
profile.className = 'profile';
let  experience = document.createElement('div');


experience.className = 'experience';

container.appendChild(employee_card);
employee_card.appendChild(profile);
employee_card.appendChild(experience);

let face = document.createElement('img');
face.src="./img/headshot.jpg";
face.className='headshot';
face.alt='Paulo face';
profile.appendChild(face);

let p1 = document.createElement('p');
p1.className ='title';

let title = document.createElement('strong');
title.textContent='Front End Developer';
p1.appendChild(title);

let p2 = document.createElement('p');

profile.appendChild(p1);
profile.appendChild(p2);

let p3 = document.createElement('p');
let p4 = document.createElement('p');
let p5 = document.createElement('p');
let p6 = document.createElement('p');

p3.innerText ='Company:';
p4.innerText = 'Experience:';
p5.innerText = 'School:';
p6.innerText = 'Major:';

let t1 = document.createElement('strong');
let t2 = document.createElement('strong');
let t3 = document.createElement('strong');
let t4 = document.createElement('strong');


p3.appendChild(t1);
p4.appendChild(t2);
p5.appendChild(t3);
p6.appendChild(t4);

t1.innerText = 'Web Weavers';

t2.innerText = '3 Years';

t3.innerText = 'University of Washington';

t4.innerText = 'Marketing';

experience.appendChild(p3);
experience.appendChild(p4);
experience.appendChild(p5);
experience.appendChild(p6);

// userData.map(function(el){

// let list = document.createElement('ul');
// list.innerHTML = `<li> ${el.name} </li>`

// container.append(list);

// })

})