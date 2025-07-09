// Sample data - this would be replaced with actual data from your database
const districtLeaders = [
    {
        name: "Bro Craig Jessop",
        title: "District Grand Master",
        email: "districtgrandmaster@ecscottishfreemasonry.org"
    },
    // Add other district leaders here
];

const lodges = [
    {
        name: "Dunedin",
        location: "Port Elizabeth",
        email: "dunedin@ecscottishfreemasonry.org"
    },
    // Add other lodges here
];

// Populate district leaders
const districtLeadersList = document.getElementById('district-leaders');
districtLeaders.forEach(leader => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${leader.title}:</strong> ${leader.name} - <a href="mailto:${leader.email}">${leader.email}</a>`;
    districtLeadersList.appendChild(li);
});

// Populate lodges
const lodgesGrid = document.querySelector('.lodges-grid');
lodges.forEach(lodge => {
    const card = document.createElement('div');
    card.className = 'lodge-card';
    card.innerHTML = `
        <h3>${lodge.name}</h3>
        <p>${lodge.location}</p>
        <a href="mailto:${lodge.email}">${lodge.email}</a>
    `;
    lodgesGrid.appendChild(card);
});

// Handle secure links
// Only handle the 'Rituals' button in the Education section for password prompt

document.querySelectorAll('.secure-link').forEach(link => {
    if (link.textContent.trim() === 'Rituals') {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pass = prompt('Enter rituals password:');
            if (pass === 'boaz1') {
                window.location.href = 'ritual1.html';
            } else if (pass === 'boaz2') {
                window.location.href = 'ritual2.html';
            } else if (pass === 'boaz3') {
                window.location.href = 'ritual3.html';
            } else if (pass !== null) {
                alert('Incorrect password.');
            }
        });
    }
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would implement form submission
    alert('Thank you for your message! We will respond as soon as possible.');
    e.target.reset();
});

// Rituals password prompt and redirect
const ritualsLink = document.getElementById('rituals-link');
if (ritualsLink) {
    ritualsLink.addEventListener('click', function(e) {
        e.preventDefault();
        const pass = prompt('Enter rituals password:');
        if (pass === 'boaz1') {
            window.location.href = 'ritual1.html';
        } else if (pass === 'boaz2') {
            window.location.href = 'ritual2.html';
        } else if (pass === 'boaz3') {
            window.location.href = 'ritual3.html';
        } else if (pass !== null) {
            alert('Incorrect password.');
        }
    });
}

// Social media links - these would be actual links to your social media pages
const socialLinks = {
    facebook: '#',
    instagram: '#',
    tiktok: '#'
};

Object.entries(socialLinks).forEach(([platform, url]) => {
    const link = document.querySelector(`.social-link[href="#${platform}"]`);
    if (link) {
        link.href = url;
    }
});
