function greet() {
  alert("ধন্যবাদ! আপনি বাটনে ক্লিক করেছেন।");
}

function submitForm() {
  alert("আপনার বার্তা সফলভাবে পাঠানো হয়েছে!");
  return false; // ফর্ম সাবমিট বন্ধ রাখতে (এটা শুধু ডেমো)
}
// আগের greet এবং submitForm ফাংশন থাকবে

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("darkModeToggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      toggleBtn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ লাইট মোড চালু করুন"
        : "🌙 ডার্ক মোড চালু করুন";
    });
  }
});
