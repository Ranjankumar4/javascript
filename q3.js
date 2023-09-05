const students = [
    {name: "mithun",
    marks: 95
    },

    {name: "Ranjan",
    marks: 90
    },

    {name: "Naman",
    marks: 85
    },

    {name: "Sahil",
    marks: 58
    },

    {name: "Prince",
    marks: 93
    },
    
];
 const checkresults = (name) => {
    for (let student of students ){
        if (student.name=== name){
            return student.marks > 90
            ? console.log (`congratulations ${student.name} ! you have cleared the exam.`)
            : console.log (`Sorry you have not cleared the exam.`);
        }
    }
        console.log(`Invalid user !!!`);
    }
    
 checkresults("Sahil");