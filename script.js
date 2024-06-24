
const linkAccountButton = document.getElementById('link-account');
linkAccountButton.addEventListener('click', () => {
  alert('Please select a social media platform and follow the authentication steps.');
});


const schedulePostForm = document.getElementById('schedule-post-form');
schedulePostForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Your post has been scheduled! (Simulation)');
});


const postCountSpan = document.getElementById('post-count');
let scheduledPostCount = 0; 
postCountSpan.textContent = `(${scheduledPostCount})`;




