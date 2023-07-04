// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// Sample data for certificates (replace with your own)
const certificates = [
  {
    title: 'Certificate 1',
    image: 'assets/png/certificate1.png',
  },
  {
    title: 'Certificate 2',
    image: 'assets/png/certificate2.png',
  },
  {
    title: 'Certificate 3',
    image: 'assets/png/certificate3.png',
  },
  {
    title: 'Certificate 4',
    image: 'assets/png/certificate4.png',
  },
  {
    title: 'Certificate 5',
    image: 'assets/png/certificate5.png',
  },
];

// Function to generate certificate items
function generateCertificateItems() {
  const container = document.querySelector('.certificates-container');

  certificates.forEach(certificate => {
    const certificateItem = document.createElement('div');
    certificateItem.className = 'certificate-item';

    const certificateImage = document.createElement('img');
    certificateImage.className = 'certificate-image';
    certificateImage.src = certificate.image;
    certificateImage.alt = certificate.title;

    const certificateTitle = document.createElement('h3');
    certificateTitle.textContent = certificate.title;

    certificateItem.appendChild(certificateImage);
    certificateItem.appendChild(certificateTitle);
    container.appendChild(certificateItem);
  });
}

// Call the function to generate the certificate items
generateCertificateItems();

// JavaScript to control the popup
document.addEventListener('DOMContentLoaded', function () {
  var popup = document.getElementById('popup');
  var closeButton = document.getElementById('close-btn');

  // Show the popup
  function showPopup() {
    popup.classList.add('active');
  }

  // Hide the popup
  function hidePopup() {
    popup.classList.remove('active');
  }

  // Show the popup when the page loads
  showPopup();

  // Hide the popup when the close button is clicked
  closeButton.addEventListener('click', hidePopup);
});

