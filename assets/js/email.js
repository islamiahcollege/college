const contactForm = document.getElementById('contact__form');
const contactmessage = document.getElementById('contact__message');

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_7ixgfy3', 'template_6mcfkos', '#contact__form', 'PH8z1FiQO8rlWQ8YK')
        .then(() => {
            contactmessage.textContent = 'message sent successfully'

            setTimeout(() => {
                contactmessage.textContent = ''
            }, 5000)

            contactForm.reset()
        }, () => {
            contactmessage.textContent = 'message not sent (service error)'
        })
}

contactForm.addEventListener('submit', sendEmail)