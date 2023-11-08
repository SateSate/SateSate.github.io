// Function to fetch JSON data
function fetchProductData() {
  fetch('/assets/json/accessories.json')
    .then((response) => response.json())
    .then((data) => renderProducts(data.accessories))
    .catch((error) => console.error('Error fetching product data: ', error));
}

// Function to render products in HTML
function renderProducts(products) {
  const productContainer = document.getElementById('product-container');

  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    // Create HTML elements for product attributes
    const nameElement = createNameElement(product.name);
    const imgHolder = document.createElement('div');
    imgHolder.className = 'img-holder';
    const img = document.createElement('img');
    img.src = `/assets/img/${product.category}/${product.image}`;
    img.alt = product.name;

    const specifications = document.createElement('div');
    specifications.className = 'specifications';
    specifications.appendChild(nameElement);
    const type = createSpecificationElement('Tipo', product.type);

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
    specifications.appendChild(type);
    packageDiv.appendChild(confezioni);
    packageDiv.appendChild(ul);

    productDiv.appendChild(imgHolder);
    productDiv.appendChild(specifications);
    productDiv.appendChild(packageDiv);

    productContainer.appendChild(productDiv);
  });
}

// Helper function to create a name element
function createNameElement(name) {
  const h2 = document.createElement('h2');
  h2.textContent = name;
  return h2;
}

// Helper function to create a specification element
function createSpecificationElement(label, value) {
  const p = document.createElement('p');
  if (label === 'Descrizione') {
    p.innerHTML = value;
  } else {
    p.innerHTML = `<strong><em>${label}:</em></strong> ${value}`;
    if (label === 'Tipo' || label === 'Miscela') {
      p.classList.add('non-flex');
    }
  }
  return p;
}

// Fetch and render product data when the page loads
window.onload = fetchProductData;
