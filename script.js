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
	let ans=0;
	for(int i=0; i<libr.length, i++){
		if(libr.readingStatus=true){
			ans+=1;
		}
	}
	return ans;
};

// Do not change the code below

alert(numberOfBooksRead());
