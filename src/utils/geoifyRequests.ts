import type { GeoifyResponse } from "../types/geoify";
import type { IpInfo } from "../types/ipInfo";
import { getStateAbbreviation } from "./abreviateState";
import { setCurrentLocationLatLng } from "../stores/location.svelte";
import { setIpInfo } from "../stores/ipInfo.svelte";

// check if ip address is valid
const ipRegex = new RegExp("^([0-9]{1,3}\\.){3}[0-9]{1,3}$");

export const fetchInfoForIp = async (input: string) => {
  const qureyParemeter = ipRegex.test(input) ? "ipAddress" : "domain";

  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_GEOIPFY_KEY}&${qureyParemeter}=${input}`,
    );

    if (response) {
      const data: GeoifyResponse = await response.json();

      const regionAbbreviation = getStateAbbreviation(data.location.region);

      const responseInfo: IpInfo = {
        ip: data.ip,
        location: `${data.location.city}, ${regionAbbreviation} ${data.location.postalCode}`,
        timezone: `UTC ${data.location.timezone}`,
        isp: data.isp,
      };

      setIpInfo(responseInfo);
      setCurrentLocationLatLng(data.location.lat, data.location.lng);
    }

    return;
  } catch {
    return;
  }
};

export const fetchInfoGeo = async () => {
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_GEOIPFY_KEY}`,
    );

    if (response) {
      const data: GeoifyResponse = await response.json();

      const regionAbbreviation = getStateAbbreviation(data.location.region);

      const responseInfo: IpInfo = {
        ip: data.ip,
        location: `${data.location.city}, ${regionAbbreviation} ${data.location.postalCode}`,
        timezone: `UTC ${data.location.timezone}`,
        isp: data.isp,
      };

      setIpInfo(responseInfo);
    }

    return;
  } catch {
    return;
  }
};
