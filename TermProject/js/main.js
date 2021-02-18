//////////////////////////////////   DATABASE   //////////////////////////////////

let course_designators = [
    "EGGN-1110",
    "CS-1210",
    "EGCP-1010",
    "BTGE-1725",
    "ENG-1400",
    "MATH-1710",
    "MATH-1710",
    "CS-1220",
    "PYCH-1600",
    "PEF-1990",
    "HUM-1400",
    "PFMU-3820",
    "COM-1100",
    "CS-3350",
    "MATH-1720",
    "CS-3310",
    "BTGE-2730",
    "PFMU-3820",
    "PHYS-2110",
    "GBIO-1000",
    "GSS-1100",
    "CS-2210",
    "MATH-2520",
    "PFMU-3820",
    "BTGE-2740",
    "CS-3410",
    "EGCP-4310",
    "HIST-1110",
    "PHYS-2120",
    "PFMU-3820",
    "BTGE-3755",
    "CS-3220",
    "CS-3610",
    "CS-4430",
    "EGCP-3210",
    "PFMU-3820",
    "CS-4810",
    "EGGN-4010",
    "BTGE-3765",
    "CS-3210",
    "CS-3320",
    "PLMU-1100",
    "LIT-2340",
    "EGGN-3110",
    "CS-3510",
    "CS-4310",
    "CS-4330",
    "CS-4820"
];

let course_names = [
    "The Engineering Profession",
    "C++ Programming",
    "Digital Logic Design",
    "Bible & the Gospel",
    "Composition",
    "Calculus I",
    "Calculus I",
    "Obj-Orient Design/C++",
    "General Psychology",
    "Phys Act & the Christian Life",
    "Intro to Humanities",
    "Men's Glee Club",
    "Fundamentals of Speech",
    "Foundations Computer Security",
    "Calculus II",
    "Operating Systems",
    "Old Testament Literature",
    "Men's Glee Club",
    "General Physics I",
    "Prin of Biology",
    "Politics & American Culture",
    "Data Struct Using Java",
    "Discrete Math/Prob Pri",
    "Men's Glee Club",
    "New Testament Literature",
    "Algorithms",
    "Computer Networks",
    "US History I",
    "General Physics II",
    "Men's Glee Club",
    "Theology I",
    "Web Applications",
    "Database Org & Design",
    "Machine Lrng/Intelligence",
    "Computer Architecture",
    "Men's Glee Club",
    "Software Engineering I",
    "Senior Seminar",
    "Theology II",
    "Programming Language Survey",
    "Linux Systems Programming",
    "Piano (2cr)",
    "Western Literature",
    "Professional Ethics",
    "Compilor Theory & Practice",
    "Cyber Operations",
    "Software Security",
    "Software Engineering II"
];





//////////////////////////////////   CLASSES   //////////////////////////////////

class Course {

    constructor(name, designator, semester, year){
        this.name = name;
        this.designator = designator;
        this.semester = semester;
        this.year = year;
    }

    getName(){
        return this.name;
    }

    getDesignator(){
        return this.designator;
    }

    
    getSem() {
        return this.semester;
    }

    getYear() {
        return this.year;
    }

}

class Year {

    constructor(year, semesters) {
        this.year = year;
        this.semesters = semesters;
    }

    getYear(){
        return this.year;
    }
    getSemesters(){
        return this.semesters;
    }

}

class Semester {

    constructor(year, semester, courses){
        this.year = year;
        this.semester = semester;
        this.courses = courses;
    }

    getYear(){
        return this.year;
    }
    getSemester(){
        return this.semester;
    }
    getCourses() {
        return this.courses;
    }

}

class Plan {
    
    constructor(p_name, cat_year, major, s_name, current_semester, course) {
        this.p_name = p_name;
        this.cat_year = cat_year;
        this.major = major;
        this.s_name = s_name;
        this.current_semester = current_semester;
        this.course = course;
    }

    getName(){
        return this.p_name;
    }
    getCatYear(){
        return this.cat_year;
    }
    getMajor(){
        return this.major;
    }
    getStudentName(){
        return this.s_name;
    }
    getCurrSem(){
        return this.current_semester;
    }
    getCourses(){
        return this.course;
    }

}





//////////////////////////////////   FUNCTIONS   //////////////////////////////////

function load() {
    updateCourseHeader();
    addReqs();
    addClasses();
    addFinderFillers();
}

function updateCourseHeader() {

    let plan = populate_plan();
    let courses = plan.getCourses();

    //////////////////////////////////////////////////////////
    //////////////  UPDATE SEMESTER PLAN TITLE  //////////////
    let sem_title_1 = "Academic Plan: ";
    let sem_title_2 = plan.getName();
    let sem_title = sem_title_1.concat(sem_title_2);

    let sem_title_holder = document.createElement("div");
    sem_title_holder.setAttribute("class", "section-title");
    let semester_title = document.createTextNode(sem_title);
    sem_title_holder.appendChild(semester_title);
    var element = document.getElementById("sem-div");
    element.prepend(sem_title_holder);
    /////////////  /UPDATE SEMESTER PLAN TITLE  //////////////
    //////////////////////////////////////////////////////////

}

function populate_plan() {

    let courses = [];
    let curr_courses = [];

    for (i = 0; i < 48; i++){

        if(i < 6) {
            courses.push(new Course(course_names[i], course_designators[i], "Fall", "2018"));
        }
        else if((i >= 6) && (i < 12)) {
            courses.push(new Course(course_names[i], course_designators[i], "Spring", "2019"));
        }
        else if((i >= 12) && (i < 18)) {
            courses.push(new Course(course_names[i], course_designators[i], "Fall", "2019"));
        }
        else if((i >= 18) && (i < 24)) {
            courses.push(new Course(course_names[i], course_designators[i], "Spring", "2020"));
        }
        else if((i >= 24) && (i < 30)) {
            courses.push(new Course(course_names[i], course_designators[i], "Fall", "2020"));
        }
        else if((i >= 30) && (i < 36)) {
            courses.push(new Course(course_names[i], course_designators[i], "Spring", "2021"));
            curr_courses.push(new Course(course_names[i], course_designators[i], "Spring", "2021"));
        }
        else if((i >= 36) && (i < 43)) {
            courses.push(new Course(course_names[i], course_designators[i], "Fall", "2021"));
        }
        else if(i >= 43) {
            courses.push(new Course(course_names[i], course_designators[i], "Spring", "2022"));
        }

    }

    let curr_sem = new Semester("2021", "Spring", curr_courses);

    let plan = new Plan("Epic Plan", "2019", "Computer Science", "Kyle Peront", curr_sem, courses);

    return plan;

}

function convert(plan) {

    let courses = plan.getCourses();
    let semesters = [];

    
    let sem_courses = [];

    for (i = 0; i < courses.length; i++){

        if(i < 36){
            sem_courses.push(courses[i]);
            if(((i+1)%6 == 0)){
                let year = courses[i].getYear();
                let sem = courses[i].getSem();
                semesters.push(new Semester(year, sem, sem_courses));
                sem_courses = [];
            }
        }
        else if((i >=36) && (i < 43)){
            sem_courses.push(courses[i]);
            if(((i+1)%7 == 0)){
                let year = courses[i].getYear();
                let sem = courses[i].getSem();
                semesters.push(new Semester(year, sem, sem_courses));
                sem_courses = [];
            }
        }
        else if(i >= 43){
            sem_courses.push(courses[i]);
            if(((i+1)%5 == 0)){
                let year = courses[i].getYear();
                let sem = courses[i].getSem();
                semesters.push(new Semester(year, sem, sem_courses));
                sem_courses = [];
            }
        }

    }

    let years = [];
    let count = 0;
    let year_names = [
        "Freshman",
        "Sophomore",
        "Junior",
        "Senior"
    ];

    for (i = 0; i < 4; i++){

        let sem_set = [];

        sem_set.push(semesters[count]);
        count++;
        sem_set.push(semesters[count]);
        count++;

        years.push(new Year(year_names[i], sem_set));
    }

    return years;

}

function addReqs() {

    let req_classes = [
        "- CS-1210 C++ Programming",
        "- CS-1220 Object-Oriented Design with C++",
        "- CS-2210 Data Structures Using Java",
        "- CS-3210 Programming Language Survey",
        "- CS-3220 Web Applications",
        "- CS-3310 Operating Systems",
        "- CS-3350 Foundations of Computer Security",
        "- CS-3410 Algorithms",
        "- CS-3510 Compiler Theory & Practice",
        "- CS-3610 Database Organization & Design",
        "- CS-4810 Software Engineering I",
        "- CS-4820 Software Engineering II",
        "- EGCP-1010 Digital Logic Design",
        "- EGCP-3210 Computer Arhitecture",
        "- EGCP-4310 Computer Networks",
        "- EGGN-3110 Professional Ethics",
        "- EGGN-4010 Senior Seminar",
        "- MATH-2520 Discrete Math and Probability Principles for Computer Science"
    ];

    for (i = 0; i < req_classes.length; i++){

        let holder = document.createElement("p");
        holder.setAttribute("class", "req-class-placeholder");
        let class_placeholder = document.createTextNode(req_classes[i]);
        holder.appendChild(class_placeholder);
        var element = document.getElementById("req-table");
        element.appendChild(holder);

    }

}

function addClasses() {

    let plan = populate_plan();
    let year = convert(plan);

    let freshman_div = document.getElementById("first-year");
    let sophomore_div = document.getElementById("second-year");
    let junior_div = document.getElementById("third-year");
    let senior_div = document.getElementById("fourth-year");
    
    let space = " ";

    // Cycle through the school years:
    for (i = 0; i < 4; i++){

        // Cycle through the semesters in a given year:
        let semester = year[i].getSemesters();
        for (j = 0; j < 2; j++){


            // Print Semester Heading
            let sem_season = semester[j].getSemester();
            let sem_year = semester[j].getYear();
            let sem_html = sem_season.concat(space, sem_year);

            let sem_holder = document.createElement("p");
            sem_holder.setAttribute("class", "semester-header");
            let sem_title = document.createTextNode(sem_html);
            sem_holder.appendChild(sem_title);

            let sem_id = parse_semester(sem_season, sem_year);

            let sem_element = document.getElementById(sem_id);
            sem_element.appendChild(sem_holder);


            // Cycle through each course in a give semester:
            let course = semester[j].getCourses();
            for (k = 0; k < course.length; k++){

                let course_season = course[k].getSem();
                let course_year = course[k].getYear();
                let course_desig = course[k].getDesignator();
                let course_html = course_desig.concat(space, course[k].getName());

                let course_holder = document.createElement("p");
                course_holder.setAttribute("class", "semester-class");
                let course_placeholder = document.createTextNode(course_html);
                course_holder.appendChild(course_placeholder);

                let course_id = parse_semester(course_season, course_year);

                let element = document.getElementById(course_id);
                element.appendChild(course_holder);
                

            }

        }

    }

}

function parse_semester(semester, year) {

    if(semester == "Fall") {

        if(year == "2018") {
            return id="fa18";
        }
        else if (year == "2019") {
            return id="fa19";
        }
        else if (year == "2020") {
            return id="fa20";
        }
        else if (year == "2021") {
            return id="fa21";
        }

    }
    else if(semester === "Spring") {

        if (year == "2019") {
            return id="sp19";
        }
        else if (year == "2020") {
            return id="sp20";
        }
        else if (year == "2021") {
            return id="sp21";
        }
        else if (year == "2022") {
            return id="sp22";
        }

    }
    else if(semester === "Summer") {

        if (year == "2019") {
            return id="sum19";
        }
        else if (year == "2020") {
            return id="sum19";
        }
        else if (year == "2021") {
            return id="sum19";
        }
        else if (year == "2022") {
            return id="sum19";
        }

    }

}

function addFinderFillers(){
    
    let ids = [
        "COLL-0900",
        "DEV-0900",
        "ALHL-1000",
        "BEBS-1000",
        "BECE-1000",
        "BETH-1000",
        "BTBS-1000",
        "BTCM-1000",
        "BUS-1000",
        "CHEM-1000",
        "COM-1000",
        "CY-1000"
    ];

    let names = [
        "Foundations",
        "Intermediate Algebra",
        "Introduction to the Allied Health Profession",
        "Introduction to Biblical Studies",
        "Orientation to Bible Ministries",
        "Introduction to the Theological Task",
        "Introduction to Biblical Studies",
        "Orientation to Bible Ministries",
        "The Business Profession",
        "Principles of Chemistry",
        "Introduction to Communication Arts",
        "Introduction to Cubersecurity"
    ];

    let credits = [
        "1.0",
        "2.0",
        "1.0",
        "1.0",
        "1.0",
        "1.0",
        "1.0",
        "1.0",
        "2.0",
        "4.0",
        "3.0",
        "3.0"
    ];

    for (i = 0; i < ids.length; i++){

        let id_holder = document.createElement("p");
        let class_holder = document.createElement("p");
        let credit_holder = document.createElement("p");

        if(i%2 == 0){
            id_holder.setAttribute("class", "database-text-1");
            class_holder.setAttribute("class", "database-text-1");
            credit_holder.setAttribute("class", "database-text-1");
        }
        else {
            id_holder.setAttribute("class", "database-text-2");
            class_holder.setAttribute("class", "database-text-2");
            credit_holder.setAttribute("class", "database-text-2");
        }

        let id_placeholder = document.createTextNode(ids[i]);
        let class_placeholder = document.createTextNode(names[i]);
        let credits_placeholder = document.createTextNode(credits[i]);

        id_holder.appendChild(id_placeholder);
        class_holder.appendChild(class_placeholder);
        credit_holder.appendChild(credits_placeholder);

        var el_1 = document.getElementById("course-id");
        var el_2 = document.getElementById("course-name");
        var el_3 = document.getElementById("course-credits");

        el_1.appendChild(id_holder);
        el_2.appendChild(class_holder);
        el_3.appendChild(credit_holder);

    }

}





//////////////////////////////////   VALIDATION   //////////////////////////////////

function validate(digits) {

    let num_reg = /^(\d){3}-?(\d){3}-?(\d){4}$/;

    if(num_reg.test(digits.value) == false) {
        //digits.focus();
        document.getElementById("digits-box").style.borderColor = "red";
        return false;
    }
    else {
        document.getElementById("digits-box").style.borderColor = "black";
        return true;
    }

}

function validate_Digits(ssn) {

    let ssn_reg = /^(\d){3}-?(\d){2}-?(\d){4}$/;

    if(ssn_reg.test(ssn.value) == false){
        //ssn.focus();
        document.getElementById("ssn-box").style.borderColor = "red";
        return false;
    }
    else {
        document.getElementById("ssn-box").style.borderColor = "black";
        return true;
    }

}