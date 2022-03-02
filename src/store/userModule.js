export default {
  state: () => ({
    role: "teacher",
    last_name: "Абдуллаев",
    first_name: "Вячеслав",
    second_name: "Эмильевич",
    isu: "265337",
    course: 4,
    faculty: "ФТМИ",
    op: "Управление технологическими инновациями 2018",
    specialization: "Управление технологическими инновациями",
    group: "U34752",
    positions: [
      {
        id: 1,
        position: "Институт перспективных систем передачи данных",
        role: "Главный научный сотрудник",
        vacation: {
          start_date: new Date("02-28-2022"),
          end_date: new Date("03-07-2022"),
        },
      },
      {
        id: 2,
        position: "Лаборатория атмосферных оптических квантовых каналов связи",
        role: "Профессор",
      },
      {
        id: 3,
        position:
          "Научно-исследовательский центр перспективных функциональн...",
        role: "Главный научный сотрудник",
        vacation: {
          start_date: new Date("02-28-2022"),
          end_date: new Date("03-07-2022"),
        },
      },
      {
        id: 4,
        position: "Лаборатория однофотонных детекторов и генераторов",
        role: "Главный научный сотрудник",
      },
      {
        id: 5,
        position: "Лаборатория однофотонных детекторов и генераторов",
        role: "Руководитель",
      },
      {
        id: 6,
        position: "Научно-исследовательский центр радиофотонных систем ...",
        role: "Руководитель",
      },
      {
        id: 7,
        position: "Институт перспективных систем передачи данных",
        role: "Директор",
      },
    ],
    powers: [
      {
        id: 1,
        power: "Научно-исследовательский центр перспективных функциональн...",
        role: "Сотрудник подразделения",
      },
      {
        id: 2,
        power: "Диссертационный совет Университета ИТМО 06.19.00",
        role: "Председатель",
      },
      {
        id: 3,
        power: "Лазеры для информационно-коммуникационных систем 2016",
        role: "Руководитель образовательной программы",
      },
      {
        id: 4,
        power: "Оптоэлектроника 2018 ",
        role: "Руководитель образовательной программы",
      },
      {
        id: 5,
        power: "Светодиодные технологии и оптоэлектроника 2019",
        role: "Руководитель образовательной программы",
      },
      {
        id: 6,
        power: "Светодиодные технологии и оптоэлектроника 2020",
        role: "Руководитель образовательной программы",
      },
    ],
    photo: "Abdulaev.png",
    main_role: "Профессор, доктор физико-математических наук",
    scopus_index: 245,
    rinc_index: 133,
    exchange: {
      start_date: new Date("01-15-2022"),
      end_date: new Date("06-31-2022"),
    },
    activities: [
      {
        id: 1,
        type: "НИР",
        name: "STARTUP CONNECT- содействие стартапам, предпринимательству и сотрудничеству малых и средних предприятий в приграничном регионе",
        role: "Участник",
        icon: "publications-component.png",
        date: "17.12.2018 –30.05.2021",
        option: "Публикации",
      },
      {
        id: 2,
        type: "Конференция",
        name: "Hult Prize 2021 Saint Petersburg Impact Summit",
        role: "Ответственный исполнитель",
        icon: "events-component.png",
        date: "29.04 –30.04.2021",
        option: "Мероприятия",
      },
      {
        id: 3,
        type: "Интервью",
        name: "Карьера в сфере устойчивого развития: карьерный путь",
        role: "Волонтер",
        icon: "events-component.png",
        date: "28.08.2021",
        option: "Мероприятия",
      },
      {
        id: 4,
        type: "Интервью",
        name: "Карьера в сфере устойчивого развития: медиа-проекты",
        role: "Ответственный исполнитель",
        icon: "events-component.png",
        date: "16.07.2021",
        option: "Мероприятия",
      },
    ],
    contacts: [
      {
        contact: "+7 (999) 222-22-22",
        comment: null,
        icon: "Buttons.png",
      },
      {
        contact: "vk.com/example",
        comment: null,
        icon: "Buttons-1.png",
      },
      {
        contact: "Кронверкский пр., д.49, лит.А",
        comment: "289/1",
        icon: "Buttons-3.png",
      },
    ],
    clubs: [
      {
        name: "Hult Prize Community",
        role: "руководитель клуба",
        image: "Ellipse 70.png",
      },
      {
        name: "ITMO Case Club",
        role: "член клуба",
        image: "Собеседник.png",
      },
      {
        name: "Клуб «Дебаты в ИТМО»",
        role: "член клуба",
        image: "Собеседник-1.png",
      },
      {
        name: "Экологический клуб ITMO.GREEN",
        role: "член клуба",
        image: "Собеседник-2.png",
      },
    ],
    colleagues: [
      {
        id: 1,
        last_name: "Шабанин",
        first_name: "Семён",
        second_name: "Олегович",
        role: "Староста",
        image: "Shabanin.png",
      },
      {
        id: 2,
        last_name: "Веденский",
        first_name: "Владислав",
        second_name: "Олегович",
        role: "Староста",
        image: "Vedensky.png",
      },
    ],
    timetable: [
      {
        id: 1,
        name: "Теория и методология научных исследований",
        type: "Практика",
        aud: 1216,
        addr: "ул. Ломоносова д.9",
        start_time: "8:20",
        end_time: "9:50",
        date: new Date(),
      },
      {
        id: 2,
        name: "Патентоведение и защита интеллектуальной собственности",
        type: "Лекция",
        aud: 1216,
        addr: "ул. Ломоносова д.9",
        start_time: "13:20",
        end_time: "9:50",
        date: new Date(),
      },
      {
        id: 3,
        name: "Теория и методология научных исследований",
        type: "Практика",
        aud: 1216,
        addr: "ул. Ломоносова д.9",
        start_time: "16:20",
        end_time: "9:50",
        date: new Date(),
      },
      {
        id: 4,
        name: "Введение в распределенные технологии	",
        type: "Лекция",
        aud: 404,
        addr: "Биржевая линия, д.14, лит.А",
        start_time: "15:20",
        end_time: "16:50",
        date: new Date("01-24-2022"),
      },
    ],
  }),
  getters: {
    getLessonsByDay: (state) => ({day}) => {
        return state.timetable.filter((lesson) => lesson.date.toDateString() === day.toDateString());
    },
    getFilteredActivities: (state) => ({filter}) => {
        if(filter.name !== "Вся деятельность") {
            return state.activities.filter(
              (a) => a.option === filter.name
            );
          } else {
            return state.activities;
        }
    },
    getSearchedAndFilteredActivities: (state, getters) => ({searchQuery, filter}) => {
        return getters.getFilteredActivities({filter}).filter((a) =>
            a.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    },
    getPositions(state) {
        if (state.positions.length > 1) {
            return state.positions.slice(1);
        }
          return null;
    },
    getPowers(state) {
        if (state.powers.length > 1) {
            return state.powers.slice(1);
          }
        return null;
    },
    getActivityOptions(state) {
      const options = [
        { name: "Вся деятельность", value: state.activities.length },
        {
          name: "Проекты",
          value: state.activities.filter((a) => a.option === "Проекты").length,
        },
        {
          name: "РИД",
          value: state.activities.filter((a) => a.option === "РИД").length,
        },
        {
          name: "Публикации",
          value: state.activities.filter((a) => a.option === "Публикации")
            .length,
        },
        {
          name: "Мероприятия",
          value: state.activities.filter((a) => a.option === "Мероприятия")
            .length,
        },
      ];
      return options;
    }
  },
  namespaced: true,
};
