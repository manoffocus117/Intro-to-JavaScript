let college = {
      name: "sodor ali model college",
      classes: ["hsc", "honours", "masters", "degree"],
      specialities: {
            dress_color: {
                  shirt_color: "white",
                  pant_color: "nevyblue",
                  hijab_color: "white",
                  borkha_color: "nevyblue"
            },
            merit : "top",
            gpa : 5,
      },
      events: ["victory day", "int. mother language day", "independent day", "science fair", "annual sports day"],
}
console.log(college);

delete college.specialities;

// console.log(college);

delete college.events;

// console.log(college);

