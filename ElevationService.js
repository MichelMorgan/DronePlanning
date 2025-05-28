export default class ElevationService {
  constructor(lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }

  async fetchFromEPQS() {
    const url = `https://epqs.nationalmap.gov/v1/json?x=${this.lon}&y=${this.lat}&units=Meters&wkid=4326&includeDate=False`;
    try {
      const res = await fetch(url);
      const json = await res.json();
      return json?.USGS_Elevation_Point_Query_Service?.Elevation_Query?.Elevation ?? null;
    } catch (err) {
      console.error("EPQS error:", err.message);
      return null;
    }
  }

  async fetchFromGeoGratis() {
    const url = `https://geogratis.gc.ca/services/elevation/cdem/altitude?lat=${this.lat}&lon=${this.lon}&output=json`;
    try {
      const res = await fetch(url);
      const json = await res.json();
      return json?.altitude ?? null;
    } catch (err) {
      console.error("GeoGratis error:", err.message);
      return null;
    }
  }

  async fetchFromOpenElevation() {
    const url = `https://api.open-elevation.com/api/v1/lookup?locations=${this.lat},${this.lon}`;
    try {
      const res = await fetch(url);
      const json = await res.json();
      return json?.results?.[0]?.elevation ?? null;
    } catch (err) {
      console.error("OpenElevation error:", err.message);
      return null;
    }
  }

  async fetchFromOpenTopoData(dataset = "etopo1") {
    const url = `https://api.opentopodata.org/v1/${dataset}?locations=${this.lat},${this.lon}`;
    try {
      const res = await fetch(url);
      const json = await res.json();
      return json?.results?.[0]?.elevation ?? null;
    } catch (err) {
      console.error("OpenTopoData error:", err.message);
      return null;
    }
  }

  async getFirstAvailableElevation() {
    const sources = [
      this.fetchFromEPQS.bind(this),
      this.fetchFromGeoGratis.bind(this),
      this.fetchFromOpenElevation.bind(this),
      this.fetchFromOpenTopoData.bind(this),
    ];

    for (const fetch of sources) {
      const elevation = await fetch();
      if (elevation !== null) {
        return elevation;
      }
    }

    return null;
  }
}
