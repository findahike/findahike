
angular.module('hikingApp')
.controller('slideShow', function($scope) {

  $scope.slides = [
    {
      image: 'http://radnorlake.org/wp-content/gallery/trails/April-7th-Ganier-and-Lake-Trail-Pix-by-Steve-Ward-with-Americorps-2015-51.JPG', description: 'Image 00'
    },
    {
      image: 'https://ken-carylranch.org/wp-content/uploads/2011/08/trail-in-trees.jpg', description: 'Image 01'
    },
    {
      image: 'http://www.louisvilleco.gov/Home/ShowImage?id=306&t=635475367475000000', description: 'Image 02'
    },
    {
      image: 'https://www.forestfoundation.org/stuff/contentmgr/files/1/b232236c375aa58ab71135c14a4125b4/files/trails_sign.jpg', description: 'Image 03'
    },
    {
      image: 'http://www.highway199.org/wp-content/gallery/forks-state-park-trails/forks-state-park-trail-bridge.jpg', description: 'Image 04'
    }
  ];

  $scope.currentIndex = 0;

  $scope.setCurrentSlideIndex = function(index) {
    console.log('setCurrentSlideIndex');
    $scope.currentIndex = index;
  };

  $scope.isCurrentSlideIndex = function(index) {
    return $scope.currentIndex === index;
  };
});
