---
layout: page
excerpt: "Publications by the Nord Lab"
feature_text: |
  ## Publications
feature_image: "https://picsum.photos/2560/600?image=873"
repository: NoNGNLab/Publications
path: ""
---
___

<font size="6">
  <ul style="list-style-type:disc;">
    {% for repository in site.github.public_repositories %}
      {% if repository.name == "Publications" %}
        {{ repository.contents_url }} 
        {% for item in repository.contents_url %}
          item
        {% endfor %}	 
        item
        {% for project in repository.projects %}
          <li>{{ project }}</li>
        {% endfor %}
      {% endif %}
    {% endfor %}
  </ul>
</font>
___

<link rel="preload" href="https://api.github.com/repos/NoNGNLab/Publications/contents/" as="fetch">
