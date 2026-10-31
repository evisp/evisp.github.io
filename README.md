# Evis Plaku: personal site

Built with Zensical, deployed to GitHub Pages on every push to `main`.

    source .venv/bin/activate
    zensical serve          # preview at http://localhost:8000 (drafts included)

Where things live:

- `docs/`                    pages (Markdown)
- `data/publications.yml`    papers, rendered on Research > Publications
- `data/topics.yml`          thesis topics, rendered on Teaching & Mentoring
- `data/news.yml`            Recent moves on the home page (newest first; kind: milestone, paper, program, event, talk)
- `data/research.yml`        research directions and questions
- `data/cv.yml`              roles on the CV career chart
- `docs/writing/posts/`      blog posts (remove `draft: true` to publish)
- `docs/stylesheets/notebook.css`  the whole design system, in numbered sections
- `docs/javascripts/filters.js`  filter chips and copy buttons; research direction selector
- `overrides/`               home page, 404 and link-preview templates

Research videos and pictures:

1. Put `name.jpg` (16:9 still) and `name.mp4` in `docs/assets/research/`.
2. In `data/research.yml`, uncomment the `media:` lines under the question.
