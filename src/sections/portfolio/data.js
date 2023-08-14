import BankCustomer from '../../assets/bankcostumers.gif'
import AllDados from '../../assets/alldados.gif'
import Portfolio from '../../assets/portfolio.gif'
import AllFarm from '../../assets/allfarm.png'

const data = [
    {id: 1, title: 'Bank Costumers Analytics', description: "A análise do Banco de Dados de clientes de um banco, disponibilizada no Kaggle e feita no Google Colab, tem como objetivo identificar quais clientes não são mais associados do banco. E para essa predição fez-se uso do aprendizado supervisionado aliado ao Scikit", imageUrl: BankCustomer, href: 'https://colab.research.google.com/github/JoaoVictorDourado/Bank-Costumers/blob/master/Bank_Costumers.ipynb'},
    {id: 2, title: 'Basic Project', description: 'Um projeto pessoal no qual eu desenvolvo habilidades adquiridas na universidade, principalmente as aplicadas a linguagem Python', imageUrl: '', href: ''},
    {id: 3, title: 'Doggefy', description: 'Projeto em flutter realizado na disciplina de desenvolvimento mobile. O App se trata de "feed" onde é possível criar um perfil, fazer busca por raças de cachorros (Dog CEO API) e curtir fotos de raças cachorros', imageUrl: ''},
    {id: 4, title: 'Portfolio', description: 'Portfolio feito com o intuito de apresentar mais sobre mim mesmo, meus projetos e experiência no mercado de trabalho', imageUrl: Portfolio},
    {id: 5, title: 'AllFarm Webapp', description: 'Webapp feito para a empresa AllDados, com o intuito de criar uma plataforma onde os clientes pudessem gerir suas fazendas. Esta aplicação foi desenvolvida utilizando React, Bootstrap, Firebase e +', imageUrl: AllFarm, href: ''},
    {id: 6, title: 'AllDados Website', description: 'Website feito para a empresa AllDados, com intuito de apresentar o que é oferecido pela empresa, seus parceiros e melhor maneira de entrar em contato com eles', imageUrl: AllDados, href: 'https://www.alldados.com.br'},
]

export default data