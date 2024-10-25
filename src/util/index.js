//   async componentDidMount() {

//     const response = await fetch('https://geolocation-db.com/json/');
//     const data = await response.json();
//     this.setState({ ip: data.IPv4 })
//     alert(this.state.ip)
// }

//   private getMyIp() {
//   fetch('https://api.ipify.org?format=json').then(response => {
//     return response.json();
//   }).then((res: any) => {
//     this.myIp = _.get(res, 'ip');
//   }).catch((err: any) => console.error('Problem fetching my IP', err))
// }

// async function handleRequest(request) {
//   const clientUA = request.headers.get('User-Agent');
//   const clientIP = request.headers.get('CF-Connecting-IP');
//   const clientASN = request.cf.asn;
//   const clientISP = request.cf.asOrganization;
//   const clientCO = request.cf.country;
//   const clientCI = request.cf.city;
//   const clientRE = request.cf.region;
//   const clientLAT = request.cf.latitude;
//   const clientLON = request.cf.longitude;
//   const clientPC = request.cf.postalCode;
//   const clientTZ = request.cf.timezone;
//   return new Response(
//     'Public IP: ' +
//       clientIP +
//       '\n' +
//       'ASN: ' +
//       clientASN +
//       '\n' +
//       'ISP: ' +
//       clientISP +
//       '\n' +
//       'Country: ' +
//       clientCO +
//       '\n' +
//       'City: ' +
//       clientCI +
//       '\n' +
//       'Region: ' +
//       clientRE +
//       '\n' +
//       'Latitude, Longitude: ' +
//       clientLAT +
//       ',' +
//       clientLON +
//       '\n' +
//       'Postal Code: ' +
//       clientPC +
//       '\n' +
//       'Timezone: ' +
//       clientTZ +
//       '\n' +
//       'User Agent: ' +
//       clientUA +
//       '\n'
//   );
// }
// addEventListener('fetch', (event) => {
//   event.respondWith(handleRequest(event.request));
// });

// email validation regex
// ^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
