export interface Category {
  value: string;
  label: string;
}

// export interface Article {
//   author: string;
//   content: string;
//   description: string;
//   publishedAt: string;
//   source: {
//     id: string;
//     name: string;
//   };
//   title: string;
//   url: string;
//   urlToImage: string;
// }

export interface Article {
 title: string,
 description: string,
 content: string,
 url: string;
 image: string;
 publishedAt: string;
 source:{
   name: string,
   url: string
 }
}

