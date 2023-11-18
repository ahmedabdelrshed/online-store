const contactForm = document.querySelector(".contact-form")
const fullNameInput = document.querySelector("#fullName")
const emailAddressInput = document.querySelector("#emailAddress")
const messageInput = document.querySelector("#feedback")

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const emailMessage = getEmailMessage({
        fullName: fullNameInput.value,
        emailAddress: emailAddressInput.value,
        message: messageInput.value,
    })

    fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
            to: "a7medabdelras7med99@gmail.com", // replace it with your email address (the email you want to receive messages at)
            subject: "Feedback For Website",
            message: emailMessage,
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            fullNameInput.value = ""
            emailAddressInput.value = ""
            messageInput.value = ""
        })
        alert("Thanks to Send your Feedback")
})

const getEmailMessage = ({ fullName, emailAddress, message } = {}) => {
    return `
        <p>Feedback From My website:</p>
        <div style="background-color: #101010; color: #fbfbfb; padding: 12px; border: 1px solid black;
        border-radius: 10px;">
            <p style="margin: 0;">FullName: ${fullName}</p>
            <p style="margin: 12px 0;">Email: ${emailAddress}</p>
            <p style="margin: 0;">Feedback: ${message}</p>
        </div>
    `
}