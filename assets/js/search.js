// Load search index
fetch('search.json')
  .then(response => response.json())
  .then(data => {
    let pages = data.pages;
    let idx = lunr(function () {
      this.ref('url');
      this.field('title');
      this.field('content');

      pages.forEach(page => this.add(page), this);
    });

    let resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    // Search function
    document.getElementById('search-box').addEventListener('input', function () {
      const query = this.value.trim().toLowerCase();

      if (query.length > 1) {
        const results = idx.search(`*${query}*`);

        if (results.length === 0) {
          resultsContainer.innerHTML = 'Nothing found...';
        } else {
          resultsContainer.innerHTML = '';
          results.forEach(result => {
            const item = pages.find(p => p.url === result.ref);
            const li = document.createElement('li');
            li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
            resultsContainer.appendChild(li);
          });
        }
      } else {
        resultsContainer.innerHTML = '';
      }
    });
  });
