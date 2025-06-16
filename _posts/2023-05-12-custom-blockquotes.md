[//]: # (---)

[//]: # (layout: post)

[//]: # (title: a post with custom blockquotes)

[//]: # (date: 2023-05-12 15:53:00-0400)

[//]: # (description: an example of a blog post with custom blockquotes)

[//]: # (tags: formatting blockquotes)

[//]: # (categories: sample-posts)

[//]: # (giscus_comments: true)

[//]: # (related_posts: true)

[//]: # (---)

[//]: # ()
[//]: # (This post shows how to add custom styles for blockquotes. Based on [jekyll-gitbook]&#40;https://github.com/sighingnow/jekyll-gitbook&#41; implementation.)

[//]: # ()
[//]: # (We decided to support the same custom blockquotes as in [jekyll-gitbook]&#40;https://sighingnow.github.io/jekyll-gitbook/jekyll/2022-06-30-tips_warnings_dangers.html&#41;, which are also found in a lot of other sites' styles. The styles definitions can be found on the [\_base.scss]&#40;https://github.com/alshedivat/al-folio/blob/main/_sass/_base.scss&#41; file, more specifically:)

[//]: # ()
[//]: # (```scss)

[//]: # (/* Tips, warnings, and dangers */)

[//]: # (.post .post-content blockquote {)

[//]: # (  &.block-tip {)

[//]: # (    border-color: var&#40;--global-tip-block&#41;;)

[//]: # (    background-color: var&#40;--global-tip-block-bg&#41;;)

[//]: # ()
[//]: # (    p {)

[//]: # (      color: var&#40;--global-tip-block-text&#41;;)

[//]: # (    })

[//]: # ()
[//]: # (    h1,)

[//]: # (    h2,)

[//]: # (    h3,)

[//]: # (    h4,)

[//]: # (    h5,)

[//]: # (    h6 {)

[//]: # (      color: var&#40;--global-tip-block-title&#41;;)

[//]: # (    })

[//]: # (  })

[//]: # ()
[//]: # (  &.block-warning {)

[//]: # (    border-color: var&#40;--global-warning-block&#41;;)

[//]: # (    background-color: var&#40;--global-warning-block-bg&#41;;)

[//]: # ()
[//]: # (    p {)

[//]: # (      color: var&#40;--global-warning-block-text&#41;;)

[//]: # (    })

[//]: # ()
[//]: # (    h1,)

[//]: # (    h2,)

[//]: # (    h3,)

[//]: # (    h4,)

[//]: # (    h5,)

[//]: # (    h6 {)

[//]: # (      color: var&#40;--global-warning-block-title&#41;;)

[//]: # (    })

[//]: # (  })

[//]: # ()
[//]: # (  &.block-danger {)

[//]: # (    border-color: var&#40;--global-danger-block&#41;;)

[//]: # (    background-color: var&#40;--global-danger-block-bg&#41;;)

[//]: # ()
[//]: # (    p {)

[//]: # (      color: var&#40;--global-danger-block-text&#41;;)

[//]: # (    })

[//]: # ()
[//]: # (    h1,)

[//]: # (    h2,)

[//]: # (    h3,)

[//]: # (    h4,)

[//]: # (    h5,)

[//]: # (    h6 {)

[//]: # (      color: var&#40;--global-danger-block-title&#41;;)

[//]: # (    })

[//]: # (  })

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (A regular blockquote can be used as following:)

[//]: # ()
[//]: # (```markdown)

[//]: # (> This is a regular blockquote)

[//]: # (> and it can be used as usual)

[//]: # (```)

[//]: # ()
[//]: # (> This is a regular blockquote)

[//]: # (> and it can be used as usual)

[//]: # ()
[//]: # (These custom styles can be used by adding the specific class to the blockquote, as follows:)

[//]: # ()
[//]: # (<!-- prettier-ignore-start -->)

[//]: # ()
[//]: # (```markdown)

[//]: # (> ##### TIP)

[//]: # (>)

[//]: # (> A tip can be used when you want to give advice)

[//]: # (> related to a certain content.)

[//]: # ({: .block-tip })

[//]: # (```)

[//]: # ()
[//]: # (> ##### TIP)

[//]: # (>)

[//]: # (> A tip can be used when you want to give advice)

[//]: # (> related to a certain content.)

[//]: # ({: .block-tip })

[//]: # ()
[//]: # (```markdown)

[//]: # (> ##### WARNING)

[//]: # (>)

[//]: # (> This is a warning, and thus should)

[//]: # (> be used when you want to warn the user)

[//]: # ({: .block-warning })

[//]: # (```)

[//]: # ()
[//]: # (> ##### WARNING)

[//]: # (>)

[//]: # (> This is a warning, and thus should)

[//]: # (> be used when you want to warn the user)

[//]: # ({: .block-warning })

[//]: # ()
[//]: # (```markdown)

[//]: # (> ##### DANGER)

[//]: # (>)

[//]: # (> This is a danger zone, and thus should)

[//]: # (> be used carefully)

[//]: # ({: .block-danger })

[//]: # (```)

[//]: # ()
[//]: # (> ##### DANGER)

[//]: # (>)

[//]: # (> This is a danger zone, and thus should)

[//]: # (> be used carefully)

[//]: # ({: .block-danger })

[//]: # ()
[//]: # (<!-- prettier-ignore-end -->)
