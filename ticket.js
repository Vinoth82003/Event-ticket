console.log(`"</\../\>"`);

const book = document.querySelector(".book");
const ticketBook = document.querySelector(".ticketBook");
const eventDics = document.querySelector(".eventDics");

book.onclick = function () {
  ticketBook.style.display = "flex";
  eventDics.style.display = "none";
};

ticketBook.onclick = function () {
  ticketBook.style.display = "none";
  eventDics.style.display = "flex";
};
