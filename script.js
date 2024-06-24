// scripts.js
let accountCounter = 0;

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function linkAccount() {
    const accountList = document.getElementById('accounts');
    accountCounter++;
    
    // Mock account data
    const account = {
        id: accountCounter,
        name: `Social Media Account ${accountCounter}`,
        posts: [
            `Recent post 1 from Account ${accountCounter}`,
            `Recent post 2 from Account ${accountCounter}`
        ]
    };

    const accountDiv = document.createElement('div');
    accountDiv.className = 'account';
    accountDiv.innerHTML = `
        <h3>${account.name}</h3>
        <p>ID: ${account.id}</p>
        <h4>Recent Posts</h4>
        <div class="posts">
            ${account.posts.map(post => `<p>${post}</p>`).join('')}
        </div>
    `;
    accountList.appendChild(accountDiv);
}

function schedulePost() {
    const content = document.getElementById('post-content').value;
    const time = document.getElementById('post-time').value;

    if (!content || !time) {
        alert('Please provide both content and time for the post.');
        return;
    }

    const scheduledPosts = document.getElementById('scheduled-posts');
    const postItem = document.createElement('div');
    postItem.className = 'post';
    postItem.textContent = `Post: ${content} | Time: ${time}`;
    scheduledPosts.appendChild(postItem);

    // Reset form
    document.getElementById('scheduler-form').reset();
}

// Initial page setup
document.addEventListener('DOMContentLoaded', () => {
    showPage('account-management');
});


