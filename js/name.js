const name = document.getElementById('name');
const [firstName, lastName] = 'Toddeh Alexander'.split(' ');

name.innerHTML = `
  <div class="name-part">${firstName.split('').map((letter, i) => `<span class="letter drop" style="--delay:${i * 0.1}s">${letter}</span>`).join('')}</div>
  <div class="name-part">${lastName.split('').map((letter, i, arr) => `<span class="letter drop" style="--delay:${(i + firstName.length + 1) * 0.1}s">${letter}</span>`).join('')}</div>
`;

// After the initial drop, start the bounce animation for a random letter every 2 seconds
setTimeout(() => {
  const letters = document.querySelectorAll('.letter');
  letters.forEach(letter => {
    letter.classList.remove('drop');
  });
  setInterval(() => {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    randomLetter.classList.add('bounce');
    setTimeout(() => {
      randomLetter.classList.remove('bounce');
    }, 500);
  }, 2000);
}, (firstName.length + lastName.length + 1) * 45+ 1500); // Adjust this value as needed