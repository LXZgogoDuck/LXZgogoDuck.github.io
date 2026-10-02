---
layout: post
title: "Hello, world"
kind: thoughts            # thoughts | notes | reading  (shown as a small tag)
description: "Why I am starting this blog."   # one line, shown in post lists
math: true                # set to true only if the post uses LaTeX
---

*This is an example post. Edit or delete it.*

I am starting this page to keep notes on robot learning and to write down ideas while they are still half-formed.

## Writing a post

Create a file in `_posts/` named `YYYY-MM-DD-short-title.md`, copy the header above, and write in Markdown. Push to GitHub and the post appears on the blog and on the homepage within a minute or two.

Math works when `math: true` is set. Inline: \\( Q(s, a) \\). Display:

$$
\pi^\star(a \mid s) \propto \pi_0(a \mid s)\, \exp\!\big(Q(s,a)/\beta\big)
$$

Images and videos go in `media/` and are linked like `![caption](/media/file.jpg)`.
