const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];




const numberOfBooksRead = (libr) => {
  // write your code here
	let result=0;
	libr.forEach((book) => {
		if(book.readingStatus){
			result++;
		}
	})
	return result;
};

let result = numberOfBooksRead(library);

// Do not change the code below

alert(numberOfBooksRead());
