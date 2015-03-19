// インストール処理のコールバックをセット
self.addEventListener('install', function(event) {
  // インストール処理
  console.log('installed');
  console.log(event);
});

self.addEventListener('activate', function(event) {
  console.log('activated');
});
