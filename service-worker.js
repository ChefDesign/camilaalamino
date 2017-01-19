var files = [
  "aprovacoes-orgaos-competentes.html",
  "arquiteta-urbanista-sorocaba.html",
  "design-interiores.html",
  "index.html",
  "offline.html",
  "casa-planejada-especial-criancas.html",
  "pagina-nao-encontrada.html",
  "portfolio-arquitetura.html",
  "projeto-3d.html",
  "projeto-executivo.html",
  "visitas.html",
  "reunioes.html",
  "posicao-solar.html",
  "satisfacao-garantida.html",
  "projeto-arquitetonico.html",
  "projeto-eletrico.html",
  "projeto-estrutural.html",
  "projeto-hidraulico.html",
  "projeto-paisagistico.html",
  "propostas.html",
  "servicos-arquitetura-sorocaba.html",
  "sucesso.html",
  "js/install.js",
  "js/scriptscroll.js",
  "js/troca-imagem-principal.js",
  "css/styles.css",
  "images/arquiteta-camila-alamino-foto.jpg",
  "images/arquiteta-urbanista-camila-alamino-logo.png",
  "images/compasso.png",
  "images/crianca-apoiando-na-janela.jpg",
  "images/edificio-residencial-faxada.jpg",
  "images/edificio-residencial-lateral.jpg",
  "images/edificio-residencial-quintal.jpg",
  "images/garantia.png",
  "images/icone-email.ico",
  "images/icone-facebook.png",
  "images/icone-google-mais.png",
  "images/icone-instragram.png",
  "images/icone-pinterest.png",
  "images/icone-whatsapp.png",
  "images/sinal-de-nao-incluso.png",
  "images/check.png",
  "images/iglu-casa-dos-esquimos.jpg",
  "images/importancia-sondagem-do-solo.png",
  "images/m2.png",
  "images/residencia-condomino-das-aguas-faxada-construcao.jpg",
  "images/residencia-condomino-das-aguas-faxada-p.jpg",
  "images/residencia-condomino-das-aguas-faxada.jpg",
  "images/residencia-condomino-das-aguas-lateral-p.jpg",
  "images/residencia-condomino-das-aguas-lateral.jpg",
  "images/residencia-condomino-das-aguas-quintal-p.jpg",
  "images/residencia-condomino-das-aguas-quintal.jpg",
  "images/residencia-vivendas-lago-faxada.jpg",
  "images/residencia-vivendas-lago-lateral.jpg",
  "images/residencia-vivendas-lago-quintal.jpg",
  "images/residencial-lago-azul-faxada.jpg",
  "images/servicos-de-arquiteto.png",
  "images/timeismoney.jpg"
];
// dev only
if (typeof files == 'undefined') {
  var files = [];
} else {
  files.push('./');
}

var CACHE_NAME = 'Versao 667';

self.addEventListener('activate', function(event) {
  console.log('[SW] Activate');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (CACHE_NAME.indexOf(cacheName) == -1) {
            console.log('[SW] Delete cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('install', function(event){
  console.log('[SW] Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return Promise.all(
      	files.map(function(file){
      		return cache.add(file);
      	})
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('[SW] fetch ' + event.request.url)
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request.clone());
    }).catch(function(){
      return caches.match('/offline.html');

    })
  );
});
