[//]: # (---)

[//]: # (layout: post)

[//]: # (title: a post with advanced image components)

[//]: # (date: 2024-01-27 11:46:00)

[//]: # (description: this is what advanced image components could look like)

[//]: # (tags: formatting images)

[//]: # (categories: sample-posts)

[//]: # (thumbnail: assets/img/9.jpg)

[//]: # (images:)

[//]: # (  compare: true)

[//]: # (  slider: true)

[//]: # (---)

[//]: # ()
[//]: # (This is an example post with advanced image components.)

[//]: # ()
[//]: # (## Image Slider)

[//]: # ()
[//]: # (This is a simple image slider. It uses the [Swiper]&#40;https://swiperjs.com/&#41; library. Check the [examples page]&#40;https://swiperjs.com/demos&#41; for more information of what you can achieve with it.)

[//]: # ()
[//]: # (<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">)

[//]: # (  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/9.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>)

[//]: # (  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/7.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>)

[//]: # (  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/8.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>)

[//]: # (  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/10.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>)

[//]: # (  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/12.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>)

[//]: # (</swiper-container>)

[//]: # ()
[//]: # (## Image Comparison Slider)

[//]: # ()
[//]: # (This is a simple image comparison slider. It uses the [img-comparison-slider]&#40;https://img-comparison-slider.sneas.io/&#41; library. Check the [examples page]&#40;https://img-comparison-slider.sneas.io/examples.html&#41; for more information of what you can achieve with it.)

[//]: # ()
[//]: # (<img-comparison-slider>)

[//]: # (  {% include figure.liquid path="assets/img/prof_pic.jpg" class="img-fluid rounded z-depth-1" slot="first" %})

[//]: # (  {% include figure.liquid path="assets/img/prof_pic_color.png" class="img-fluid rounded z-depth-1" slot="second" %})

[//]: # (</img-comparison-slider>)
