const windChillFahrenheit = (temperature, windSpeed) =>
  35.74 +
  0.6215 * temperature -
  35.75 * windSpeed ** 0.16 +
  0.4275 * temperature * windSpeed ** 0.16;
const windChill= Math.round(windChill);
document.getElementById("windChill").innerHTML= windChill;