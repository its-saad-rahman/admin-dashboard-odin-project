const para = document.querySelectorAll('.announcments__content--desc');
para.forEach((p) => (p.innerText = p.innerText.substring(0, 100) + '...'));
