const socialLinks = document.querySelector(".social-links");
const shareSection = document.querySelector(".share-section");

function hideProfileDetails() {
  shareSection.classList.add("hide-section");
  socialLinks.classList.remove("hide-section");
}
shareSection.addEventListener("click", hideProfileDetails);
