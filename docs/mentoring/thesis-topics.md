---
title: Thesis Topics
render_macros: true
---

<div class="ev-pagehead" markdown>

Open positions
{ .ev-kicker }

# Thesis topics

Topics for bachelor and master theses in AI agents, agentic retrieval and
robotics. Each is a starting point, and we shape it together to fit your
interests and time.
{ .ev-lead }

</div>

{% for key, label in areas.items() %}
## {{ label }}

<div class="ev-topics">
{% for t in topics if t.area == key %}
<article class="ev-topic{% if t.status == 'taken' %} ev-topic--taken{% endif %}">
<p class="ev-topic__meta"><span class="ev-topic__level">{{ t.level }}</span>{% if t.status == 'taken' %}<span class="ev-topic__status">Taken</span>{% endif %}</p>
<h3 class="ev-topic__title">{{ t.title }}</h3>
<p class="ev-topic__summary">{{ t.summary }}</p>
<p class="ev-topic__skills">{% for s in t.skills %}<span>{{ s }}</span>{% endfor %}</p>
</article>
{% endfor %}
</div>
{% endfor %}

<div class="ev-callout" markdown>

**Interested in a topic, or have your own idea?** Email me with the topic title,
your program (BSc or MSc) and one paragraph on why it interests you.
[Contact](../about/contact.md){ .ev-textlink }

</div>
