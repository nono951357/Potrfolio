
    const urls = [
        'https://nono951357.github.io/Frontend_Gyak/',
    ];
    
    const projectBox = document.getElementsByClassName('project-box-ul')[0];

    urls.forEach(url => {
        const projectName = url.split('/')[3];
        projectBox.innerHTML += `<li><a href="${url}" target="_blank">${projectName}</a></li>\n`;
    });
