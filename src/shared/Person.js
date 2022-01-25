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
        photo: "Abdulaev.png",
        activities: [
            {
                type: "НИР",
                name: "STARTUP CONNECT- содействие стартапам, предпринимательству и сотрудничеству малых и средних предприятий в приграничном регионе",
                role: "Участник",
                icon: "publications-component.png",
                date: "17.12.2018 –30.05.2021"
            },
            {
                type: "Конференция",
                name: "Hult Prize 2021 Saint Petersburg Impact Summit",
                role: "Ответственный исполнитель",
                icon: "events-component.png",
                date: "29.04 –30.04.2021"
            },
            {
                type: "Интервью",
                name: "Карьера в сфере устойчивого развития: карьерный путь",
                role: "Волонтер",
                icon: "events-component.png",
                date: "28.08.2021"
            },
            {
                type: "Интервью",
                name: "Карьера в сфере устойчивого развития: медиа-проекты",
                role: "Ответственный исполнитель",
                icon: "events-component.png",
                date: "16.07.2021"
            }
        ],
        contacts: [
            {
                contact: "+7 (999) 222-22-22",
                comment: null,
                icon: "Buttons.png"
            },
            {
                contact: "vk.com/example",
                comment: null,
                icon: "Buttons-1.png"
            }
        ],
        clubs: [
            {
                name: "Hult Prize Community",
                role: "руководитель клуба",
                image: "Ellipse 70.png"
            },
            {
                name: "ITMO Case Club",
                role: "член клуба",
                image: "Собеседник.png"
            }, 
            {
                name: "Клуб «Дебаты в ИТМО»",
                role: "член клуба",
                image: "Собеседник-1.png"
            },
            {
                name: "Экологический клуб ITMO.GREEN",
                role: "член клуба",
                image: "Собеседник-2.png"
            },
        ]
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
    },

    setActivities (activities) {
        this.activities = activities
    },

    setContacts(contacts) {
        this.contacts = contacts
    }

}