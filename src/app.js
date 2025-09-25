import express from 'express';
import session from 'express-session'

const app = express();
app.use(session({
    secret: 'secret',
    resave: true, // Para mantener la session activa
    saveUninitialized: true // Guardar cualquiar cosa, asi sea datos vacios
}))

app.use(express.json()); // Para leer JSON en requests

const DB = [
    {
        name: 'Donald Trump',
        username: 'president',
        password: 'secret',
        rol: 'admin'
    }
]

app.get('/login', (req, res) => {
    const { username, password } = req.query

    const user =  DB.find(u => u.username === username && u.password === password)
    if(!user) return res.status(400).send('Invalid credentials')

    req.session.user = user

    res.send('Login Success!!')
})

function authentication(req, res, next) {
    if(req.session?.user) return next()

    return res.status(401).send('error de authentication')
}

app.get('/private', authentication, (req, res) => {
    res.send('Esta pagina la puede ver la persona logeada ' + JSON.stringify(req.session.user))
})

app.get('/', (req, res) => {
  res.send('Servidor Express funcionando 🚀');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});