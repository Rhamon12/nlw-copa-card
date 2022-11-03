let isExplorer = true
function changeCard(event) {
  const card = event.currentTarget
  const backgroundImage = isExplorer
    ? "url(./assets/bg-ignite.svg)"
    : "url(./assets/bg-explorer.svg)"
  isExplorer = !isExplorer
  card.style.backgroundImage = backgroundImage
}
