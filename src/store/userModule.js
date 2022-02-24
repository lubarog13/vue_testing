export default {
    state: () => ({
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
        main_role: "Профессор, доктор физико-математических наук",
        scopus_index: 245,
        rinc_index: 133,
        exchange: false,
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
            },
            {
                contact: "Кронверкский пр., д.49, лит.А",
                comment: "289/1",
                icon: "Buttons-3.png"
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
        ], 
        colleagues: [
            {
                last_name: "Шабанин",
                first_name: "Семён",
                second_name: "Олегович",
                role: "Староста",
                image: "Shabanin.png",
            },
            {
                last_name: "Веденский",
                first_name: "Владислав",
                second_name: "Олегович",
                role: "Староста",
                image: "Vedensky.png",
            }
        ],
        timetable: [
            {
                name: "Теория и методология научных исследований",
                type: "Практика",
                aud: 1216,
                addr: "ул. Ломоносова д.9",
                start_time: "8:20",
                end_time: "9:50",
                date: new Date()
            },
            {
                name: "Патентоведение и защита интеллектуальной собственности",
                type: "Лекция",
                aud: 1216,
                addr: "ул. Ломоносова д.9",
                start_time: "13:20",
                end_time: "9:50",
                date: new Date()
            },
            {
                name: "Теория и методология научных исследований",
                type: "Практика",
                aud: 1216,
                addr: "ул. Ломоносова д.9",
                start_time: "16:20",
                end_time: "9:50",
                date: new Date()
            },
            {
                name: "Введение в распределенные технологии	",
                type: "Лекция",
                aud: 404,
                addr: "Биржевая линия, д.14, лит.А",
                start_time: "15:20",
                end_time: "16:50",
                date: new Date("01-24-2022")
            }
        ]
    }),
    namespaced: true
}