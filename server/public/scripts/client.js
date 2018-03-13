const app = angular.module('giphyApp', []);

const searchController = app.controller('searchController', ['$http', '$sce', function($http, $sce){
  let self = this;
  console.log('Search');
  self.gifArray = [];


  self.getSearch = function(searchGif) {
    console.log('in search gif', searchGif);
    $http({
        method: 'GET',
        url: `/giphy/:${searchGif}`
    }).then(function(response){
        console.log('response', response.data.data);
       let images = response.data.data;
       for (image of images) {
        let url = $sce.trustAsResourceUrl(image.embed_url);
        self.gifArray.push(url);
    }
        console.log(self.gifArray);
      }).catch(function(error){
        console.log('Error getting gifs', error);
      })
  } // end searchGif


}]); // end searchController

const randomController = app.controller('randomController', ['$http', '$sce', function($http, $sce){
    let self = this;
    console.log('Random');
    self.imageArray = [];

    self.randomGif = function() {
        console.log('in random gif');
        $http({
            method: 'GET',
            url: `/giphy`
        }).then(function(response){
            console.log('response', response.data.data);
            self.imageArray = [];
            let image = response.data.data;
             let url = $sce.trustAsResourceUrl(image.embed_url);
             self.imageArray.push(url);
         }).catch(function(error){
            console.log('Error getting gifs', error);
          })
    }

  }]);


  