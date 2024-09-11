export function generateRandomBooks({ quantity }: { quantity: number }) {
  const newBooks = [];
  for (let i = 0; i < quantity; i++) {
    newBooks.push({
      author: generateRandomAuthor(),
      pagesQuantity: generateRandomPagesQuantity(),
      publishYear: generateRandomPublishYear(),
      title: generateRandomTitle(),
    });
  }
  return newBooks;
}

function generateRandomAuthor() {
  const authorFirstName = ["Anna", "Dawid", "Helena"];
  const authorLastName = ["Jedynak", "Misiak", "Nowak"];
  const generatedAuthor = `${
    authorFirstName[Math.floor(Math.random() * authorFirstName.length)]
  } ${authorLastName[Math.floor(Math.random() * authorLastName.length)]}`;
  return generatedAuthor;
}

function generateRandomPagesQuantity() {
  const maxPagesQuantity = 777;
  const minPagesQuantity = 100;
  const pagesQuantity = `${Math.floor(
    Math.random() * (maxPagesQuantity - minPagesQuantity) + minPagesQuantity
  )}`;
  return pagesQuantity;
}

function generateRandomPublishYear() {
  const maxYear = new Date().getFullYear();
  const minYear = maxYear - 100;
  const publishYear = `${Math.floor(
    Math.random() * (maxYear - minYear) + minYear
  )}`;
  return publishYear;
}

function generateRandomTitle() {
  const title1 = ["Siedem", "Pięć", "Tysiąc"];
  const title2 = ["wspaniałych", "czerwonych", "szybkich"];
  const title3 = ["nocy", "poduszek", "przygód"];
  const generatedTitle = `${
    title1[Math.floor(Math.random() * title1.length)]
  } ${title2[Math.floor(Math.random() * title2.length)]} ${
    title3[Math.floor(Math.random() * title3.length)]
  }`;
  return generatedTitle;
}
