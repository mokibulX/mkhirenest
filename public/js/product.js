


emailjs.init("EMAILJS_PUBLIC_KEY");

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const title = btn.getAttribute("data-title");
        const price = btn.getAttribute("data-price");

        let name = prompt("Enter your full name:");
        if (!name) return alert("Name is required");

        let email = prompt("Enter your email:");
        if (!email) return alert("Email is required");

        let details = prompt("Write details of your app/web requirements:");

        // Razorpay Payment
        const options = {
            key: "YORAZORPAY_KEY_ID",
            amount: price * 100, // in paise
            currency: "INR",
            name: "MK Hirenest",
            description: title,
            handler: function(response){
                alert("Payment Successful. Thank You!");

                // EmailJS send
                emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                    sendName: name,
                    sendEmail: email,
                    sendTitle: title,
                    sendPrice: price,
                    sendDetails: details
                }).then(res=>{
                    alert("Order details sent to your email.");
                }).catch(err=>{
                    console.error(err);
                });
            }
        };
        const rzp = new Razorpay(options);
        rzp.open();
    });
});
