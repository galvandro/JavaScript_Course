var nome = String(window.prompt('Qual o seu nome?'))

document.write(`Ola, <strong>${nome}</strong>!!<br>`)

document.write(`Seu nome possui <strong>${nome.length}</strong> letras.<br>`)

document.write(`Em maiusculas: <strong>${nome.toUpperCase()}</strong><br>`)

document.write(`Em minusculas: <strong>${nome.toLowerCase()}</strong><br>`)
