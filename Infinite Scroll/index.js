// Infinite Scroll Implementation
const container = document.getElementById("data-container");
const loading = document.getElementById("loading");

// Variables to control the data fetch
let page = 1; // Current page number
let limit = 10; // Number of items per fetch
let isLoading = false; // Prevent multiple triggers

// Function to simulate fetching data (API Call)
async function fetchData(page, limit) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [];
      for (let i = 1; i <= limit; i++) {
        data.push(`Item ${i + (page - 1) * limit}`);
      }
      resolve(data);
    }, 1000); // Simulate a 1-second API delay
  });
}

// Function to render data
function renderData(items) {
  items.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.textContent = item;
    container.appendChild(div);
  });
}

// Function to load more data
async function loadMoreData() {
  if (isLoading) return; // Avoid duplicate fetches
  isLoading = true;
  loading.style.display = "block"; // Show the loading indicator

  try {
    const data = await fetchData(page, limit);
    renderData(data);
    page++; // Increment page number
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading = false;
    loading.style.display = "none"; // Hide the loading indicator
  }
}

// Scroll Event Listener
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  // Check if we are close to the bottom of the page
  if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
    loadMoreData();
  }
});

loadMoreData();

