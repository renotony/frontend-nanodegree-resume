
var bio = {
  "name": "Tony DeGeiso",
  "role": "Sales Planning Manager",
  "contacts": {
    "mobile": "775 233-3102",
    "email": "renotony@aol.com",
    "github": "https://github.com/renotony",
    "twitter": "none",
    "location": "Reno, NV"
},
  "bioPic": "images/fry.jpg",
  "welcomMessage": "Welcome to my resume",
  "skills": ["SQL", "VBA", "Excel", "Access", "SQL Server"]
};

bio.display = function() {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomMessage);
//var formattedSkills = HTMLskills.replace("%data%", bio.skills[0] + ", " + bio.skills[1] + ", " + bio.skills[2] + ", " + bio.skills[3] + ", " + bio.skills[4]);




$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);


$("#header").append(formattedWelcome);


$("#main").prepend(formattedRole);
$("#main").prepend(formattedName);


if(bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);
  $("#skills-h3").prepend(formattedBioPic);

  var formattedSkill = "";
  for (skill in bio.skills) {

      formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
  }
};
};

bio.display();

var work = {
    "jobs": [
    {
    "employer": "ATT",
    "title": "Sales Planning Manager",
    "dates": "1999-present",
    "description": "Support Branch Manager with Sales Data and reports",
    "location": "Reno, NV"
  },
  {
    "employer": "ATT",
    "title": "Engineer",
    "dates": "1996-1999",
    "description": "Maintain records on 5E, DMS100/200, DMS100, and DMS10 offices in the State of Nevada",
    "location": "Reno, NV"
  }
  ]
};


var education = {
  "schools": [
    {
    "name": "Sac State",
    "city": "Sacramento, CA",
    "majors": ["Linguistics", "Spanish"],
    "degree": "none",
    "dates": "1979",
    "url": "http://www.CSUSacramento.edu"
    },
    {
    "name": "Stillman College",
    "city": "Campbell, CA",
    "majors": ["Hypnotherapy"],
    "degree": "Master Hypnotherapist",
    "dates": "1982",
    "url": "http://www.StillmanCollege.org"
    },
    {
    "name": "TMCC",
    "city": "Reno, NV",
    "majors": ["Theatre"],
    "degree": "none",
    "dates": "2007",
    "url": "http://www.tmcc.edu"
    }
  ],
  "onlineCourses": [
    {
    "title": "JavaScript Syntax",
    "schoool": "Udacity",
    "dates": "2017",
    "url": "http://www.udacity.com/course/ud804"
    }
  ]
};

education.display = function() {

  $("#education").append(HTMLschoolStart);
  for (var school in education.schools) {
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry").append(formattedSchoolName);
    var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
    $(".education-entry").append(formattedSchoolCity);
    for (var major in education.schools.majors) {
      var formattedSchoolMajors =HTMLschoolMajor.replace("%data%", education.schools[shcool].majors[major]);
      $(".education-entry").append(formattedSchoolMajors);
      };
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry").append(formattedSchoolDegree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry").append(formattedSchoolDates);
  };
  $("#education").append(HTMLonlineClasses);
  for (var olc in education.onlineCourses) {
    var formattedOnLineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[olc].title);
    $("#education-entry").append(formattedOnLineTitle);
    var formattedOnLineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[olc].school);
    $(".education-entry").append(formattedOnLineSchool);
    var formattedOnLineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[olc].dates);
    $(".education-entry").append(formattedOnLineDates);
    var formattedOnLineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[olc].url);
    $(".education-entry").append(formattedOnLineURL);
  };
};
education.display();

var projects = [
      {
      "title": "asteroids",
      "dates": "2017",
      "description": "emulates a popular game",
      "images": ["images/fry.jpg", "images/197x148.gif"]
    }, {
      "title": "recipes",
      "dates": "2017",
      "description": "keeps track of recipes and used to learn Git and GitHub",
      "images": ["images/fry.jpg", "images/197x148.gif"]
    }
];

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
  for (var project in projects) {

    var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects[project].title);
    $(".project-entry").append(formattedProjTitle);
    var formattedProjDates = HTMLprojectDates.replace("%data%", projects[project].dates);
    $(".project-entry").append(formattedProjDates);
    var formattedProjDesc = HTMLprojectDescription.replace("%data%", projects[project].description);
    $(".project-entry").append(formattedProjDesc);
    for (img in projects[project].images) {
      var formattedProjImg = HTMLprojectImage.replace("%data%",projects[project].images[img]);
      $(".project-entry").append(formattedProjImg);
    }
  };
};

projects.display();




work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
}

work.display();

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);
