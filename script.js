function openProject(projectId) {
  alert(`Ouverture du projet : ${projectId}`);
  // Remplacez alert par la navigation réelle.
}

function openArticle(articleId) {
  alert(`Ouverture de l'article : ${articleId}`);
  // Remplacez alert par la navigation réelle.
}

<script>
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
</script>
