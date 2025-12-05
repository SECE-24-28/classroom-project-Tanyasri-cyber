async function apicall() {
  let result = await fetch("https://library-management-api-i6if.onrender.com/api/books");
  let finalresult = await result.json();
  console.log(finalresult); 
  let books = finalresult.books; 
  let output = "";
  books.forEach(item => {
    output += item.title + " - " + item.author + "<br>";
  });
  document.getElementById("result").innerHTML = output;
}
