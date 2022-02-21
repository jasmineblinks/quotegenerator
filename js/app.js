function handleSubmit() {
  let quotes = {
    "— Henry Ford":
      '"Whether you think you can or you think you can’t, you’re right."',
    " — Alice Walker":
      '"The most common way people give up their power is by thinking they don’t have any."',
    "— Herb Brooks": '"Risk something or forever sit with your dreams."',
    "— Steve Jobs":
      '"The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.”"',
    "— Theodore Roosevelt": '"Believe you can and you’re halfway there."',
    " — Vince Lombardi":
      '"Perfection is not attainable, but if we chase perfection we can catch excellence."',
    " — Audrey Hepburn":
      'Nothing is impossible, the word itself says ‘I’m possible’!."',
    " — Nelson Mandela":
      '"There is no passion to be found in playing small — in settling for a life that is less than you are capable of living."',
    " — Mahatma Gandhi": '"The future depends on what you do today."',
    " — Stephen Covey":
      '"I am not a product of my circumstances. I am a product of my decisions."',
    " — Albert Einstein":
      '"Strive not to be a success, but rather to be of value."',
    " — Farrah Gray":
      '"Build your own dreams, or someone else will hire you to build theirs."',
  };
  let randomAuthors = Object.keys(quotes);
  let authorPicker =
    randomAuthors[Math.floor(Math.random() * randomAuthors.length)];
  let quote = quotes[authorPicker];
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = authorPicker;
}
handleSubmit();
