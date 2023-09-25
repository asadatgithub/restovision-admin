'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e21152fc0c1f4f57b76a134c60e3c769",
"index.html": "a8fcf9d5868ed38a51e8b5068a68df35",
"/": "a8fcf9d5868ed38a51e8b5068a68df35",
"styles.css": "01ddf5811b8593a3d721ede630e064d4",
"main.dart.js": "c669992f7b2aa6af768efee6bae258fc",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "3c95f04d279b3a2c4845c858b9041586",
"icons/Icon-192.png": "6e9d2bed0b1afd4bf0f9b91175c04d2a",
"icons/Icon-maskable-192.png": "6e9d2bed0b1afd4bf0f9b91175c04d2a",
"icons/Icon-maskable-512.png": "a7aaaed25d60129ae172307cb2677d62",
"icons/Icon-512.png": "a7aaaed25d60129ae172307cb2677d62",
"manifest.json": "4894b06b21da7b267b0f0a8335cb6b65",
".git/config": "ca3717b841ac527391a0a50b57f0903a",
".git/objects/59/b86f9c4f229f97cb4662b989d79fa7d944f46c": "ddcf92478a5a46d634b502a47334aaa4",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9e/66e00656778acaf92bb376ee6878d7d6ba0514": "6361f983fb2ccce14f8452f93bfe9f08",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/a4/04917633e9b184ad9c43a1eb39f26e2a130b59": "fd2d5b10e2a01a1bddd657579bf546d4",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/05f6fe67ff90c171d3029a154d7bae80e037c2": "1ec6280912a9ab1eba0263370c95efd4",
".git/objects/ad/ecff358aa0b533b5592b69b513591580e38f09": "7e605c3eb41bf91d9ecbaafeebffbb30",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b3/608aa03e6c0e7b1d5ef2ac3860d5ab287753e2": "3edac3d8dcbdf5e8c0e1bdee308d724d",
".git/objects/da/1b0a22dc35a7e26ce6613e37e4f43d6b244257": "5122517fc393b915426ed98c3dc37bcd",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/f4/3821c40e1ee20fdc423d3ca6da3df19cbff218": "159220e8dfb79e63288631de3c597513",
".git/objects/eb/10ffc7751fdfb69e383f770e81243a40e87c18": "26ee0cec2f810a5374dd65e4524c0453",
".git/objects/c0/24647780fe12747c5cb6f49e899e5f31745094": "6bc97c971ebaefd3f1bfc34757e941c8",
".git/objects/c0/92465da697c84df35dfd62e9aafd26de97b7d9": "238c8e4a276ae6aa2d7b8d870ad01585",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/16/ce0c2e3dbf034bc47aa7cd85973383b59e0e82": "315e6c62902ec850f9326450e1f6ea3a",
".git/objects/10/022cf70eca3c8a0d1bd458536ecff1313df48d": "fb527ee08de4ae144b835ef7f30f622a",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/35dc43ae51b5dc4ef09e02a76d9f73fedcd255": "bb1c66bb629e5746a21d091ee2d55114",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/72/6c3e3a647f0a3c5a4786a8304b0817856a0ee3": "a36b0882c7390e616fd5a5814da0823f",
".git/objects/09/8532e796d85c007b06a1fecaa0a02f7bbdec33": "bed096ee862930f3d6d55d3bee0b93df",
".git/objects/5d/f9e102a7e187f6269d0d11f69ec0281143ae3f": "5ec5b86b29462f224e0fc9743fdd18fc",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/98/a1965757b44d335db54d39feb29ea0404eb553": "e629407f5cc40a54dda951b57e3b89e1",
".git/objects/53/f6909c8e5715094952c8978fe2f763a36f0b40": "81979907f0806224202feeb14dfcfff1",
".git/objects/5e/14e74bc93b851300f07077e397d7bc3124331a": "2497c79d8a4c410ae338991e28f39e78",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/90/ffb4e2d11296ac8108ef526ac1b73554a9113f": "b7c3a94f68964192de423727324b7650",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/779a4fb06de7554e166cdecbe8d1869bfff95c": "34d3b2575c5d5983b2ac3268a1981d21",
".git/objects/79/4100c57d925eba078bb64ecf308334c70e1185": "6ea018d34a07c4a76c15f190a77d7773",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/04d6b6cf0ee7ede171a384ad1eb929b22d5625": "9991cd5e288a641432fca3a3c1580254",
".git/objects/1e/9f48edf0f554997d12cc9f89020ce3f2f33a51": "7e1d98ca73f4871692839d544e47b48c",
".git/objects/12/d977542ae6f978cc45517958538ea8e4ebc36e": "6c91a19eab7190dc35b55f84e62a8378",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/8b/b9017ae91d5a72e33eccdec1de4def3f3bc180": "fb0cafbf8013b7675c7967baeb09c9a5",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d9c29005cd23a198c26d094df3945c4a",
".git/logs/refs/heads/main": "d9c29005cd23a198c26d094df3945c4a",
".git/logs/refs/remotes/origin/main": "fa601e0f7abdf2ffe0838dcaba5452c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ff6cb5f4f5bfcd33a7921c43e28619c3",
".git/refs/remotes/origin/main": "ff6cb5f4f5bfcd33a7921c43e28619c3",
".git/index": "be5b25a0aec457568257f0a6de2b2148",
".git/COMMIT_EDITMSG": "e2182f1d866b69749051d19e813727ba",
"assets/AssetManifest.json": "be2a362f979050e64a5835779d535f0c",
"assets/NOTICES": "f42f7562027a4d13b2ae3c857e5918b4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c90ea018157b0fd474781d3368839277",
"assets/fonts/MaterialIcons-Regular.otf": "3d74df29f44090e5b1ee05dcf149d596",
"assets/assets/icon.png": "0411c247d97143f2f4eada0cfa31f5f7",
"assets/assets/earn_coins.svg": "0f588c2d0f0e7f6046cb35123748d3ee",
"assets/assets/claim_gifts.svg": "09c573ea328609abb0507afe5d7a98ee",
"assets/assets/watch_ads.svg": "9073d3fbcdc95f62009e85d65df68ac8",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
