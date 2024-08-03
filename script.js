document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundImage = `url('${button.dataset.image}')`;
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundImage = `url('${button.dataset.image}')`;
  });

  button.addEventListener('click', () => {
    window.location.href = button.dataset.page;
  });
});