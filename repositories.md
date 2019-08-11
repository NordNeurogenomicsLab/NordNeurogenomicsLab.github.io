---
title: Repositories
layout: page      
feature_image: "https://picsum.photos/2560/600?image=873"
excerpt: "Nord Lab Repositories"
---
___
<font size="6">
  <ul style="list-style-type:disc;">
    {% for repository in site.github.public_repositories %}
      {% if repository.name != "Publications" and repository.name != "NoNGNLab.github.io" %}
        <p><a href="{{ repository.html_url }}">{{ repository.name }}</a></p>
      {% endif %}
    {% endfor %}
  </ul>
</font>
___
