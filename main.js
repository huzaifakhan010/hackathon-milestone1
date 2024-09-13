var skillsFieldset = document.getElementById('skillsFieldset');
var experienceFieldset = document.getElementById('experienceFieldset');
var toggleSkillsButton = document.getElementById('toggleSkills');
var toggleExperienceButton = document.getElementById('toggleExperience');
toggleSkillsButton.addEventListener('click', function () {
    skillsFieldset.style.display = skillsFieldset.style.display === 'none' ? 'block' : 'none';
});
toggleExperienceButton.addEventListener('click', function () {
    experienceFieldset.style.display = experienceFieldset.style.display === 'none' ? 'block' : 'none';
});
