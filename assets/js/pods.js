// Function to fetch JSON data
function fetchProductData() {
  fetch('/assets/json/pods.json')
    .then((response) => response.json())
    .then((data) => renderProducts(data.pods))
    .catch((error) => console.error('Error fetching product data: ', error));
}

// Function to render products in HTML
function renderProducts(products) {
  const productContainer = document.getElementById('product-container');

  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    // Create HTML elements for product attributes
    const imgHolder = document.createElement('div');
    imgHolder.className = 'img-holder';
    const img = document.createElement('img');
    img.src = `/assets/img/${product.category}/${product.image}`;
    img.alt = product.name;

    const specifications = document.createElement('div');
    specifications.className = 'specifications';
    const type = createSpecificationElement('Tipo', product.type);
    const blend = createSpecificationElement('Miscela', product.blend);
    const cremosita = createSpecificationElement(
      'Cremosita',
      product.creaminess
    );
    const tostatura = createSpecificationElement('Tostatura', product.roast);
    const aroma = createSpecificationElement('Aroma', product.aroma);
    const intensita = createSpecificationElement(
      'Intensita',
      product.intensity
    );

    const packageDiv = document.createElement('div');
    packageDiv.className = 'package';
    const confezioni = document.createElement('p');
    confezioni.innerHTML = `<strong>Confezioni da:</strong>`;
    const ul = document.createElement('ul');
    product.box.forEach((boxItem) => {
      const li = document.createElement('li');
      li.textContent = boxItem;
      ul.appendChild(li);
    });

    // Append elements to the productDiv
    imgHolder.appendChild(img);
    specifications.appendChild(type); // Display Tipo as plain text
    specifications.appendChild(blend); // Display Miscela as plain text
    specifications.appendChild(cremosita); // Cremosita with image
    specifications.appendChild(tostatura); // Tostatura with image
    specifications.appendChild(aroma); // Aroma with image
    specifications.appendChild(intensita); // Intensita with image
    packageDiv.appendChild(confezioni);
    packageDiv.appendChild(ul);

    productDiv.appendChild(imgHolder);
    productDiv.appendChild(specifications);
    productDiv.appendChild(packageDiv);

    productContainer.appendChild(productDiv);
  });
}

// Helper function to create a specification element
function createSpecificationElement(label, value) {
  const p = document.createElement('p');
  if (label === 'Tipo' || label === 'Miscela') {
    p.innerHTML = `<strong><em>${label}:</em></strong> ${value}`;
    if (label === 'Tipo' || label === 'Miscela') {
      p.classList.add('non-flex');
    }
  } else {
    p.innerHTML = `<strong><em>${label}:</em></strong><img src="./assets/img/stats/${label.toLowerCase()}_${value}.png" alt="">`;
  }
  return p;
}

// Fetch and render product data when the page loads
window.onload = fetchProductData;
