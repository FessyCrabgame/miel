export const courseProgresss = [
  "пройден",
  "в процессе",
  "не начат",
  "не начат",
];

interface candidatObject {
  name: string;
  birthData: string;
  education: string;
  link: string;
  image: string;
  curses: number[];
  achievements: number[];
  town: string;
  index: number;
  favored?: boolean;
}

interface adminObject {
  whereabout: string;
  place: string;
  kvoti: number;
  kvotiSaved: number;
  phone: string;
  name: string;
  mail: string;
}

export const adminData: adminObject[] = [
  {
    whereabout: "На Николоямской",
    place: "Николоямская улица, 40 с1",
    kvoti: 10,
    kvotiSaved: 5,
    phone: "+7 (495) 777-88-83",
    name: "Марина Толстик",
    mail: "info@miel.ru",
  },
  {
    whereabout: "На Николоямской",
    place: "Николоямская улица, 40 с1",
    kvoti: 10,
    kvotiSaved: 5,
    phone: "+7 (495) 777-88-83",
    name: "Марина Толстик",
    mail: "info@miel.ru",
  },
  {
    whereabout: "На Николоямской",
    place: "Николоямская улица, 40 с1",
    kvoti: 10,
    kvotiSaved: 5,
    phone: "+7 (495) 777-88-83",
    name: "Марина Толстик",
    mail: "info@miel.ru",
  },
  {
    whereabout: "На Николоямской",
    place: "Николоямская улица, 40 с1",
    kvoti: 10,
    kvotiSaved: 5,
    phone: "+7 (495) 777-88-83",
    name: "Марина Толстик",
    mail: "info@miel.ru",
  },
  {
    whereabout: "На Николоямской",
    place: "Николоямская улица, 40 с1",
    kvoti: 10,
    kvotiSaved: 5,
    phone: "+7 (495) 777-88-83",
    name: "Марина Толстик",
    mail: "info@miel.ru",
  },
  {
    whereabout: "На Николоямской",
    place: "Николоямская улица, 40 с1",
    kvoti: 10,
    kvotiSaved: 5,
    phone: "+7 (495) 777-88-83",
    name: "Марина Толстик",
    mail: "info@miel.ru",
  },
  {
    whereabout: "На Николоямской",
    place: "Николоямская улица, 40 с1",
    kvoti: 10,
    kvotiSaved: 5,
    phone: "+7 (495) 777-88-83",
    name: "Марина Толстик",
    mail: "info@miel.ru",
  },
  {
    whereabout: "На Николоямской",
    place: "Николоямская улица, 40 с1",
    kvoti: 10,
    kvotiSaved: 5,
    phone: "+7 (495) 777-88-83",
    name: "Марина Толстик",
    mail: "info@miel.ru",
  },
  {
    whereabout: "На Николоямской",
    place: "Николоямская улица, 40 с1",
    kvoti: 10,
    kvotiSaved: 5,
    phone: "+7 (495) 777-88-83",
    name: "Марина Толстик",
    mail: "info@miel.ru",
  },
  {
    whereabout: "На Николоямской",
    place: "Николоямская улица, 40 с1",
    kvoti: 10,
    kvotiSaved: 5,
    phone: "+7 (495) 777-88-83",
    name: "Марина Толстик",
    mail: "info@miel.ru",
  },
];

export const objectData: candidatObject[] = [
  {
    name: "Романова Мария Ивановна",
    birthData: "05.11.2000 (24 года)",
    education: "Высшее",
    link: "Ссылка на резюме",
    image: "https://loremflickr.com/200/200?random=1",
    curses: [2, 2, 1, 0],
    achievements: [0, 6],
    town: "Москва",
    index: 0,
    favored: true,
  },
  {
    name: "Романова Мария Ивановна",
    birthData: "05.11.2000 (24 года)",
    education: "Высшее",
    link: "Ссылка на резюме",
    image: "https://loremflickr.com/200/200?random=1",
    curses: [2, 2, 1, 0],
    achievements: [0, 6],
    town: "Москва",
    index: 1,
  },
  {
    name: "Романова Мария Ивановна",
    birthData: "05.11.2000 (24 года)",
    education: "Высшее",
    link: "Ссылка на резюме",
    image: "https://loremflickr.com/200/200?random=1",
    curses: [2, 2, 1, 0],
    achievements: [5, 6],
    town: "Москва",
    index: 2,
  },
  {
    name: "Романова Мария Ивановна",
    birthData: "05.11.2000 (24 года)",
    education: "Высшее",
    link: "Ссылка на резюме",
    image: "https://loremflickr.com/200/200?random=1",
    curses: [2, 2, 1, 0],
    achievements: [5, 6],
    town: "Москва",
    index: 3,
    favored: true,
  },
  {
    name: "Романова Мария Ивановна",
    birthData: "05.11.2000 (24 года)",
    education: "Высшее",
    link: "Ссылка на резюме",
    image: "https://loremflickr.com/200/200?random=1",
    curses: [2, 2, 1, 0],
    achievements: [5, 6],
    town: "Москва",
    index: 4,
    favored: true,
  },
  {
    name: "Романова Мария Ивановна",
    birthData: "05.11.2000 (24 года)",
    education: "Высшее",
    link: "Ссылка на резюме",
    image: "https://loremflickr.com/200/200?random=1",
    curses: [2, 2, 1, 0],
    achievements: [5, 6],
    town: "Москва",
    index: 5,
  },
];

interface invitingHistory {
  name: string;
  age: number;
  status: number;
  image: string;
  town: string;
  data: string;
  index: number;
}

export const historyData: invitingHistory[] = [
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 0,
    image: "https://loremflickr.com/200/200?random=1",
    index: 0,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 1,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 2,
    image: "https://loremflickr.com/200/200?random=1",
    index: 2,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 2,
    image: "https://loremflickr.com/200/200?random=1",
    index: 3,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 4,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 5,
    status: 2,
    image: "https://loremflickr.com/200/200?random=1",
    index: 5,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 0,
    image: "https://loremflickr.com/200/200?random=1",
    index: 6,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 7,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 8,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 9,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 10,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 11,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 12,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 13,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 14,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 15,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 16,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 17,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 18,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 19,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 20,
    data: "15.02.2024",
  },
  {
    name: "Романова Мария Ивановна",
    town: "Москва",
    age: 22,
    status: 1,
    image: "https://loremflickr.com/200/200?random=1",
    index: 21,
    data: "15.02.2024",
  },
];

interface quotes {
  period: string;
  vidano: number;
  invitings: number;
  employment: number;
  rejections: number;
  snyato: number;
  index: number;
}

export const quotesData: quotes[] = [
  {
    period: "Январь",
    vidano: 20,
    invitings: 18,
    employment: 15,
    rejections: 3,
    snyato: 2,
    index: 0,
  },
  {
    period: "Февраль",
    vidano: 20,
    invitings: 18,
    employment: 15,
    rejections: 3,
    snyato: 2,
    index: 1,
  },
  {
    period: "Март",
    vidano: 20,
    invitings: 18,
    employment: 15,
    rejections: 3,
    snyato: 2,
    index: 2,
  },
  {
    period: "Апрель",
    vidano: 20,
    invitings: 18,
    employment: 15,
    rejections: 3,
    snyato: 2,
    index: 3,
  },
  {
    period: "Май",
    vidano: 20,
    invitings: 18,
    employment: 15,
    rejections: 3,
    snyato: 2,
    index: 4,
  },
  {
    period: "Июнь",
    vidano: 20,
    invitings: 18,
    employment: 15,
    rejections: 3,
    snyato: 2,
    index: 5,
  },
  {
    period: "Июль",
    vidano: 20,
    invitings: 18,
    employment: 15,
    rejections: 3,
    snyato: 2,
    index: 6,
  },
  {
    period: "Август",
    vidano: 20,
    invitings: 18,
    employment: 15,
    rejections: 3,
    snyato: 2,
    index: 7,
  },
  {
    period: "Сентябрь",
    vidano: 20,
    invitings: 18,
    employment: 15,
    rejections: 3,
    snyato: 2,
    index: 8,
  },
  {
    period: "Октябрь",
    vidano: 20,
    invitings: 18,
    employment: 15,
    rejections: 3,
    snyato: 2,
    index: 9,
  },
  {
    period: "Ноябрь",
    vidano: 20,
    invitings: 18,
    employment: 15,
    rejections: 3,
    snyato: 2,
    index: 10,
  },
  {
    period: "Декабрь",
    vidano: 20,
    invitings: 18,
    employment: 15,
    rejections: 3,
    snyato: 2,
    index: 11,
  },
];

interface messages {
  data: string;
  time: string;
  message: string;
  id: number;
}

interface chatters {
  name: string;
  avatar: string;
  myMessages: messages[];
  hisMessages: messages[];
  index: number;
}

export const messageData: chatters[] = [
  {
    name: "Романова Мария",
    avatar: "https://loremflickr.com/200/200?random=1",
    myMessages: [
      { data: "2024-05-14", message: "привет", time: "18:00", id: 0 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 1 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 2 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 3 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 4 },
    ],
    hisMessages: [
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 0 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 1 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 2 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 3 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 4 },
    ],
    index: 0,
  },
  {
    name: "Романова Мария",
    avatar: "https://loremflickr.com/200/200?random=1",
    myMessages: [
      { data: "2024-05-14", message: "привет", time: "18:00", id: 0 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 1 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 2 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 3 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 4 },
    ],
    hisMessages: [
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 0 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 1 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 2 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 3 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 4 },
    ],
    index: 1,
  },
  {
    name: "Романова Мария",
    avatar: "https://loremflickr.com/200/200?random=1",
    myMessages: [
      { data: "2024-05-14", message: "привет", time: "18:00", id: 0 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 1 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 2 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 3 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 4 },
    ],
    hisMessages: [
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 0 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 1 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 2 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 3 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 4 },
    ],
    index: 2,
  },
  {
    name: "Романова Мария",
    avatar: "https://loremflickr.com/200/200?random=1",
    myMessages: [
      { data: "2024-05-14", message: "привет", time: "18:00", id: 0 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 1 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 2 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 3 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 4 },
    ],
    hisMessages: [
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 0 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 1 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 2 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 3 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 4 },
    ],
    index: 3,
  },
  {
    name: "Романова Мария",
    avatar: "https://loremflickr.com/200/200?random=1",
    myMessages: [
      { data: "2024-05-14", message: "привет", time: "18:00", id: 0 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 1 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 2 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 3 },
      { data: "2024-05-14", message: "привет", time: "18:00", id: 4 },
    ],
    hisMessages: [
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 0 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 1 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 2 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 3 },
      { data: "2024-05-14", message: "тыпррав", time: "18:00", id: 4 },
    ],
    index: 4,
  },
];
