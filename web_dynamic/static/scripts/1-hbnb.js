#!/usr/bin/node

const amenitiesShown = $('.amenities h4');
const checkboxes = $('.amenities input[type="checkbox"]');
const amenities = {};

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
