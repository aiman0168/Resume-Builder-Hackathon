document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    var resumeContent = document.getElementById('resumeContent');
    var profilePictureInput = document.getElementById('profilePicture');
    var addEducationButton = document.getElementById('addEducation');
    var addWorkExperienceButton = document.getElementById('addWorkExperience');
    var addSkillButton = document.getElementById('addSkill');
    addEducationButton.addEventListener('click', function () {
        var educationContainer = document.getElementById('education');
        var newEducationEntry = document.createElement('div');
        newEducationEntry.className = 'education-entry field-container';
        newEducationEntry.innerHTML = "\n            <label for=\"degree\">Degree:</label>\n            <input type=\"text\" name=\"degree[]\" readonly><br>\n\n            <label for=\"institution\">Institution:</label>\n            <input type=\"text\" name=\"institution[]\" readonly><br>\n\n            <label for=\"year\">Year:</label>\n            <input type=\"text\" name=\"year[]\" readonly><br>\n        ";
        educationContainer.appendChild(newEducationEntry);
    });
    addWorkExperienceButton.addEventListener('click', function () {
        var workExperienceContainer = document.getElementById('workExperience');
        var newWorkEntry = document.createElement('div');
        newWorkEntry.className = 'work-entry field-container';
        newWorkEntry.innerHTML = "\n            <label for=\"jobTitle\">Job Title:</label>\n            <input type=\"text\" name=\"jobTitle[]\" readonly><br>\n\n            <label for=\"company\">Company:</label>\n            <input type=\"text\" name=\"company[]\" readonly><br>\n\n            <label for=\"jobDescription\">Job Description:</label>\n            <textarea name=\"jobDescription[]\" rows=\"3\" readonly></textarea><br>\n            \n            <label for=\"jobYear\">Year:</label>\n            <input type=\"text\" name=\"jobYear[]\" readonly><br>\n        ";
        workExperienceContainer.appendChild(newWorkEntry);
    });
    addSkillButton.addEventListener('click', function () {
        var skillsContainer = document.getElementById('skills');
        var newSkillEntry = document.createElement('div');
        newSkillEntry.className = 'skill-entry field-container';
        newSkillEntry.innerHTML = "\n            <input type=\"text\" name=\"skills[]\" readonly><br>\n        ";
        skillsContainer.appendChild(newSkillEntry);
    });
    form.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        var formData = new FormData(form);
        var data = {
            personalInfo: {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                linkedIn: formData.get('linkedIn'),
                Address: formData.get('address'),
            },
            education: formData.getAll('degree[]').map(function (degree, index) { return ({
                degree: degree,
                institution: formData.getAll('institution[]')[index],
                year: formData.getAll('year[]')[index]
            }); }),
            workExperience: formData.getAll('jobTitle[]').map(function (jobTitle, index) { return ({
                jobTitle: jobTitle,
                company: formData.getAll('company[]')[index],
                jobDescription: formData.getAll('jobDescription[]')[index],
                year: formData.getAll('jobYear[]')[index]
            }); }),
            skills: formData.getAll('skills[]')
        };
        // Handle file input (if needed)
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureUrl = '';
        if (profilePictureFile) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                profilePictureUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                generateResumeHtml(data, profilePictureUrl);
            };
            reader.readAsDataURL(profilePictureFile);
        }
        else {
            generateResumeHtml(data, profilePictureUrl);
        }
    });
    function generateResumeHtml(data, profilePictureUrl) {
        resumeContent.innerHTML = "\n            ".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"Profile Picture\" style=\"max-width: 150px; max-height: 150px;\"/>") : '', "\n            <h2>").concat(data.personalInfo.name, "</h2>\n            <p>Email: ").concat(data.personalInfo.email, "</p>\n            <p>Phone: ").concat(data.personalInfo.phone, "</p>\n            <p>LinkedIn: ").concat(data.personalInfo.linkedIn, "</p>\n            <p>Address: ").concat(data.personalInfo.address, "</p>\n\n            <h3>Education</h3>\n            ").concat(data.education.map(function (edu) { return "\n                <p>".concat(edu.degree, " from ").concat(edu.institution, " (").concat(edu.year, ")</p>\n            "); }).join(''), "\n\n            <h3>Work Experience</h3>\n            ").concat(data.workExperience.map(function (work) { return "\n                <p><strong>".concat(work.jobTitle, "</strong> at ").concat(work.company, " (").concat(work.year, ")<br>\n                ").concat(work.jobDescription, "</p>\n            "); }).join(''), "\n\n            <h3>Skills</h3>\n            <ul>\n                ").concat(data.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n            </ul>\n        ");
        resumeOutput.style.display = 'block';
    }
});
