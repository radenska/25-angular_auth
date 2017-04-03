'use strict';

module.exports = ['$q', '$log', '$http', 'Upload', 'authService', photoService];

function photoService($q, $log, $http, Upload, authService) {
  $log.debug('photoService');

  let service = {};

  service.uploadGalleryPhoto = function(galleryData, photoData) {
    $log.debug('photoService.uploadGalleryPhoto');

    authService.getToken()
    .then( token => {
      url = `${__API_URL__}/app/gallery/${galleryData._id}/pic`;
      let headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      };
      return Upload.upload({
        url,
        headers,
        method: 'POST',
        data: {
          name: photoData.name,
          desc: photoData.desc,
          file: photoData.file
        }
      });
    })
    .then(response => {
      galleryData.photos.unshift(response.data);
      return response.data;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  return service;
}
