const tooltips = document.querySelectorAll('.post-link-tooltip');

tooltips.forEach(tooltip => {
    tooltip.addEventListener('mousemove', (e) => {
      // Select the tooltip image within the hovered element
      const image = tooltip.querySelector('.tooltip-image');
  
      // Update the position of the tooltip image to the left of the mouse's position
      image.style.top = `${e.clientY - image.offsetHeight / 2}px`; // vertically center the image
      image.style.left = `${e.clientX - image.offsetWidth - 20}px`; // 20 is the approximate width of the cursor
    });

  tooltip.addEventListener('mouseover', (e) => {
    // Select the tooltip image within the hovered element
    const image = tooltip.querySelector('.tooltip-image');

    // Increase the size of the image
    image.style.transform = 'scale(2)'; // Change this value to make the image bigger or smaller
  });

  tooltip.addEventListener('mouseout', (e) => {
    // Select the tooltip image within the hovered element
    const image = tooltip.querySelector('.tooltip-image');

    // Reset the size of the image
    image.style.transform = 'scale(1)';
  });
});