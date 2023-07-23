
export interface ImageData {
  src: string;
  active?: boolean;
  positioned?: boolean;
}

export interface Slide {
  src : string
  title : string
  description : string
  active : boolean
}


export const slides: Slide[] = [
  {
    src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/letter-a.jpg',
    title: 'Daily Design Inspiration',
    description: 'Part of the Daily Design Inspiration series that started it all on Abduzeedo. This is where you\'ll find the most interesting things/finds/work curated by one of us to simply inspire your day.',
    active: true
  },
  {
    src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/action.jpg',
    title: 'Wallpaper of the week',
    description: 'It\'s been a little while since our last WPW; following up our comeback with the Wallpaper of the Week series, it\'s crazy to imagine there\'s more than 350+ wallpapers available to download for your different...',
    active: false
  },
  {
    src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/letter-e.jpg',
    title: 'Stunning 3D Work',
    description: 'I love everything 3D, Back in the early 2000s I spent a fair amount of time trying to learn 3ds Max, then Cinema 4d. It was a good time but I couldn\'t stand the rendering times, especially to find out that my composition was bad in all senses, modeling, lighting, texture.',
    active: false
  },
  {
    src: 'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/other.jpg',
    title: 'Daily Design Inspiration',
    description: 'Part of the Daily Design Inspiration series that started it all on Abduzeedo. This is where you\'ll find the most interesting things/finds/work curated by one of us to simply inspire your day.',
    active: false
  }
];
