document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
    const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    const addEducationButton = document.getElementById('addEducation') as HTMLButtonElement;
    const addWorkExperienceButton = document.getElementById('addWorkExperience') as HTMLButtonElement;
    const addSkillButton = document.getElementById('addSkill') as HTMLButtonElement;

    addEducationButton.addEventListener('click', () => {
        const educationContainer = document.getElementById('education') as HTMLDivElement;
        const newEducationEntry = document.createElement('div');
        newEducationEntry.className = 'education-entry field-container';
        newEducationEntry.innerHTML = `
            <label for="degree">Degree:</label>
            <input type="text" name="degree[]" readonly><br>

            <label for="institution">Institution:</label>
            <input type="text" name="institution[]" readonly><br>

            <label for="year">Year:</label>
            <input type="text" name="year[]" readonly><br>
        `;
        educationContainer.appendChild(newEducationEntry);
    });

    addWorkExperienceButton.addEventListener('click', () => {
        const workExperienceContainer = document.getElementById('workExperience') as HTMLDivElement;
        const newWorkEntry = document.createElement('div');
        newWorkEntry.className = 'work-entry field-container';
        newWorkEntry.innerHTML = `
            <label for="jobTitle">Job Title:</label>
            <input type="text" name="jobTitle[]" readonly><br>

            <label for="company">Company:</label>
            <input type="text" name="company[]" readonly><br>

            <label for="jobDescription">Job Description:</label>
            <textarea name="jobDescription[]" rows="3" readonly></textarea><br>
            
            <label for="jobYear">Year:</label>
            <input type="text" name="jobYear[]" readonly><br>
        `;
        workExperienceContainer.appendChild(newWorkEntry);
    });

    addSkillButton.addEventListener('click', () => {
        const skillsContainer = document.getElementById('skills') as HTMLDivElement;
        const newSkillEntry = document.createElement('div');
        newSkillEntry.className = 'skill-entry field-container';
        newSkillEntry.innerHTML = `
            <input type="text" name="skills[]" readonly><br>
        `;
        skillsContainer.appendChild(newSkillEntry);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {
            personalInfo: {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                phone: formData.get('phone') as string,
                linkedIn: formData.get('linkedIn') as string,
                Address: formData.get('address') as string,
            },
            education: (formData.getAll('degree[]') as string[]).map((degree, index) => ({
                degree,
                institution: formData.getAll('institution[]')[index] as string,
                year: formData.getAll('year[]')[index] as string
            })),
            workExperience: (formData.getAll('jobTitle[]') as string[]).map((jobTitle, index) => ({
                jobTitle,
                company: formData.getAll('company[]')[index] as string,
                jobDescription: formData.getAll('jobDescription[]')[index] as string,
                year: formData.getAll('jobYear[]')[index] as string
            })),
            skills: formData.getAll('skills[]') as string[]
        };

        // Handle file input (if needed)
        const profilePictureFile = profilePictureInput.files?.[0];
        let profilePictureUrl = '';
        if (profilePictureFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePictureUrl = e.target?.result as string;
                generateResumeHtml(data, profilePictureUrl);
            };
            reader.readAsDataURL(profilePictureFile);
        } else {
            generateResumeHtml(data, profilePictureUrl);
        }
    });

    function generateResumeHtml(data: any, profilePictureUrl: string): void {
        resumeContent.innerHTML = `
            ${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="Profile Picture" style="max-width: 150px; max-height: 150px;"/>` : ''}
            <h2>${data.personalInfo.name}</h2>
            <p>Email: ${data.personalInfo.email}</p>
            <p>Phone: ${data.personalInfo.phone}</p>
            <p>LinkedIn: ${data.personalInfo.linkedIn}</p>
            <p>Address: ${data.personalInfo.address}</p>

            <h3>Education</h3>
            ${data.education.map((edu: any) => `
                <p>${edu.degree} from ${edu.institution} (${edu.year})</p>
            `).join('')}

            <h3>Work Experience</h3>
            ${data.workExperience.map((work: any) => `
                <p><strong>${work.jobTitle}</strong> at ${work.company} (${work.year})<br>
                ${work.jobDescription}</p>
            `).join('')}

            <h3>Skills</h3>
            <ul>
                ${data.skills.map((skill: string) => `<li>${skill}</li>`).join('')}
            </ul>
        `;
        resumeOutput.style.display = 'block';
    }
});
