// Expample Response
// {
//     "ip": "142.250.68.100",
//     "location": {
//         "country": "US",
//         "region": "California",
//         "city": "Los Angeles",
//         "lat": 34.05223,
//         "lng": -118.24368,
//         "postalCode": "90001",
//         "timezone": "-08:00",
//         "geonameId": 5368361
//     },
//     "domains": [
//         "ak568.net",
//         "c-dns.cc",
//         "cast-fund.cc",
//         "cxgame.win",
//         "desktop.l.google.com"
//     ],
//     "as": {
//         "asn": 15169,
//         "name": "GOOGLE",
//         "route": "142.250.68.0\/24",
//         "domain": "https:\/\/about.google\/intl\/en\/",
//         "type": "Content"
//     },
//     "isp": "Google LLC"
// }

export type GeoifyResponse = {
  readonly ip: string;
  readonly location: {
    readonly country: string;
    readonly region: string;
    readonly city: string;
    readonly lat: number;
    readonly lng: number;
    readonly postalCode: string;
    readonly timezone: string;
    readonly geonameId: number;
  };
  readonly domains: readonly string[];
  readonly as: {
    readonly asn: number;
    readonly name: string;
    readonly route: string;
    readonly domain: string;
    readonly type: string;
  };
  readonly isp: string;
};
