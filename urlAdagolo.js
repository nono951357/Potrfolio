    const projects = {
        oraiProjektek: [
            { url: 'https://nono951357.github.io/Frontend_Gyak/', isDeployed: true },
            { url: 'https://nono951357.github.io/svelteDemo/', isDeployed: true },
            { url: 'https://nono951357.github.io/orarend/', isDeployed: true },
        ],
        sajatProjektek: [
            { url: 'https://nono951357.github.io/bevasarlolista/', isDeployed: true },
        ],
        haziFeladat: [
            { url: 'https://nono951357.github.io/szamOsszeado/', isDeployed: true },
        ]
    };
    
    const projectBoxes = {
        oraiProjektekBox: document.getElementById('oraiProjektekBox'),
        sajatProjektekBox: document.getElementById('sajatProjektekBox'),
        haziFeladatBox: document.getElementById('haziFeladatBox')
    };
    
    Object.keys(projects).forEach(key => {
        projects[key].forEach(project => {
            const projectName = project.url.split('/')[3];
            const status = project.isDeployed ? 'Deployed' : 'Uploaded';
            projectBoxes[`${key}Box`].innerHTML += `<li><a href="${project.url}" target="_blank">${projectName}</a> - ${status}</li>\n`;
        });
    });