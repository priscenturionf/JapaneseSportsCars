let currentImageIndex = 0;
const images = [
    {src: 'img/NissanSkylineGTR-R34.jpg', title: 'Nissan Skyline GTR-R34'},
    {src: 'img/Honda NSX 2016.jpg', title: 'Honda NSX 2016'},
    {src: 'img/Mazda RX-7.jpg', title: 'Mazda RX-7'},
    {src: 'img/ToyotaSupraMK4.jpg', title: 'Toyota Supra MK4'},
    {src: 'img/Subaru Impreza 22b WRX STI.jpg', title: 'Subaru Impreza 22B WRX STI'},
    {src: 'img/ToyotaMR2.jpg', title: 'Toyota MR2'},
    {src: 'img/Mitsubishi Lancer Evolution Evo X.jpg', title: 'Mitsubishi Lancer Evo X'},
    {src: 'img/Subaru BRZ.jpg', title: 'Subaru BRZ'},
    {src: 'img/Honda S2000.jpg', title: 'Honda S2000'},
    {src: 'img/HondaAcuraIntegraTypeR.jpg', title: 'Honda/Acura Integra Type-R'},
    {src: 'img/Mazda MX-5 Miata.jpg', title: 'Mazda MX-5 Miata'},
    {src: 'img/Datsun510.jpg', title: 'Datsun 510'},
    {src: 'img/LexusLFA.jpeg', title: 'Lexus LFA'},
    {src: 'img/Mitsubishi3000GT VR-4.jpg', title: 'Mitsubishi 3000GT VR-4'},
    {src: 'img/NissanSilviaS15.jpg', title: 'Nissan Silvia S15'},
    {src: 'img/SuzukiCappuccino.jpg', title: 'Suzuki Cappuccino'},
    {src: 'img/ToyotaCelica2.0XT.jpg', title: 'Toyota Celica 2.0 XT'},
    {src: 'img/NissanFairladyZ.jpg', title: 'Nissan Fairlady Z'}
];



function openLightbox(imageSrc, imageTitle) {
    currentImageIndex = images.findIndex(image => image.src === imageSrc); 
    document.getElementById('lightbox-img').src = imageSrc;
    document.getElementById('lightbox-title').textContent = imageTitle;
    document.getElementById('lightbox').style.display = 'flex';
}


function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}


function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; 
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; 
    }

    const newImage = images[currentImageIndex];
    document.getElementById('lightbox-img').src = newImage.src;
    document.getElementById('lightbox-title').textContent = newImage.title;
}
