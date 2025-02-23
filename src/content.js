(function () {
    function isProductPage() {
        // Amazon Product Page Detection
        if (window.location.href.includes("www.amazon.") && document.querySelector("#title")) {
            return true;
        }
        // Flipkart Product Page Detection
        if (window.location.href.includes("www.flipkart.") && document.querySelector("h1")) {
            return true;
        }
        return false;
    }

    function addButton() {
        // Prevent duplicate buttons
        if (document.getElementById("tracky-add-product")) return;

        const button = document.createElement("button");
        button.innerText = "Add Product";
        button.id = "tracky-add-product";

        // Style the button
        button.style.position = "fixed";
        button.style.bottom = "20px";
        button.style.right = "20px";
        button.style.padding = "10px 20px";
        button.style.background = "#ff6600";
        button.style.color = "white";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
        button.style.fontSize = "16px";
        button.style.zIndex = "10000";

        button.addEventListener("click", async function () {
            const productData = {
                link: window.location.href,
                threshold_price:1500
            };

            console.log("Sending product data:", productData);

            try {
                const response = await fetch("http://localhost:4000/product/addProduct", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzU0NTQ1ODM3YzA1ZjgyYzJiMjZjNjIiLCJpYXQiOjE3NDAyOTYyMzAsImV4cCI6MTc0MDM4MjYzMH0.adAvmcCbGTio0PmGZt9XgWWI-8awa5jWoOgrzeLRrJo"}` 
                    },
                    body: JSON.stringify(productData)
                });

                if (response.ok) {
                    alert("Product added successfully!");
                } else {
                    alert("Failed to add product!");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Error adding product!");
            }
        });

        document.body.appendChild(button);
    }

    function checkPageAndInjectButton() {
        if (isProductPage()) {
            addButton();
        }
    }
    console.log("we are here inside content js")
    // Run when the page loads
    checkPageAndInjectButton();

    // Monitor for SPA (Single Page Applications) changes
    let lastUrl = location.href;
    setInterval(() => {
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            checkPageAndInjectButton();
        }
    }, 1000);
})();
