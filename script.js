fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById('posts-container');
    container.innerHTML = '';
    posts.forEach(post => {
      const div = document.createElement('div');
      div.className = 'post';
      div.innerHTML = `
        <div class="post-date">🗓️ ${post.date}</div>
        <div class="post-text">${post.text}</div>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById('posts-container').innerHTML =
      '<p>Error loading posts.</p>';
  });
