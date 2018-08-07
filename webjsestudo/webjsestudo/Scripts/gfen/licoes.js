/*
 * Because user engagement depends on reliable and effective network requests, you'll be asked to show you can use JavaScript to set up reliable front end networking protocols by:
● Requesting data using fetch( )
● Checking response status, then parsing the data into usable format
● Rendering response data to a page
● Configuring POST requests to a database with method and body parameters
● Using correctly configured cross-origin resource sharing protocol (CORS) fetch
requests, depending on the server’s response headers
● Handling fetch( ) request errors with promise chaining
● Diagnosing network issues using debugging and development tools
Resources:
● Introduction to fetch()
● Using fetch
● David Walsh's blog on fetch
● Jake Archibald's blog on fetch
● JavaScript Promises: an Introduction
● HTTP access control (CORS)

https://developers.google.com/web/updates/2015/03/introduction-to-fetch (01)

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (02)

https://davidwalsh.name/fetch (03)

https://jakearchibald.com/2015/thats-so-fetch/ (04) 

https://developers.google.com/web/fundamentals/primers/promises (05) 

https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS (06) 

Introducao

fetch() allows you to make network requests similar to XMLHttpRequest (XHR). 
The main difference is that the Fetch API uses Promises, which enables a simpler and cleaner API, 
avoiding callback hell and having to remember the complex API of XMLHttpRequest.
O que é service Worker? 

O que é polyfill ?  codigo que implementa a feature em browsers que não suportam a o recurso
Aqui é um polyfill https://github.com/github/fetch

Response do Fecth Stream Object () - binaria.. 
Alem disso o Response explicando o tipo  ( basic , cors , opaque ) - resource estao na mesma origem e destino - 
tem o tipo basic nao há restricoes no que pode ser visualizado o do response 
tem o tipo cors (há cors readers) restringe os cabeçalhos que pode ser visualizados ... 
temo o tipo opaque - não será possivel ler os dados retornados ou verficar o status do request (request diferente origem)
Parametrizar o que pode receber -> same-origin cors  Aqui tem o conceito de preflight check ??? no cors
cross-origin resource sharing protocol (CORS)

Using Fetch 

Fetch API fornece um javascript Interface para acessar e manipular partes do HTTP pipeline, como requisicoes e responses. Fornecedor de um metodo global fetch 
Service Workers? 
CORS
Promisse returned resolver errors status 404 ou 500 . rejeitar por falha de rede ou algo prevenir de terminar o request 
Nao irá enviar cookies do servidor por padrão. pode modificar init option ( questões de autenticacao)
O que é JSON.stringify?












function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

fetch('users.json')
  .then(status)
  .then(json)
  .then(function(data) {
    console.log('Request succeeded with JSON response', data);
  }).catch(function(error) {
    console.log('Request failed', error);
  });



  */