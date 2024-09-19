    const oraiProjektekUrls = [
    { url: 'https://nono951357.github.io/Frontend_Gyak/', isDeployed: true },
    ];

    const sajatProjektekUrls = [

    ];

    const haziFeladatUrls = [

    ];

    const oraiProjektekBox = document.querySelector('.column:nth-child(1) .project-list');
    const sajatProjektekBox = document.querySelector('.column:nth-child(2) .project-list');
    const haziFeladatBox = document.querySelector('.column:nth-child(3) .project-list');
    
oraiProjektekUrls.forEach(project => {
    const projectName = project.url.split('/')[3];
    const status = project.isDeployed ? 'Deployed' : 'Uploaded';
    oraiProjektekBox.innerHTML += `<li><a href="${project.url}" target="_blank">${projectName}</a> - ${status}</li>\n`;
    });
    
sajatProjektekUrls.forEach(project => {
    const projectName = project.url.split('/')[3];
    const status = project.isDeployed ? 'Deployed' : 'Uploaded';
    sajatProjektekBox.innerHTML += `<li><a href="${project.url}" target="_blank">${projectName}</a> - ${status}</li>\n`;
    });
    
haziFeladatUrls.forEach(project => {
    const projectName = project.url.split('/')[3];
    const status = project.isDeployed ? 'Deployed' : 'Uploaded';
    haziFeladatBox.innerHTML += `<li><a href="${project.url}" target="_blank">${projectName}</a> - ${status}</li>\n`;
    });