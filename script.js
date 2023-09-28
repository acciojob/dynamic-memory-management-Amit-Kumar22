// Complete the js code

const limit = 100; // Heap memory usage limit in MB
let elements = []; // Array to hold generated DOM elements

// Function to generate DOM elements
const generateElements = () => {
  // complete the function
	const newElement = document.createElement("div");
            newElement.textContent = "New Element";
            document.body.appendChild(newElement);
            updateMemoryUsage();
};

// Function to remove DOM elements
const removeElements = () => {
  // complete the function
	        const elements = document.querySelectorAll("div");
            if (elements.length > 0) {
                const lastElement = elements[elements.length - 1];
                document.body.removeChild(lastElement);
                 updateMemoryUsage();
            }
};

// Function to update memory usage display
const updateMemoryUsage = () => {
  // Complete this function
	const memoryUsage = (performance.memory.usedJSHeapSize / (1024 * 1024)).toFixed(2); // Convert to MB
            document.getElementById("memory").textContent = memoryUsage + " MB";

            if (memoryUsage > limit) {
                alert("memory usage exceed");
            }
};

// Add event listeners to buttons
document.getElementById("generate").addEventListener("click", generateElements);
document.getElementById("remove").addEventListener("click", removeElements);

// Set interval to update memory usage every second
setInterval(updateMemoryUsage, 1000);

