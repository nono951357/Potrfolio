const projects = {
    oraiProjektek: [
        { url: 'https://nono951357.github.io/Frontend_Gyak/', isDeployed: true, description: 'Frontend gyakorlatok' },
        { url: 'https://nono951357.github.io/svelteDemo/', isDeployed: true, description: 'Svelte demó projekt' },
        { url: 'https://nono951357.github.io/orarend/', isDeployed: true, description: 'Órarend projekt' },
    ],
    sajatProjektek: [
        { url: 'https://nono951357.github.io/bevasarlolista/', isDeployed: true, description: 'Bevásárlólista alkalmazás' },
        { url: 'https://nono951357.github.io/CatchMe/', isDeployed: true, description: 'Macska egér játék' },
        { url: 'https://nono951357.github.io/jatek_szimulacio/', isDeployed: true, description: 'Különböző játékok nyerési esélyeinek szimulálása' },
    ],
    haziFeladat: [
        { url: 'https://nono951357.github.io/vue_hazi/', isDeployed: true, description: 'Vue.js házi feladat' },
        { url: 'https://nono951357.github.io/szamOsszeado/', isDeployed: true, description: 'Számösszeadó' },
        { url: 'https://nono951357.github.io/tetris/', isDeployed: true, description: 'Tetrisz játék' },
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
        const status = project.isDeployed ? 'Közzétéve' : 'Feltöltve';
        const projectBox = projectBoxes[`${key}Box`];
        if (projectBox) {
            projectBox.innerHTML += `<li><a href="${project.url}" target="_blank">${projectName}</a> - ${status}<br><span>${project.description}</span></li>\n`;
        }
    });
});
