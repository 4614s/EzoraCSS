let guncelYil = new Date().getFullYear();

document.querySelector("#code1").innerText =  `<link rel="stylesheet" href="https://ezoracss.vercel.app/fontlarvehizalamalar.css" />`;

document.querySelector("#code2").innerText = ` <link rel="stylesheet" href="https://ezoracss.vercel.app/hazirtemalar/tema1.css" />
`;

document.querySelector("#code3").innerText = ` <link rel="stylesheet" href="https://ezoracss.vercel.app/hazirtemalar/tema2.css" />
`;

document.querySelector("#code4").innerText = ` <link rel="stylesheet" href="https://ezoracss.vercel.app/hazirtemalar/tema3.css" />
`;

document.querySelector("#copyright").innerHTML = `<b>© ${guncelYil} Ezora CSS </b>`
