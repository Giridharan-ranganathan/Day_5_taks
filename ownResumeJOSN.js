// Resume in JSON Format 
var resume = {
        "personal_information": {
                     "name": "Giri",
                     "email": "giri@example.com",
                     "phone": "123-456-7890",
                    "address": "123 Main Street, Chennai, TamilNadu,600097"
        },
        "education": [
          {
                     "degree": "Bachelor of Science in Computer Science",
                     "institution": "Kcg Collage of TECH",
                     "location": "Chennai, TamilNadu",
                     "date": "2017 - 2021"
          }
        ],
        "work_experience": [
          {
                     "position": "Software Developer",
                     "company": "Tech Company",
                     "location": "Chennai, TamilNadu",
                     "date": "Month Year - Present",
         "responsibilities": [
              "Developed web applications using HTML, CSS, and JavaScript.",
              "Collaborated with cross-functional teams to deliver projects on time.",
              "Debugged and fixed issues in existing software systems."
            ]
          }
        ],
        "skills": [
          {
            "category": "Programming Languages",
            "list": ["JavaScript", "React", "Java"]
          },
          {
            "category": "Web Development",
            "list": ["HTML", "CSS", "React.js"]
          },
          {
            "category": "Database",
            "list": ["SQL", "MongoDB"]
          }
        ],
        "languages": [
          {
            "language": "Tamil",
            "proficiency": "Native"
          },
          {
            "language": "[English]",
            "proficiency": "Intermediate"
          }
        ]
      }


      
// Json in for in loop

// FOR LOOP
for(var i=0 ; i<resume.length ; i++){
  console.log(resume[i]);
}

// FOR IN LOOP
for(var i in resume){
 console.log(resume[i]);
}