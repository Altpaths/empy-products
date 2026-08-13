(function () {
  const yesButton = document.getElementById('yes-button');
  const noButton = document.getElementById('no-button');
  const actions = document.getElementById('actions');
  const reveal = document.getElementById('reveal');
  const resetButton = document.getElementById('reset-button');

  function showSecret() {
    actions.hidden = true;
    reveal.hidden = false;
  }

  function reset() {
    reveal.hidden = true;
    actions.hidden = false;
  }

  yesButton.addEventListener('click', showSecret);
  resetButton.addEventListener('click', reset);

  noButton.addEventListener('mouseenter', function () {
    if (window.innerWidth > 520) {
      noButton.style.transform = 'translate(' + (Math.random() * 18 - 9) + 'px, ' + (Math.random() * 12 - 6) + 'px)';
    }
  });

  noButton.addEventListener('click', function () {
    noButton.textContent = 'باشه، بعداً';
    noButton.style.transform = 'none';
  });
}());
