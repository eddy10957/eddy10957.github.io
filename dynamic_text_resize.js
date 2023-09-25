document.addEventListener("DOMContentLoaded", function () {
  // Function to handle hover event
  const handleHover = (event) => {
    const workContainer = event.currentTarget;
    const layer = workContainer.querySelector('.layer');
    const h3Element = layer.querySelector('h3');
    const pElement = layer.querySelector('p');
    const iconElement = layer.querySelector('a');
    const cardName = h3Element.textContent; // Get the card name

    let h3FontSize = parseInt(window.getComputedStyle(h3Element).fontSize);
    let pFontSize = parseInt(window.getComputedStyle(pElement).fontSize);

    let combinedHeight = h3Element.scrollHeight + pElement.scrollHeight + iconElement.scrollHeight;

    // Log the initial font sizes, combined height, and card name
    console.log(`Card Name: ${cardName}`);
    console.log(`Initial Font Sizes - h3: ${h3FontSize}px, p: ${pFontSize}px`);
    console.log(`Individual Heights - h3: ${h3Element.scrollHeight}px, p: ${pElement.scrollHeight}px, icon: ${iconElement.scrollHeight}px`);
    console.log(`Combined Height: ${combinedHeight}px`);
    console.log(`Container Height: ${workContainer.clientHeight}px`);

    // Check if combined height overflows and adjust font sizes
    while (combinedHeight > workContainer.clientHeight && (h3FontSize > 10 || pFontSize > 8)) {
      if (combinedHeight > workContainer.clientHeight) {
        if (h3FontSize > 10) {
          h3FontSize--;
          h3Element.style.fontSize = h3FontSize + 'px';
        }
        if (pFontSize > 8) {
          pFontSize--;
          pElement.style.fontSize = pFontSize + 'px';
        }
      }

      // Recalculate combined height after font size adjustments
      combinedHeight = h3Element.scrollHeight + pElement.scrollHeight + iconElement.scrollHeight;
    }

    // Log the final font sizes after adjustments
    console.log(`Final Font Sizes - h3: ${h3FontSize}px, p: ${pFontSize}px`);
  };

  // Attach hover event listener to all work elements
  const workElements = document.querySelectorAll('.work');

  workElements.forEach((workElement) => {
    workElement.addEventListener('mouseover', handleHover);
  });
});
