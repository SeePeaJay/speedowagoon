importScripts("/speedowagoon/precache-manifest.582fd8415406a4a0c4deda4bbcb5e993.js", "/speedowagoon/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/speedowagoon/workbox-v4.3.1"});
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.staleWhileRevalidate(0),
)

workbox.routing.registerRoute(
  new RegExp('https://reqres.in'),
  workbox.strategies.networkFirst(),
)

