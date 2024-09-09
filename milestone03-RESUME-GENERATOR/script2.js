var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var linkedInElement = document.getElementById('linkedIn');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var skillElement = document.getElementById('skills');
    var workExperienceElement = document.getElementById('experience');
    if (nameElement && emailElement && phoneElement && linkedInElement && addressElement && educationElement && skillElement && workExperienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var linkedIn = linkedInElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var skills = skillElement.value;
        var workExperience = workExperienceElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, " alt=\"Profile Picture\" class= \"profilePicture\">") : "", "\n    <p><strong>Name:</strong>").concat(name_1, "</p>\n    <p><strong>Email:</strong>").concat(email, "</p>\n    <p><strong>Phone:</strong>").concat(phone, "</p>\n    <p><strong>LinkedIn:</strong>").concat(linkedIn, "</p>\n    <p><strong>Address:</strong>").concat(address, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Skill</h3>\n    <p>").concat(skills, "</p>\n\n    <h3>Work Experience</h3>\n    <p>").concat(workExperience, "</p>");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
    ;
});
