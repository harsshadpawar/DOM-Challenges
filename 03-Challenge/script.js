// Get all form elements
const nameInput = document.getElementById("name");
const jobTitleInput = document.getElementById("jobTitle");
const ageInput = document.getElementById("age");
const bioInput = document.getElementById("bio");

// Get all preview elements
const namePreview = document.getElementById("namePreview");
const jobTitlePreview = document.getElementById("jobTitlePreview");
const agePreview = document.getElementById("agePreview");
const bioPreview = document.getElementById("bioPreview");

// Function to update the preview
/*
function updatePreview(inputElement, previewElement) {
  const value = inputElement.value.trim();

  if (value) {
    previewElement.textContent = value;
    previewElement.classList.remove("not-provided");
  } else {
    previewElement.textContent = "Not provided";
    previewElement.classList.add("not-provided");
  }
}
*/
function updatePreview(inputElement, previewElement) {
  const value = inputElement.value.trim();
  if (value) {
    previewElement.textContent = value;
    previewElement.classList.remove("not-provided");
  } else {
  }
}

// Add event listeners for real-time updates
nameInput.addEventListener("input", () =>
  updatePreview(nameInput, namePreview)
);
jobTitleInput.addEventListener("input", () =>
  updatePreview(jobTitleInput, jobTitlePreview)
);
ageInput.addEventListener("input", () => updatePreview(ageInput, agePreview));
bioInput.addEventListener("input", () => updatePreview(bioInput, bioPreview));
