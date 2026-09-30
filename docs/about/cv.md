---
title: CV
description: "Curriculum vitae of Evis Plaku: education, university teaching and AI programs since 2005."
render_macros: true
hide:
  - navigation
  - toc
---

<div class="ev-pagehead" markdown>

Last updated June 2026
{ .ev-kicker }

# Curriculum vitae

Twenty years across three parallel tracks: studying, university teaching, and
building AI programs.
{ .ev-lead }

[Download CV (PDF)](../assets/cv/evis-plaku-cv.pdf){ .ev-btn .ev-btn--primary download }
[Publications](../research/publications.md){ .ev-btn .ev-btn--ghost }
{ .ev-actions }

</div>

{% set a0 = cv_axis.start %}{% set span = cv_axis.end - cv_axis.start %}
<figure class="ev-lanes-fig" markdown="0">
<div class="ev-lanes-scroll">
<div class="ev-lanes">
<div class="ev-lanes__axis">
{% for t in cv_axis.ticks %}<span style="left: {{ ((t - a0) / span * 100) | round(2) }}%">{{ t }}</span>{% endfor %}
<span class="ev-lanes__now" style="left: {{ ((2026.75 - a0) / span * 100) | round(2) }}%">now</span>
</div>
{% for lane in cv_lanes %}
<div class="ev-lane ev-lane--{{ lane.id }}">
<div class="ev-lane__name">{{ lane.name }}</div>
<div class="ev-lane__track">
{% for t in cv_axis.ticks %}<i class="ev-lane__tick" style="left: {{ ((t - a0) / span * 100) | round(2) }}%"></i>{% endfor %}
{% for r in cv_roles if r.lane == lane.id %}{% set e = r.end if r.end else 2026.75 %}{% set w = ((e - r.start) / span * 100) | round(2) %}
<div class="ev-bar{% if not r.end %} ev-bar--ongoing{% endif %}{% if w < 5 %} ev-bar--short{% endif %}" tabindex="0" style="left: {{ ((r.start - a0) / span * 100) | round(2) }}%; width: {{ w }}%">
<span class="ev-bar__label">{{ r.label }}</span>
<span class="ev-bar__tip" role="tooltip"><strong>{{ r.title }}</strong>{{ r.place }}, {{ r.start | int }} to {{ (r.end | int) if r.end else "present" }}</span>
</div>
{% endfor %}
</div>
</div>
{% endfor %}
</div>
</div>
<figcaption>Hover or tap a bar for details. Filled bars with an arrow continue today.</figcaption>
</figure>

<div class="ev-cvcols">

<section>
<h2 id="experience">Experience</h2>
<ul class="ev-cvlist">
{% for r in cv_roles | reverse if r.lane != "education" %}<li><span class="ev-cvlist__when">{{ r.start | int }}{% if not r.end %} to present{% elif (r.end | int) != (r.start | int) %} to {{ r.end | int }}{% endif %}</span><strong>{{ r.title }}</strong><span class="ev-cvlist__where">{{ r.place }}</span></li>
{% endfor %}<li><span class="ev-cvlist__when">Ongoing</span><strong>Academic Author and Video Lecturer</strong><span class="ev-cvlist__where">IU International University, three coursebooks and ten video courses</span></li>
</ul>
</section>

<section>
<h2 id="education">Education</h2>
<ul class="ev-cvlist">
{% for r in cv_roles | reverse if r.lane == "education" %}<li><span class="ev-cvlist__when">{{ r.start | int }}{% if not r.end %} to present{% elif (r.end | int) != (r.start | int) %} to {{ r.end | int }}{% endif %}</span><strong>{{ r.title }}</strong><span class="ev-cvlist__where">{{ r.place }}</span></li>
{% endfor %}</ul>
<h2 id="languages">Languages</h2>
<p class="ev-langline"><span><strong>Albanian</strong> native</span><span><strong>English</strong> C2</span><span><strong>Italian</strong> C1</span><span><strong>German</strong> B1</span></p>
</section>

</div>
