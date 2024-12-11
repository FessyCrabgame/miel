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
    index: 0,
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
