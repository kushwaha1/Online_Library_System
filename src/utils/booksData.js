import { v4 as uuidv4 } from 'uuid';

export const booksData = [
  {
    id: uuidv4(),
    author: "Haruki Murakami",
    title: "Kafka on the Shore",
    category_type: "Fiction",
    image: "https://images.penguinrandomhouse.com/cover/9781400079278", // New Penguin link
    description: "A surreal journey of a boy named Kafka and an elderly man, blending reality and dreams.",
    rating: 4.7
  },
  {
    id: uuidv4(),
    author: "Michelle Obama",
    title: "Becoming",
    category_type: "Non-Fiction",
    image: "https://images.penguinrandomhouse.com/cover/9781524763138",
    description: "An intimate, powerful memoir by the former First Lady of the United States.",
    rating: 4.8
  },
  {
    id: uuidv4(),
    author: "Stephen Hawking",
    title: "A Brief History of Time",
    category_type: "Science",
    image: "https://images.penguinrandomhouse.com/cover/9780553380163",
    description: "Explores fundamental questions about the universe, black holes, and time itself.",
    rating: 4.6
  },
  {
    id: uuidv4(),
    author: "Agatha Christie",
    title: "Murder on the Orient Express",
    category_type: "Crime",
    image: "https://www.harpercollins.com/cdn/shop/products/9780062693662.jpg", // New HarperCollins link
    description: "Detective Hercule Poirot investigates a murder on a snowbound train.",
    rating: 4.9
  },
  {
    id: uuidv4(),
    author: "Gillian Flynn",
    title: "Gone Girl",
    category_type: "Mystery",
    image: "https://images.penguinrandomhouse.com/cover/9780307588371",
    description: "A psychological thriller exploring deception, marriage, and media manipulation.",
    rating: 4.5
  },
  {
    id: uuidv4(),
    author: "J.K. Rowling",
    title: "The Casual Vacancy",
    category_type: "Fiction",
    image: "https://images.penguinrandomhouse.com/cover/9780316228589", // New Penguin link
    description: "A small town’s dark secrets unfold after the sudden death of a council member.",
    rating: 4.1
  },
  {
    id: uuidv4(),
    author: "Yuval Noah Harari",
    title: "Sapiens",
    category_type: "Non-Fiction",
    image: "https://images.penguinrandomhouse.com/cover/9780062316110",
    description: "A sweeping exploration of human history, from the Stone Age to the modern age.",
    rating: 4.7
  },
  {
    id: uuidv4(),
    author: "Carl Sagan",
    title: "Cosmos",
    category_type: "Science",
    image: "https://images.penguinrandomhouse.com/cover/9780345539434", // New Penguin link
    description: "An accessible guide to the universe, blending science, philosophy, and history.",
    rating: 4.8
  },
  {
    id: uuidv4(),
    author: "Arthur Conan Doyle",
    title: "The Hound of the Baskervilles",
    category_type: "Crime",
    image: "https://images.penguinrandomhouse.com/cover/9780141192437", // New Penguin link
    description: "Sherlock Holmes investigates the legend of a supernatural hound threatening a wealthy family.",
    rating: 4.9
  },
  {
    id: uuidv4(),
    author: "Tana French",
    title: "In the Woods",
    category_type: "Mystery",
    image: "https://images.penguinrandomhouse.com/cover/9780143113492",
    description: "Detective Rob Ryan investigates a murder in his hometown, uncovering buried secrets.",
    rating: 4.4
  },
  // {
  //   id: uuidv4(),
  //   author: "Chimamanda Ngozi Adichie",
  //   title: "Americanah",
  //   category_type: "Fiction",
  //   image: "https://images.penguinrandomhouse.com/cover/9780307455925",
  //   description: "A story of love, race, and identity spanning Nigeria and the United States.",
  //   rating: 4.6
  // },
  // {
  //   id: uuidv4(),
  //   author: "Malcolm Gladwell",
  //   title: "Outliers",
  //   category_type: "Non-Fiction",
  //   image: "https://images.penguinrandomhouse.com/cover/9780316017930",
  //   description: "Analyzes the factors that contribute to high levels of success.",
  //   rating: 4.5
  // }
]