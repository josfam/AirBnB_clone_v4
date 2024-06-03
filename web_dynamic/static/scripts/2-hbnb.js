#!/usr/bin/node

$(document).ready(function () {
  const updateAPIIndicator = function () {
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
      const apiIndicator = $('#api_status');
      const status = data.status;
      console.log(`Status of API: ${status}`);
      if (status === 'OK') {
        // add available id to app indicator
        apiIndicator.attr('id', 'available');
      } else {
        // remove available class to app indicator
        apiIndicator.removeAttr('id');
      }
    });
  };
  updateAPIIndicator();
  setInterval(updateAPIIndicator, 2000);
});
