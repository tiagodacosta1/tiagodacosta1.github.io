var readMoreBtns = document.querySelectorAll('.btn-read-more');

readMoreBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var description = this.parentNode.querySelector('.project-description');
    if (description.style.display === 'none') {
      description.style.display = 'block';
      this.innerHTML = 'Read Less';
    } else {
      description.style.display = 'none';
      this.innerHTML = 'Read More';
    }
  });
});
