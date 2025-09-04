var leftarrow  = document.getElementById('left-arrow');   
var rightarrow = document.getElementById('right-arrow');  

var data = [

  { p: "Great experience! Booking was easy, and the hotel exceeded my expectations. Will definitely use this site again." },
  { p: "Had a smooth experience booking our tickets and hotel. Everything was as described, and customer service was responsive." },
  { p: "Simple, fast, and reliable! The hotel was clean, and we had no issues with the booking process. Highly recommend!" },
  { p: "Fantastic website! Everything was straightforward, and we found great deals on both our hotel and tickets." },
  { p: "The booking process was seamless, and the hotel was perfect for our family trip. Will use again for future travels." },
  { p: "Easy to navigate and great prices. The hotel we booked was beautiful, and the tickets were delivered quickly." },
  { p: "I had some concerns, but customer support was quick to help. The whole process was smooth, and our vacation went off without a hitch." },
  { p: "Booking was simple, and we found exactly what we were looking for. The hotel was as expected, and the tickets arrived on time." },
  { p: "We had a wonderful stay! The hotel staff was friendly, and the booking process was smooth. Highly recommend this site!" },
  { p: "Amazing! Found great deals on both tickets and hotels. The website is so easy to use, and everything went as planned." },
  { p: "Perfect for our trip. Everything was organized, and the hotel was just like the photos. Thank you for such a smooth experience!" },
  { p: "Customer support was outstanding! They helped me find the best options and answered all my questions. Will use again." },

];


const cards = document.querySelectorAll('#review-card .feedback-card');
let counter = 3; 

leftarrow.addEventListener('click', function () {
  if (counter - 3 <= 0) {
    counter=data.length+3
    return;
  }
  counter -= 3;
  for (let i = 0; i < 3; i++) {
    const p = cards[i].querySelector('.part2-card p');
    p.textContent = data[counter - 3 + i].p;
  }
});

rightarrow.addEventListener('click', function () {
  if (counter + 3 > data.length) {
    counter=0
    return;
  }
  for (let i = 0; i < 3; i++) {
    const p = cards[i].querySelector('.part2-card p');
    p.textContent = data[counter + i].p;
  }
  counter += 3;
});