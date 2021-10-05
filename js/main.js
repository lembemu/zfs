const logo = document.querySelector('.logo h1'),
  body = document.querySelector('body'),
  nav = document.querySelector('nav');
body.style.position = 'relative';
top = body.style.top;

function scroll() {
  if (scrollY) {
    logo.innerText = 'ZFS';
    logo.style.display = 'inline';
    logo.style.position = 'absolute';
    logo.style.left = '0';
    logo.style.top = '10px';
    logo.style.color = '#1c783f';
    logo.style.transition = 'all  2s';
  } else if (scrollBy) {
    logo.innerText = 'Zulu Fastnet  Solutions';
    logo.style.position = 'relative';
    logo.style.left = '0';
    logo.style.top = '10px';
    logo.style.color = 'white';
  }
}