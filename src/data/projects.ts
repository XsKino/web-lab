/* eslint-disable @typescript-eslint/consistent-type-definitions */
type Technology = 'Astro' | 'JavaScript' | 'CSS' | 'React' | 'Vue' | 'Tailwind' | 'Bootstrap' | 'Svelte'

export type Project = {
  test: number
  title: string
  image: string
  href: string
  technologies?: Technology[]
}

const projects: Project[] = [
  {
    test: 1,
    title: 'Expanding Cards',
    image: '/img/test/1/thumbnail.jpg',
    href: '/test/1',
    technologies: ['Astro', 'Tailwind']
  },
  {
    test: 2,
    title: 'Progress Steps',
    image: '/img/test/2/thumbnail.jpg',
    href: '/test/2',
    technologies: ['React', 'Tailwind']
  },
  {
    test: 3,
    title: 'Rotating Navigation',
    image: '/img/test/3/thumbnail.jpg',
    href: '/test/3',
    technologies: ['Astro', 'React', 'CSS', 'Tailwind']
  },
  {
    test: 4,
    title: 'Hidden Search',
    image: '/img/test/4/thumbnail.jpg',
    href: '/test/4',
    technologies: ['JavaScript', 'Tailwind']
  },
  {
    test: 5,
    title: 'Blurry Loading',
    image: '/img/test/5/thumbnail.jpg',
    href: '/test/5',
    technologies: ['React', 'Tailwind']
  },
  {
    test: 6,
    title: 'Scroll Animation',
    image: '/img/test/6/thumbnail.jpg',
    href: '/test/6',
    technologies: ['Astro', 'Tailwind']
  },
  {
    test: 7,
    title: 'Split Landing Page',
    image: '/img/test/7/thumbnail.jpg',
    href: '/test/7',
    technologies: ['Astro', 'Tailwind']
  },
  {
    test: 8,
    title: 'Form Wave Animation',
    image: '/img/test/8/thumbnail.jpg',
    href: '/test/8',
    technologies: ['Astro', 'Tailwind']
  },
  {
    test: 9,
    title: 'Sound Board',
    image: '/img/test/9/thumbnail.jpg',
    href: '/test/9',
    technologies: ['React', 'Tailwind']
  },
  {
    test: 10,
    title: 'Dad Jokes',
    image: '/img/test/10/thumbnail.jpg',
    href: '/test/10',
    technologies: ['React', 'Tailwind']
  },
  {
    test: 11,
    title: 'Event Keycodes',
    image: '/img/test/11/thumbnail.jpg',
    href: '/test/11',
    technologies: ['React', 'Tailwind']
  }
  // {
  //   test: 12,
  //   title: 'FAQ Collapse',
  //   image: '/img/test/12/thumbnail.jpg',
  //   href: '/test/12'
  // },
  // {
  //   test: 13,
  //   title: 'Random Choice Picker',
  //   image: '/img/test/13/thumbnail.jpg',
  //   href: '/test/13'
  // },
  // {
  //   test: 14,
  //   title: 'Animated Navigation',
  //   image: '/img/test/14/thumbnail.jpg',
  //   href: '/test/14'
  // },
  // {
  //   test: 15,
  //   title: 'Incrementing Counter',
  //   image: '/img/test/15/thumbnail.jpg',
  //   href: '/test/15'
  // },
  // {
  //   test: 16,
  //   title: 'Drink Water',
  //   image: '/img/test/16/thumbnail.jpg',
  //   href: '/test/16'
  // },
  // {
  //   test: 17,
  //   title: 'Movie App',
  //   image: '/img/test/17/thumbnail.jpg',
  //   href: '/test/17'
  // },
  // {
  //   test: 18,
  //   title: 'Background Slider',
  //   image: '/img/test/18/thumbnail.jpg',
  //   href: '/test/18'
  // },
  // {
  //   test: 19,
  //   title: 'Theme Clock',
  //   image: '/img/test/19/thumbnail.jpg',
  //   href: '/test/19'
  // },
  // {
  //   test: 20,
  //   title: 'Button Ripple Effect',
  //   image: '/img/test/20/thumbnail.jpg',
  //   href: '/test/20'
  // },
  // {
  //   test: 21,
  //   title: 'Drag N Drop',
  //   image: '/img/test/21/thumbnail.jpg',
  //   href: '/test/21'
  // },
  // {
  //   test: 22,
  //   title: 'Drawing App',
  //   image: '/img/test/22/thumbnail.jpg',
  //   href: '/test/22'
  // },
  // {
  //   test: 23,
  //   title: 'Kinetic Loader',
  //   image: '/img/test/23/thumbnail.jpg',
  //   href: '/test/23'
  // },
  // {
  //   test: 24,
  //   title: 'Content Placeholder',
  //   image: '/img/test/24/thumbnail.jpg',
  //   href: '/test/24'
  // },
  // {
  //   test: 25,
  //   title: 'Sticky Navbar',
  //   image: '/img/test/25/thumbnail.jpg',
  //   href: '/test/25'
  // },
  // {
  //   test: 26,
  //   title: 'Double Vertical Slider',
  //   image: '/img/test/26/thumbnail.jpg',
  //   href: '/test/26'
  // },
  // {
  //   test: 27,
  //   title: 'Toast Notification',
  //   image: '/img/test/27/thumbnail.jpg',
  //   href: '/test/27'
  // },
  // {
  //   test: 28,
  //   title: 'Github Profiles',
  //   image: '/img/test/28/thumbnail.jpg',
  //   href: '/test/28'
  // },
  // {
  //   test: 29,
  //   title: 'Double Click Heart',
  //   image: '/img/test/29/thumbnail.jpg',
  //   href: '/test/29'
  // },
  // {
  //   test: 30,
  //   title: 'Auto Text Effect',
  //   image: '/img/test/30/thumbnail.jpg',
  //   href: '/test/30'
  // },
  // {
  //   test: 31,
  //   title: 'Password Generator',
  //   image: '/img/test/31/thumbnail.jpg',
  //   href: '/test/31'
  // },
  // {
  //   test: 32,
  //   title: 'Good Cheap Fast',
  //   image: '/img/test/32/thumbnail.jpg',
  //   href: '/test/32'
  // },
  // {
  //   test: 33,
  //   title: 'Notes App',
  //   image: '/img/test/33/thumbnail.jpg',
  //   href: '/test/33'
  // },
  // {
  //   test: 34,
  //   title: 'Animated Countdown',
  //   image: '/img/test/34/thumbnail.jpg',
  //   href: '/test/34'
  // },
  // {
  //   test: 35,
  //   title: 'Image Carousel',
  //   image: '/img/test/35/thumbnail.jpg',
  //   href: '/test/35'
  // },
  // {
  //   test: 36,
  //   title: 'Hoverboard',
  //   image: '/img/test/36/thumbnail.jpg',
  //   href: '/test/36'
  // },
  // {
  //   test: 37,
  //   title: 'Pokedex',
  //   image: '/img/test/37/thumbnail.jpg',
  //   href: '/test/37'
  // },
  // {
  //   test: 38,
  //   title: 'Mobile Tab Navigation',
  //   image: '/img/test/38/thumbnail.jpg',
  //   href: '/test/38'
  // },
  // {
  //   test: 39,
  //   title: 'Password Strength Background',
  //   image: '/img/test/39/thumbnail.jpg',
  //   href: '/test/39'
  // },
  // {
  //   test: 40,
  //   title: '3D Background Boxes',
  //   image: '/img/test/40/thumbnail.jpg',
  //   href: '/test/40'
  // },
  // {
  //   test: 41,
  //   title: 'Verify Account UI',
  //   image: '/img/test/41/thumbnail.jpg',
  //   href: '/test/41'
  // },
  // {
  //   test: 42,
  //   title: 'Live User Filter',
  //   image: '/img/test/42/thumbnail.jpg',
  //   href: '/test/42'
  // },
  // {
  //   test: 43,
  //   title: 'Feedback UI Design',
  //   image: '/img/test/43/thumbnail.jpg',
  //   href: '/test/43'
  // },
  // {
  //   test: 44,
  //   title: 'Custom Range Slider',
  //   image: '/img/test/44/thumbnail.jpg',
  //   href: '/test/44'
  // },
  // {
  //   test: 45,
  //   title: 'Netflix Mobile Navigation',
  //   image: '/img/test/45/thumbnail.jpg',
  //   href: '/test/45'
  // },
  // {
  //   test: 46,
  //   title: 'Quiz App',
  //   image: '/img/test/46/thumbnail.jpg',
  //   href: '/test/46'
  // },
  // {
  //   test: 47,
  //   title: 'Testimonial Box Switcher',
  //   image: '/img/test/47/thumbnail.jpg',
  //   href: '/test/47'
  // },
  // {
  //   test: 48,
  //   title: 'Random Image Feed',
  //   image: '/img/test/48/thumbnail.jpg',
  //   href: '/test/48'
  // },
  // {
  //   test: 49,
  //   title: 'Todo List',
  //   image: '/img/test/49/thumbnail.jpg',
  //   href: '/test/49'
  // },
  // {
  //   test: 50,
  //   title: 'Insect Catch Game',
  //   image: '/img/test/50/thumbnail.jpg',
  //   href: '/test/50'
  // }
]

export default projects
