document.querySelector(".menu-open #open").addEventListener('click', (e) => {
    document.querySelector(".mobile").classList.add('active');
    if(document.querySelector(".mobile").classList.contains('disabled')){
      document.querySelector(".mobile").classList.remove('disabled');
    }
});

document.querySelector(".menu-close #close").addEventListener('click', (e) => {
    document.querySelector(".mobile").classList.add('disabled');
    if(document.querySelector(".mobile").classList.contains('active')){
        document.querySelector(".mobile").classList.remove('active');
    }
});