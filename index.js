const express = require("express")
const app = express()



const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: 'audra.nitzsche@ethereal.email',
        pass: '5EF5jz5RqEcaY2RhGM'
  },
});
 

app.use(require('body-parser').urlencoded({ extended: false }));
app.use('/', express.static('html'))

app.post('/cadastro',(req,res)=>{
    let sobrenome = req.body.sobrenome
    let nome = req.body.nome
    let email=  req.body.email
    let mensagem = req.body.mensagem

    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"Code Fest 3 Edição" <audra.nitzsche@ethereal.email>', // sender address
          to: `audra.nitzsche@ethereal.email,${email}`,  // list of receivers
          subject: "São Leopoldo Tour - Folder", // Subject line
          text: ``, // plain text body
          html: 
          
          `<h1>Olá ${nome} ${sobrenome}, obrigado por se cadastrar no nosso formulario de contato </h1>
          <br>
          <h2>Aqui lhe passo um folder sobre o turismo da nossa maravilhosa cidade de São Leopoldo</h2>
          `
          
          , // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }
      
      main().catch(console.error);

    


      
      async function main2() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"Code Fest 3 Edição" <audra.nitzsche@ethereal.email>', // sender address
          to: `audra.nitzsche@ethereal.email,${email}`,  // list of receivers
          subject: "São Leopoldo Tour - Mensagem", // Subject line
          text: ``, // plain text body
          html: 
          
          `<h1>Olá ${nome} ${sobrenome}, obrigado por se cadastrar no nosso formulario de contato </h1>
          <br>
          <h2>Recebimos a sua mensagem</h2>
          <h3>*${mensagem}*</h3>
          <br>
          <h2>Em alguns minutos um dos nossos coloboradores entrará em contato para aclarar a sua duvida</h2>
          `
          
          , // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }
      
      main2().catch(console.error);



    res.send(`<h1> Cadastro com succeso 
    <br>
    Um folder com informações foi enviado para seu endereço de E-mail<h1>`)






})


app.listen(3000,()=>{
    console.log('Pronto... pela porta 3030')
})




  /*
app.use(require('body-parser').urlencoded({ extended: false }));
app.use('/', express.static('html'))

app.post('/cadastro',(req,res)=>{
    let sobrenome = req.body.sobrenome
    let nome = req.body.nome
    let email=  req.body.email
    let descen = req.body.descen

if(sobrenome === "Boehler"){
    console.log(req.body.sobrenome);
    let db = new sqlite3.Database('cadastro.db')

    db.serialize(function() {

        let sql = `INSERT INTO cadastro (nome, email, descen_ale) VALUES (?,?,?);`
        db.get(sql,[nome,email,descen],(erro,linha)=>{
            if(erro) throw erro
            
        })
    
        sql = "SELECT sobrenome, region FROM sobrenome WHERE sobrenome = ?; ";
    
        db.get(sql,[sobrenome],(erro,linha)=>{
            if(erro) {throw erro}
            console.log(linha.sobrenome)
    
            res.send(`<!DOCTYPE html>
        <html >
        <h1> Cadastro com succeso <h1>
        <strong>Seu sobrenome vem da parte ${linha.region} da Alemanha</strong>
        </html>`)
        });

    }

    );

    

    
    db.close()
}else {
    res.send(`<h1> Cadastro com succeso 
    <br>
    Um folder com informações foi enviado para seu endereço de E-mail<h1>`)
}

})


app.listen(3000,()=>{
    console.log('Pronto... pela porta 3030')
})
*/