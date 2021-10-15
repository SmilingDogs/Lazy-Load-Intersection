const targets = document.querySelectorAll("img");

const lazyLoad = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries);
    let ind=true;
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-lazy");
        /* if (ind){
          img.style.transformX="50%"
          console.log(123);
          ind=false;
        }
        else ind=true; */
        console.log(456);
        img.src = src;
        img.classList.add("fade");
        //img.style.transform="translateX(0%)"
        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach((target) => lazyLoad(target));

// window.addEventListener('scroll', (event) => {
//     targets.forEach(img => {
//         console.log('bad code!')
//         const rect = img.getBoundingClientRect().top;
//         if (rect <= window.innerHeight) {
//             const src = img.getAttribute('data-lazy');
//             img.setAttribute('src', src);
//             img.classList.add('fade');
//         }
//     })
// })
