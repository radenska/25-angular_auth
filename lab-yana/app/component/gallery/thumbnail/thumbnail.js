'use strict';

require('./_thumbnail.scss');

module.exports = {
  template: require('./thumbnail.html'),
  controller: ['$log', 'photoService', ThumbnailController],
  controllerAs: 'thumbnailCtrl',
  bindings: {
    photo: '<'
  }
};

function ThumbnailController($q, $log, $updatethingy, authService) {
  $log.debug('ThumbnailController');

  this.deletePhoto = function() {
    $log.debug('ThumbnailController.deletePhoto');
  }

}
