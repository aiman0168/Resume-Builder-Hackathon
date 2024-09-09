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


    if (nameElement && emailElement && phoneElement && linkedInElement && addressElement && educationElement && skillElement && experienceElement){
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
    ${profilePictureURL ? `<img src="${profilePictureURL} alt="Profile Picture" class= "profilePicture">` : "" }
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Phone:</strong>${phone}</p>
    <p><strong>LinkedIn:</strong>${linkedIn}</p>
    <p><strong>Address:</strong>${address}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Skill</h3>
    <p>${skills}</p>

    <h3>Work Experience</h3>
    <p>${experience}</p>`

    const resumeOutputElement = document.getElementById('resumeOutput')
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    }else {
        console.error('The resume output elements are missing')
    }
}else {
    console.error('one or more output elements are missing')
};
})
