import $ from 'jquery';

export default {

  loadRestaurants: (cityToSearch, successCallback, errorCallback) => {
    $.ajax({
      url: 'https://opentable.herokuapp.com/api/restaurants?&per_page=100&city=' + cityToSearch,
      success: successCallback,
      error: errorCallback
    });
  }
};
