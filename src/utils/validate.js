export const validateCity = (city) => {
  if (!city || city.trim().length === 0) {
    throw new Error("City is required");
  }
};

export const validateCoords = (lat, lon) => {
  if (
    isNaN(lat) ||
    isNaN(lon) ||
    lat < -90 ||
    lat > 90 ||
    lon < -180 ||
    lon > 180
  ) {
    throw new Error("Invalid latitude or longitude");
  }
};
