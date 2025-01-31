import type { IpInfo } from "../types/ipInfo";

export const ipInfo = $state<IpInfo>({
  ip: "--",
  location: "--",
  timezone: "--",
  isp: "--",
});

export const setIpInfo = (info: IpInfo) => {
  ipInfo.ip = info.ip;
  ipInfo.location = info.location;
  ipInfo.timezone = info.timezone;
  ipInfo.isp = info.isp;
};
