// Select the profile image
const profileImg = document.querySelector('.profile-img');

profileImg.addEventListener('click', () => {
  profileImg.classList.toggle('zoomed');
});

// Optional: close zoom with ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape" && profileImg.classList.contains('zoomed')) {
    profileImg.classList.remove('zoomed');
  }
});


