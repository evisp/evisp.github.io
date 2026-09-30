---
date:
  created: 2026-10-01
draft: true
slug: euclid
categories:
  - Ancient Algorithms
description: Sample post. Replace with the first essay of the series.
---

# Euclid's algorithm: two thousand years of finding common ground

Sample post to preview the manuscript style. Replace the text, keep the shape:
one opening paragraph, then the essay.

<!-- more -->

Long before anyone built a computer, Euclid described a procedure for finding
the greatest common divisor of two numbers: replace the larger number with the
remainder of dividing it by the smaller, and repeat until nothing remains.

<aside class="ev-margin" markdown>
Euclid's *Elements*, Book VII, written around 300 BC. The method is probably
older than Euclid himself.
</aside>

It is short enough to fit on a napkin, and it has not needed an improvement in
more than two thousand years.

```python
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a
```

What makes it worth an essay is not the code but the idea behind it: a hard
problem becomes an easy one if you know which smaller problem has the same
answer.
