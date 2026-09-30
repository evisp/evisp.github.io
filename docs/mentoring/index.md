---
title: Mentoring
description: "Open bachelor and master thesis topics in AI agents, agentic RAG and robotics, and how supervision works."
render_macros: true
hide:
  - navigation
  - toc
---

<div class="ev-pagehead" markdown>

Open positions
{ .ev-kicker }

# Mentoring

Thesis topics in AI agents, agentic retrieval and robotics. A good mentor
becomes less necessary over time: the aim is for you to ==plan your own next move==.
{ .ev-lead }

</div>

## Thesis topics

<div class="ev-filter" data-filter="#ev-topics" role="group" aria-label="Filter topics by area">
<button type="button" data-value="all">All</button>
{% for key, label in areas.items() %}<button type="button" data-value="{{ key }}">{{ label }}</button>{% endfor %}
<span class="ev-filter__count" data-filter-count aria-live="polite"></span>
</div>

<div class="ev-topics" id="ev-topics">
{% for t in topics %}<article class="ev-topic{% if t.status == 'taken' %} ev-topic--taken{% endif %}" data-tags="{{ t.area }}">
<p class="ev-topic__meta"><span class="ev-tag ev-tag--{{ t.area }}">{{ areas[t.area] }}</span><span class="ev-topic__level">{{ t.level }}</span>{% if t.status == 'taken' %}<span class="ev-topic__status">Taken</span>{% endif %}</p>
<h3 class="ev-topic__title">{{ t.title }}</h3>
<p class="ev-topic__summary">{{ t.summary }}</p>
<p class="ev-topic__skills">{% for s in t.skills %}<span>{{ s }}</span>{% endfor %}</p>
</article>
{% endfor %}</div>

## How a thesis works

<ol class="ev-stepper">
<li><strong>Pick a topic</strong><span>From the list, or your own idea</span></li>
<li><strong>One-page plan</strong><span>Question, approach, what "done" means</span></li>
<li><strong>Build and test</strong><span>Short meetings every two weeks</span></li>
<li><strong>Write it up</strong><span>Reviewed chapter by chapter</span></li>
<li><strong>Defend</strong><span>With a rehearsal first</span></li>
</ol>

<div class="ev-two">
<div class="ev-two__col">
<p class="ev-students__label">What I expect</p>
<p>Steady work, honest updates when you are stuck, and code and writing you can explain line by line.</p>
</div>
<div class="ev-two__col">
<p class="ev-students__label">What you can expect</p>
<p>Regular, focused meetings, feedback within a week, and help turning strong work into a paper.</p>
</div>
</div>

<div class="ev-callout" markdown>

**Interested?** Email me the topic title, your program (BSc or MSc) and one
paragraph on why it interests you. [Contact](../about/index.md#contact){ .ev-textlink }

</div>
