#!/usr/bin/node

$(document).ready(function () {
  const amenitiesShown = $('.amenities h4');
  const checkboxes = $('.amenities input[type="checkbox"]');
  const amenities = {};

  /* Adds/removes an amenity name to/from a comma-separated list shown directly
  under the `Amenities`, depending on whether the amenity is checked/unchecked
  from the drop-down menu.
  */
  const addOrRemoveAmenity = function () {
    const checkbox = $(this);
    const amenityId = checkbox.attr('data-id');
    const amenityName = checkbox.attr('data-name');
    if (checkbox.is(':checked')) {
      amenities[amenityId] = amenityName;
    } else {
      delete amenities[amenityId];
    }
    const amenitiesString = Object.values(amenities).join(', ');
    amenitiesShown.text(amenitiesString);
  };

  checkboxes.on('change', addOrRemoveAmenity);
});
