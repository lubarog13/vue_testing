export var person = {
    debug: true,
    state: {
        role: "student",
        last_name: "Абдуллаев",
        first_name: "Вячеслав",
        second_name: "Эмильевич",
        isu: "265337",
        course: 4,
        faculty: "ФТМИ",
        op: "Управление технологическими инновациями 2018",
        specialization: "Управление технологическими инновациями",
        group: "U34752",
        positions: null,
        powers: null,
        photo: "Abdulaev.png"
    },
    setStudent(last_name, first_name, second_name, isu, course, faculty, op, specialization, group) {
        this.last_name = last_name
        this.first_name = first_name
        this.second_name = second_name
        this.isu=isu
        this.course = course
        this.faculty = faculty
        this.op = op
        this.specialization = specialization
        this.group = group
        this.role = "student"
    },

    setEmployee(last_name, first_name, second_name, isu, positions, powers) {
        this.last_name = last_name
        this.first_name = first_name
        this.second_name = second_name
        this.isu=isu
        this.positions = positions
        this.powers = powers
        this.role = "employee"
    },

    setStudentEmployee(last_name, first_name, second_name, isu, course, faculty, op, specialization, group, positions, powers) {
        this.last_name = last_name
        this.first_name = first_name
        this.second_name = second_name
        this.isu=isu
        this.course = course
        this.faculty = faculty
        this.op = op
        this.specialization = specialization
        this.group = group
        this.positions = positions
        this.powers = powers
        this.role = "student_employee"
    }

}