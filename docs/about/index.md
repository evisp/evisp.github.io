---
title: About
description: "About Evis Plaku, lecturer, AI researcher and mentor in Tirana: bio, career and contact."
render_macros: true
hide:
  - navigation
  - toc
---

<div class="ev-pagehead" markdown>

Lecturer, researcher and mentor
{ .ev-kicker }

# About

I'm Evis Plaku. For more than a decade I have taught, researched and built in
AI with one aim: helping people and systems ==grow into independence==.
{ .ev-lead }

[:lucide-mail: Email](mailto:evis.plaku@umt.edu.al){ .ev-chip }
[:fontawesome-brands-google-scholar: Scholar](https://scholar.google.com/citations?user=NRYpvpcAAAAJ){ .ev-chip }
[:fontawesome-brands-orcid: ORCID](https://orcid.org/0009-0002-4042-2673){ .ev-chip }
[:fontawesome-brands-linkedin: LinkedIn](https://www.linkedin.com/in/evisplaku/){ .ev-chip }
{ .ev-chips-row }

</div>

<div class="ev-about" markdown>

<div class="ev-about__text" markdown>

I lecture at the Metropolitan University of Tirana, where I teach Data
Structures & Algorithms and Object-Oriented Programming in Java and serve as
Program Director for AI. At Holberton School I am Education Lead and AI
Engineer, and I lead the machine learning curriculum across its international
campuses.

My research, and my PhD at UMT, is about robots that navigate complex
environments on their own. I studied in Tirana, Freiburg and Washington D.C.,
and have written three university coursebooks along the way. Away from work
you will find me at a chessboard or with a book of poems.

</div>

<aside class="ev-sheet" aria-label="Key facts" markdown="0">
<div class="ev-sheet__head">
<span>Evis Plaku</span>
<span>Tirana, Albania</span>
</div>
<dl class="ev-sheet__rows">
<div><dt>Teaching</dt><dd>Data Structures &amp; Algorithms, OOP in Java, applied machine learning</dd></div>
<div><dt>Research</dt><dd>Motion planning, risk-aware navigation, predictive control, perception</dd></div>
<div><dt>Leading</dt><dd>AI program at UMT; ML curriculum at Holberton</dd></div>
<div><dt>Languages</dt><dd>Albanian, English (C2), Italian (C1), German (B1)</dd></div>
</dl>
<div class="ev-sheet__stub">
<a class="ev-btn ev-btn--primary" href="../assets/cv/evis-plaku-cv.pdf" download>Download CV (PDF)</a>
<span class="ev-sheet__updated">Updated June 2026</span>
</div>
</aside>

</div>

<section class="ev-section-block" markdown>

## Career { #career }

Twenty years across three parallel tracks: studying, university teaching, and
building AI programs.
{ .ev-sublead }

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
<figcaption>Hover or tap a bar for details. Bars with an arrow continue today.</figcaption>
</figure>

<details class="ev-roles">
<summary>All roles and degrees</summary>
<div class="ev-cvcols">
<section>
<p class="ev-roles__head">Experience</p>
<ul class="ev-cvlist">
{% for r in cv_roles | reverse if r.lane != "education" %}<li><span class="ev-cvlist__when">{{ r.start | int }}{% if not r.end %} to present{% elif (r.end | int) != (r.start | int) %} to {{ r.end | int }}{% endif %}</span><strong>{{ r.title }}</strong><span class="ev-cvlist__where">{{ r.place }}</span></li>
{% endfor %}<li><span class="ev-cvlist__when">Ongoing</span><strong>Academic Author and Video Lecturer</strong><span class="ev-cvlist__where">IU International University, three coursebooks and ten video courses</span></li>
</ul>
</section>
<section>
<p class="ev-roles__head">Education</p>
<ul class="ev-cvlist">
{% for r in cv_roles | reverse if r.lane == "education" %}<li><span class="ev-cvlist__when">{{ r.start | int }}{% if not r.end %} to present{% elif (r.end | int) != (r.start | int) %} to {{ r.end | int }}{% endif %}</span><strong>{{ r.title }}</strong><span class="ev-cvlist__where">{{ r.place }}</span></li>
{% endfor %}</ul>
</section>
</div>
</details>

</section>

<section class="ev-section-block ev-contact" markdown>

## Get in touch { #contact }

<div class="ev-email">
<a class="ev-email__address" href="mailto:evis.plaku@umt.edu.al">evis.plaku@umt.edu.al</a>
<button type="button" class="ev-copy" data-copy="evis.plaku@umt.edu.al" aria-label="Copy email address">Copy</button>
</div>

<div class="ev-audiences">
<div><strong>Students</strong><span>Office hours and email guidelines are on the <a href="../teaching/index.md#for-students">Teaching page</a>.</span></div>
<div><strong>Researchers</strong><span>Collaboration, co-supervision or code behind a paper: name the paper in the subject.</span></div>
<div><strong>Institutions</strong><span>Programs, training or talks: include the dates, audience and format.</span></div>
</div>

<p class="ev-hoursline"><span>Office hours</span>Monday 12:00 to 14:00, Wednesday 08:30 to 10:30, Room 104, UMT</p>

<div class="ev-orgbio">
<p class="ev-orgbio__label">Short bio for organizers</p>
<p class="ev-orgbio__text" id="ev-orgbio">Evis Plaku is a lecturer and AI researcher at the Metropolitan University of Tirana, working on motion planning and safe navigation for autonomous robots.</p>
<button type="button" class="ev-copy" data-copy-from="#ev-orgbio" aria-label="Copy short bio">Copy</button>
</div>

</section>
