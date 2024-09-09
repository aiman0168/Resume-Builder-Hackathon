document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();
    const profilePictureInput =document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const linkedInElement = document.getElementById('linkedIn') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLTextAreaElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const skillElement = document.getElementById('skills') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;


    if (profilePictureInput && nameElement && emailElement && phoneElement && linkedInElement && addressElement && educationElement && skillElement && experienceElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const linkedIn = linkedInElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const skills = skillElement.value;
        const experience = experienceElement.value;

        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";


    
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL} alt="profilePicture" class="profilePicture">` : '' }
    <p><strong>Name:</strong><span id="edit-name" class="editable">${name}</span></p>
    <p><strong>Email:</strong><span id="edit-email" class="editable">${email}</span></p>
    <p><strong>Phone:</strong><span id="edit-phone" class="editable">${phone}</span></p>
    <p><strong>LinkedIn:</strong><span id="edit-linkedIn" class="editable">${linkedIn}</span></p>
    <p><strong>Address:</strong><span id="edit-address" class="editable">${address}</span></p>

    <h3>Education</h3>
    <p id="edit-education" class="editable">${education}</p>

    <h3>Skill</h3>
    <p id="edit-skills" class="editable">${skills}</p>

    <h3>Work Experience</h3>
    <p id="edit-experience" class="editable">${experience}</p>`

    const resumeOutputElement = document.getElementById('resumeOutput')
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    makeEditable();
    }
}else {
    console.error('one or more output elements are missing')
};
})

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "" ;

            if (currentElement.tagName === "p" || currentElement.tagName === "SPAN"){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing input')

                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })

                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
}