export const currentLocationLatLng = $state({
  loc: { lat: 37.4221, lng: 122.0841 },
});

export const setCurrentLocationLatLng = (lat: number, lng: number) => {
  currentLocationLatLng.loc = { lat, lng };
};
