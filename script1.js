angular.module("bookApp", ['ngAnimate'])

.controller("BookController", function($scope) {
  $scope.books = [
    "https://cdn.prod.website-files.com/5a8855ffd9716c0001a4227d/5b7835585f23e81cb64a65a0_lotr.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    "https://bookspringindia.in/cdn/shop/products/Bsiq.webp?v=1679073176",
    "https://scrolldroll.com/wp-content/uploads/2021/07/the-hobbit-best-selling-books-of-all-time.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg",
    "https://www.libraryjournal.com/binaries/content/gallery/howtosellahauntedhouse.jpg",
    "https://media.briantracy.com/blog/wp-content/uploads/2016/10/20154201/best-sales-books-think-and-grow-rich.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5fzJuR5eRuR9rJopozo2fcn2m2jP5QcxO-0BYsFs2xIe_XwHAK3_Esh1cCAHjWlykoVw43y56IthQsT6kS3WZ-hLggbky2SmRVJVkw8WGuifrW5P4IzaBjITslO1ZO4zAlpXhAg/s1600/41aBqVZR6VL._SX323_BO1%252C204%252C203%252C200_.jpg",
    "https://orion-uploads.openroadmedia.com/md_806563212117-the-bestselling-sci-fi-books-of-all-time_the-left-hand-of-darkness.jpg?w=640",
    "https://m.media-amazon.com/images/I/41Wump5B4lL._SL500_.jpg",
    "https://cdn.waterstones.com/bookjackets/medium/9781/4447/9781444715460.jpg",
    "https://m.media-amazon.com/images/I/61Iz2yy2CKL._UF1000,1000_QL80_.jpg"
  ];

  $scope.recommendations = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKAAQV-xfc7Cpl-H0yGJkSj3OQjS8lc4rXg&s",
    "https://images4.penguinrandomhouse.com/cover/9780375756726",
    "https://images4.penguinrandomhouse.com/cover/9781524763145",
    "https://images1.penguinrandomhouse.com/cover/9780593652886",
    "https://images3.penguinrandomhouse.com/cover/9780525435006"
  ];

  $scope.authors = [
    { name: "Franz Kafka", cover: "https://upload.wikimedia.org/wikipedia/commons/2/26/Franz_Kafka%2C_1923.jpg" },
    { name: "J.K. Rowling", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFl56V2gTsWE_CssKfBRg7Yl5v8_aiuvKpg&s" },
    { name: "Danielle Steel", cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9WqpoFcKJBqZYjy6M6sYrxowXD0gqIrNAZZgiIGOzOHvbyxpt" },
    { name: "Stephen King", cover: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg" },
    { name: "Agatha Christie", cover: "https://oldtowncrier.com/wp-content/uploads/2020/09/last-word-agatha-christie.jpg" }
  ];
})

.directive("authorCard", function () {
  return {
    restrict: "E",
    scope: {
      ngName: "@",
      ngCover: "@"
    },
    template: `
      <div class="author-card">
        <img ng-src="{{ngCover}}" alt="{{ngName}}">
        <div>{{ngName}}</div>
      </div>
    `
  };
});
