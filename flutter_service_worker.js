'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "60a94922ad84c0a4e4600f321e5891dd",
".git/config": "4c73c633605bbe36438bf4f2d26f4e8b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "141f6e249ec1cd685bac9ff5899d56de",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "da7c451af676d19bfa9d2904bb3686d2",
".git/logs/refs/heads/master": "da7c451af676d19bfa9d2904bb3686d2",
".git/logs/refs/remotes/origin/master": "df820cbd7ec31fafe9e0441ba3a72034",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/1a/80efbae1b2531bade29a276a63351adb437bbd": "c8ac086f4d5535f10967846d70d1d546",
".git/objects/22/9173ecbc9036dced61982641f47703d6b541e3": "f7cf55880043a3d69aa01ddc808ebee7",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3b/a3e0dcd5495825954644e8c7221a84c968d6f2": "fd5bf3b2d783a4d29dafaa51938bbd01",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/48/7d831952acb2d29531c4f5effeaafd07df8c1f": "ed05b72eef5731cceb876492698f6bbb",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/67/2fcde5812959f4fe5a340091427d4cb79fc493": "c3bebaf7ed6f3cccb6bddbb76bde372a",
".git/objects/69/1bf3d0ecddc697cfa594a2108bd23cab96a7e5": "a9f263c9c14f27f96b97ea3e6eed7a0f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/7c/638d3eadd39fd54cb29dfd19a147c30c932287": "841bed4a4c203fbc0db84d57e01206f8",
".git/objects/83/0e66df41f8abb045cf5d17f86bac5eebdf82e5": "ff2b95b2b410ee1f7a5500b2bea62b78",
".git/objects/84/42c83ff495565a7e75c27920ddee207be3b9fc": "a12ff3cdbdd3224008cbce303474d83d",
".git/objects/87/62cca0f93afef328afc7ebe61956c302d485b5": "327d4cc356d4560fa404d02cb02918f8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8f/e64dca045686c4c7f91b7d3fdfb81f68c48973": "af17efd107f8f21a46e7a5b868d6cc3d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/ca23bfcb8329bfca89d39bf7bdf4973c68cddc": "edfe0ac48b8c5ba5540930f80f10e0d5",
".git/objects/98/fbbc0ceacca38868aa2634e0ed16b33778b63c": "31d33f6c27f6e2c944c14b410d5796cb",
".git/objects/9b/ea732906a8bc2ea53e375a2d698760000543fe": "4381293de583cbce34f01ced095f4ead",
".git/objects/a0/4a7f4656abe2f499e7a13d0068727f696a5419": "8498f5f9d0f92a15e086250d5ab4f2a2",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/7f5f1da1356a75aa3827663671962e8dc8e5c9": "ccb13952c5effc6164ea91b5b7c75405",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/d1f0ee157d3baac989f75c029d94d269e51ec1": "2dba90b2ecbfea3f5cb03015f3aa1af2",
".git/objects/aa/0a0e4a5bba2bbcfb6414bd4ce646b2c02e489a": "43356500694dff63bd008806630ab105",
".git/objects/af/45273287b5d37e83d7fd671e95e2b4763f15d0": "b6b568496001500e9841918bafce1681",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/5ce150341fbe1e627ca8fa11cd1ffea682d030": "cd12826c2d81d49eacfc3db2795507ad",
".git/objects/bb/68f0ce4a69cf0b41f272248a036d3cfb7ac464": "b6e63bbe12e57a5fa8eb2b8ccbec1706",
".git/objects/c8/e450dc874bf0ab2621f2e6a196c4e852c4cbff": "6799038b2d18d5e85cfbf5b9cc755455",
".git/objects/cf/2057bc0eb97af8786b43c8209892a4d3b1f023": "ed588ca0f6cce49b4a2eecccc6ee9e76",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e4/dbdf4d30d4ca143e00ad92f6d14d045fd49ef5": "4356724569236e120779e5c9118f78db",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/79d66005dc8f43ceae4de41b0f14a0466920ef": "42ce6b8726263bbc18a3e4a5af12d1c6",
".git/objects/f8/43150c288b27bbaf9d436684a96511dc72bdcf": "576b6a622ebdf13aec75da77f8247822",
".git/refs/heads/master": "46ffb30c2f78f4765ef23b2b6ae08df0",
".git/refs/remotes/origin/master": "46ffb30c2f78f4765ef23b2b6ae08df0",
"assets/AssetManifest.bin": "54304071f751fd2cbddae92f9a98320f",
"assets/AssetManifest.bin.json": "77ac138f5f04b57d1f3b44b521f4daff",
"assets/AssetManifest.json": "fefd2085443f3942abd119bf4242669d",
"assets/assets/fonts/KulimPark-Regular.ttf": "3efa2c26f11ff766630b89394c98d62c",
"assets/assets/fonts/Vintage%2520Smooth.ttf": "86ecb155d26a5ca571b333643e459741",
"assets/assets/fonts/Vintage_Modern.ttf": "6c3249427f4fb06b23a20d9b132f0296",
"assets/assets/images/loading.json": "d5fd3e38b8e596dc09aefec519c0a975",
"assets/assets/images/logo.png": "efb112a05c3ffc3b8c20aea5085a3cba",
"assets/assets/images/qrcode.jpg": "7dda8707a841b596dd38586808cc56e0",
"assets/assets/images/qrcode2000.jpg": "9e89b9474e81888b066867174b13f7d1",
"assets/FontManifest.json": "75a015a6e0d7c6b013e2fbd68316693e",
"assets/fonts/MaterialIcons-Regular.otf": "4618a1fb53d8647b9d8f0cac047339ed",
"assets/NOTICES": "bfc8b6828a79990e8a7f08216699fc8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "efb112a05c3ffc3b8c20aea5085a3cba",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ca548f75b21bdfa9c475c233fbe29cb3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1d22490a41b738be96a4bbd55d5498ae",
"/": "1d22490a41b738be96a4bbd55d5498ae",
"main.dart.js": "c1661ce9bb9482f4536652643ea64ce3",
"manifest.json": "e607ffdc09f11fefcd67a73a0d19a73a",
"version.json": "30ce01e982a5fc473967409d63a61752"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
