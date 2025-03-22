---
layout: page
title: About
permalink: about
---

A place to collect all the little quirks with fonts and software
<p> </p>

### Slack (german speaking group)
[Slack Group: FontMasters](https://join.slack.com/t/font-masters/shared_invite/zt-30yy5r402-obyq3T9oNtp6NXO3Y99L7w){:target="_blank"}
<p> </p>

### Github
This project is independend of any company – just people passionated about fonts.<br>
Feel free to contribute via [Github](https://github.com/schriftgestalt/FontTechKnowledge){:target="_blank"}
<p> </p>

<h2>Contributors</h2>
<div id="contributors"></div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const repoOwner = "ollimeier"; // Change to your GitHub username or organization
    const repoName = "fonttechknowledge"; // Change to your repository name
    const contributorsContainer = document.getElementById("contributors");

    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors`)
      .then(response => response.json())
      .then(contributors => {
        contributorsContainer.innerHTML = "";
        contributors.forEach(contributor => {
          const contributorElement = document.createElement("div");
          contributorElement.innerHTML = `
            <a href="${contributor.html_url}" target="_blank">
              <img src="${contributor.avatar_url}" width="50" height="50" style="border-radius: 50%;" alt="${contributor.login}">
              <p>${contributor.login} (${contributor.contributions} contributions)</p>
            </a>
          `;
          contributorsContainer.appendChild(contributorElement);
        });
      })
      .catch(error => {
        contributorsContainer.innerHTML = "<p>Error loading contributors.</p>";
        console.error("Error fetching contributors:", error);
      });
  });
</script>