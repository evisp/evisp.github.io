---
title: Publications
hide:
  - toc
description: "Journal and conference papers by Evis Plaku on motion planning and safe autonomous navigation."
render_macros: true
---

<div class="ev-pagehead" markdown>

Journal and conference papers, 2017 to 2026
{ .ev-kicker }

# Publications

Papers on motion planning, safe navigation, predictive control and perception.
{ .ev-lead }

[Google Scholar](https://scholar.google.com/citations?user=NRYpvpcAAAAJ){ .ev-btn .ev-btn--ghost }
[ORCID](https://orcid.org/0009-0002-4042-2673){ .ev-btn .ev-btn--ghost }
{ .ev-actions }

</div>

<div class="ev-filter" data-filter="#ev-pubs" role="group" aria-label="Filter papers by research thread">
<button type="button" data-value="all">All</button>
{% for key, label in threads.items() %}<button type="button" data-value="{{ key }}">{{ label }}</button>{% endfor %}
<span class="ev-filter__count" data-filter-count aria-live="polite"></span>
</div>

<div id="ev-pubs" markdown>

{% for group, label in [("journal", "Journal articles"), ("conference", "Conference papers")] %}
<section class="ev-pubgroup" data-filter-section markdown>

## {{ label }}

{% for p in publications if p.type == group %}
<div class="ev-pub ev-pub--{{ p.thread }}" id="{{ p.id }}" data-tags="{{ p.thread }}" markdown>

<p class="ev-pub__meta"><span class="ev-pub__year">{{ p.year }}</span><span class="ev-tag ev-tag--{{ p.thread }}">{{ threads[p.thread] }}</span></p>

<p class="ev-pub__title">{{ p.title }}</p>

<p class="ev-pub__authors">{{ p.authors }}</p>

<p class="ev-pub__venue">{{ p.venue }}{% if p.pages %}, pp. {{ p.pages }}{% endif %}, {% if p.month %}{{ p.month }} {% endif %}{{ p.year }}</p>

{% if p.doi %}<p class="ev-pub__links"><a href="https://doi.org/{{ p.doi }}">DOI {{ p.doi }}</a></p>{% endif %}

??? cite "BibTeX"

    ```bibtex
    @{{ "article" if p.type == "journal" else "inproceedings" }}{{ "{" }}{{ p.id | replace("-", "_") }},
      author    = {{ "{" }}{{ p.authors | replace(", ", " and ") }}{{ "}" }},
      title     = {{ "{" }}{{ p.title }}{{ "}" }},
      {{ "journal  " if p.type == "journal" else "booktitle" }} = {{ "{" }}{{ p.venue }}{{ "}" }},
      year      = {{ "{" }}{{ p.year }}{{ "}" }}{% if p.pages %},
      pages     = {{ "{" }}{{ p.pages | replace("–", "--") }}{{ "}" }}{% endif %}{% if p.doi %},
      doi       = {{ "{" }}{{ p.doi }}{{ "}" }}{% endif %}
    }
    ```

</div>
{% endfor %}

</section>
{% endfor %}

</div>

Looking for the code or data behind a paper? Most research code stays private
while work is in progress, but [ask me](../about/contact.md) with the paper title
and I will share what I can.
{ .ev-note }
