
const skillsFieldset1 = document.getElementById('skillsFieldset') as HTMLFieldSetElement;

const toggleSkillsButton2 = document.getElementById('toggleSkills') as HTMLButtonElement;


toggleSkillsButton2.addEventListener('click', () => {
    skillsFieldset1.style.display = skillsFieldset1.style.display === 'none' ? 'block' : 'none';
});

