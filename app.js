const targets = document.querySelectorAll("img");

const lazyLoad = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries);

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-lazy");

        img.src = src;
        img.classList.add("fade");

        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach((target) => lazyLoad(target));
