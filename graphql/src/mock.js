const { v4: uuidv4 } = require('uuid')

const listUserBooks = []

const books = [
  {
    id: uuidv4(),
    title: 'Cosmos',
    author: 'Carl Sagan',
    genre: 'Science',
    publishingCompany: 'Companhia das Letras',
    publishingYear: 2017,
    numberOfPages: 560,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/81i3QCLGUzL._SL1500_.jpg',
    synopsis:
      'Escrito por um dos maiores divulgadores de ciência do século XX, Cosmos retraça 14 bilhões de anos de evolução cósmica, explorando tópicos como a origem da vida, o cérebro humano, hieróglifos egípcios, missões espaciais, a morte do sol, a evolução das galáxias e as forças e indivíduos que ajudaram a moldar a ciência moderna. Numa prosa transparente, Carl Sagan revela os segredos do planeta azul habitado por uma forma de vida que apenas começa a descobrir sua própria identidade e a se aventurar no vasto oceano do espaço sideral. Aqui, o tratamento dos temas científicos está sempre imbricado com outros campos de estudo tradicionais, como história, antropologia, arte e filosofia. Publicado pela primeira vez em 1980, Cosmos reúne alguns dos conhecimentos mais avançados da época sobre a natureza, a vida e o Universo ― e se mantém até hoje como uma das mais importantes obras de divulgação científica da história. Embora diversas descobertas fascinantes tenham ocorrido nos últimos quarenta anos, o tema central deste livro nunca estará desatualizado: nosso fascínio pelo conhecimento e a prática da ciência como atividade cultural.'
  },
  {
    id: uuidv4(),
    title: 'Laranja Mecânica',
    author: 'Anthony Burgess',
    genre: 'Ficção',
    publishingCompany: 'Aleph',
    publishingYear: 2004,
    numberOfPages: 224,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/61HgbCkcz4L._SL1145_.jpg',
    synopsis:
      'Laranja Mecânica é um romance distópico escrito por Anthony Burgess e publicado em 1962. A história se passa em um futuro distópico e segue Alex, um jovem delinquente que gosta de ultraviolência e música clássica. O livro é narrado por Alex, que fala em uma gíria chamada Nadsat, uma mistura de russo e inglês. A obra é conhecida por sua violência gráfica e por abordar temas como livre-arbítrio, moralidade e o papel do governo na sociedade. Laranja Mecânica foi adaptado para o cinema em 1971 por Stanley Kubrick, em um filme que se tornou um clássico do cinema. A adaptação cinematográfica foi controversa por sua violência gráfica e por sua abordagem dos temas do livro. O filme foi censurado em vários países e Kubrick retirou o filme de circulação no Reino Unido após receber ameaças de morte. Laranja Mecânica é um livro polêmico e provocativo que continua a gerar debates e discussões sobre a natureza da violência e a moralidade na sociedade.'
  },
  {
    id: uuidv4(),
    title: 'Precisamos falar sobre o Kevin',
    author: 'Lionel Shriver',
    genre: 'Ficção',
    publishingCompany: 'Intrínseca',
    publishingYear: 2007,
    numberOfPages: 463,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/919g-oJ1tZL._SL1500_.jpg',
    synopsis:
      'Eva nunca quis ser mãe e, mesmo após o nascimento de Kevin, manteve a convicção de que a maternidade não era para ela. O menino, por sua vez, sempre foi um mistério para ela. Kevin é cruel com Eva, indiferente ao pai e distante da irmã. O relacionamento entre mãe e filho é árido e hostil. Mas, quando Kevin comete um crime sem precedentes, Eva se vê obrigada a encarar o passado e a reconhecer que, talvez, a culpa seja sua. Precisamos falar sobre o Kevin é um thriller psicológico que aborda as questões mais sensíveis da maternidade. Com uma narrativa tensa e surpreendente, Lionel Shriver questiona a culpa e a inocência, o amor e o ódio, o bem e o mal.'
  },
  {
    id: uuidv4(),
    title: 'Planeta dos Macacos',
    author: 'Pierre Boulle',
    genre: 'Ficção Científica',
    publishingCompany: 'Estação Liberdade',
    publishingYear: 2006,
    numberOfPages: 288,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/61fo0Hgb1nL._SL1001_.jpg',
    synopsis:
      'Planeta dos Macacos é um clássico da ficção científica que narra a história de um grupo de exploradores que descobre um planeta habitado por macacos inteligentes e humanos primitivos. A obra aborda temas como evolução, sociedade e preconceito.'
  },
  {
    id: uuidv4(),
    title: 'Flores para Algernon',
    author: 'Daniel Keyes',
    genre: 'Ficção Científica',
    publishingCompany: 'Aleph',
    publishingYear: 2013,
    numberOfPages: 288,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/6100AFd7MrL._SL1500_.jpg',
    synopsis:
      'Flores para Algernon é um romance emocionante que acompanha a jornada de Charlie Gordon, um homem com deficiência intelectual, que se submete a uma cirurgia experimental para aumentar sua inteligência. A narrativa, apresentada em forma de diário, aborda questões profundas sobre ética, inteligência e humanidade.'
  },
  {
    id: uuidv4(),
    title: '2001: Uma Odisséia no Espaço',
    author: 'Arthur C. Clarke',
    genre: 'Ficção Científica',
    publishingCompany: 'Aleph',
    publishingYear: 2013,
    numberOfPages: 288,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/61tWC0pqJEL._SL1500_.jpg',
    synopsis:
      '2001: Uma Odisséia no Espaço é uma obra-prima da ficção científica que acompanha a jornada da humanidade desde os primórdios até um encontro com uma inteligência extraterrestre. A narrativa, repleta de simbolismo e imaginação, explora temas como evolução, tecnologia e o significado da existência.'
  },
  {
    id: uuidv4(),
    title: 'Coraline',
    author: 'Neil Gaiman',
    genre: 'Fantasia',
    publishingCompany: 'Intrínseca',
    publishingYear: 2003,
    numberOfPages: 192,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/71FvtJvTkRL._SL1500_.jpg',
    synopsis:
      'Coraline é uma história sombria e encantadora sobre uma menina que descobre uma versão alternativa de sua própria vida atrás de uma porta secreta em sua nova casa. O mundo que ela encontra parece perfeito, mas logo se revela ameaçador. Neil Gaiman cria uma narrativa envolvente que mistura fantasia e terror de forma magistral.'
  },
  {
    id: uuidv4(),
    title: 'Elantris',
    author: 'Brandon Sanderson',
    genre: 'Fantasia',
    publishingCompany: 'Aleph',
    publishingYear: 2016,
    numberOfPages: 592,
    coverImageUrl: 'https://m.media-amazon.com/images/I/51vXa1V2pbL.jpg',
    synopsis:
      'Elantris é um romance de fantasia épica que se passa em uma cidade outrora gloriosa, mas que agora está em ruínas. Quando uma misteriosa doença transforma seus habitantes em seres sem vida, um príncipe, uma princesa e um missionário se veem envolvidos em uma trama de intriga e magia. Brandon Sanderson cria um mundo rico em detalhes e personagens complexos.'
  },
  {
    id: uuidv4(),
    title: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasia',
    publishingCompany: 'WMF Martins Fontes',
    publishingYear: 2019,
    numberOfPages: 328,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/71553UI53YL._SL1500_.jpg',
    synopsis:
      'O Hobbit é um clássico da literatura fantástica que narra a jornada de Bilbo Bolseiro, um hobbit pacato que se vê envolvido em uma aventura épica para recuperar um tesouro guardado por um dragão. Ao longo do caminho, ele encontra elfos, anões, trolls e outras criaturas fantásticas. J.R.R. Tolkien cria um mundo mágico e repleto de perigos.'
  },
  {
    id: uuidv4(),
    title: 'Matéria Escura',
    author: 'Blake Crouch',
    genre: 'Ficção Científica',
    publishingCompany: 'Intrínseca',
    publishingYear: 2017,
    numberOfPages: 352,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/61G7qtR3nxL._SL1005_.jpg',
    synopsis:
      'Matéria Escura é um thriller de ficção científica que acompanha a jornada de Jason Dessen, um professor universitário que é sequestrado e acorda em uma realidade alternativa. Ele se vê obrigado a enfrentar versões diferentes de si mesmo e a lutar para voltar para sua família. Blake Crouch cria uma trama eletrizante que questiona a natureza da identidade e da realidade.'
  },
  {
    id: uuidv4(),
    title: 'O Ceifador',
    author: 'Neal Shusterman',
    genre: 'Ficção Científica',
    publishingCompany: 'Seguinte',
    publishingYear: 2017,
    numberOfPages: 448,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/91LldWCllgS._SL1500_.jpg',
    synopsis:
      'O Ceifador é o primeiro livro de uma trilogia distópica que imagina um futuro onde a morte foi superada e a população é controlada por uma elite de ceifadores, responsáveis por "podar" o excesso de pessoas. Quando dois adolescentes são escolhidos como aprendizes de ceifadores, eles se veem envolvidos em uma conspiração mortal. Neal Shusterman cria um mundo sombrio e fascinante, repleto de dilemas morais e reviravoltas surpreendentes.'
  },
  {
    id: uuidv4(),
    title: 'O Nome do Vento',
    author: 'Patrick Rothfuss',
    genre: 'Fantasia',
    publishingCompany: 'Arqueiro',
    publishingYear: 2009,
    numberOfPages: 672,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/81CGmkRG9GL._SL1500_.jpg',
    synopsis:
      'O Nome do Vento é o primeiro livro da trilogia Crônica do Matador do Rei, que acompanha a história de Kvothe, um jovem talentoso em magia e música que se torna uma lenda viva. A narrativa, apresentada em forma de autobiografia, explora temas como amizade, amor e o poder da palavra. Patrick Rothfuss cria um mundo ricamente detalhado e personagens cativantes.'
  },
  {
    id: uuidv4(),
    title: 'Artemis',
    author: 'Andy Weir',
    genre: 'Ficção Científica',
    publishingCompany: 'Arqueiro',
    publishingYear: 2018,
    numberOfPages: 384,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/81NkiZbCSOL._SL1500_.jpg',
    synopsis:
      'Artemis é um romance de ficção científica que se passa em uma colônia lunar no século XXII. A história segue Jazz Bashara, uma contrabandista que se vê envolvida em uma conspiração para sabotar a cidade. Andy Weir cria uma narrativa repleta de ação e humor, explorando questões de colonização espacial e desigualdade social.'
  },
  {
    id: uuidv4(),
    title: 'Piano Mecânico',
    author: 'Kurt Vonnegut',
    genre: 'Ficção Científica',
    publishingCompany: 'Companhia das Letras',
    publishingYear: 2017,
    numberOfPages: 272,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/71fiZheYNmL._SL1500_.jpg',
    synopsis:
      'Piano Mecânico é um romance distópico que imagina um futuro onde os Estados Unidos estão divididos em três países distintos, cada um governado por uma ideologia diferente. A história segue Paul Proteus, um engenheiro que se vê envolvido em uma conspiração para derrubar o governo. Kurt Vonnegut cria uma narrativa satírica e provocativa que questiona os rumos da sociedade.'
  },
  {
    id: uuidv4(),
    title: 'Donnie Darko',
    author: 'Richard Kelly',
    genre: 'Ficção Científica',
    publishingCompany: 'Intrínseca',
    publishingYear: 2017,
    numberOfPages: 352,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/71FNb1Kj2AL._SL1500_.jpg',
    synopsis:
      'Donnie Darko é uma obra de culto que combina elementos de drama, ficção científica e suspense psicológico. A história segue Donnie, um adolescente que começa a ter visões de um coelho gigante que o informa sobre o fim do mundo. Conforme ele investiga essas visões, ele descobre segredos perturbadores sobre sua cidade e sua própria família.'
  },
  {
    id: uuidv4(),
    title: 'Casa no Mar Cerúleo',
    author: 'T.J. Klune',
    genre: 'Fantasia',
    publishingCompany: 'Intrínseca',
    publishingYear: 2022,
    numberOfPages: 480,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/81eXhOPEFPL._SL1500_.jpg',
    synopsis:
      'Casa no Mar Cerúleo é uma história mágica e comovente que segue a jornada de um jovem chamado Linus Baker, um funcionário do Departamento de Crianças e Famílias, responsável por avaliar se os orfanatos para crianças mágicas estão operando de acordo com as leis. Quando Linus é enviado para avaliar um orfanato muito peculiar em uma ilha remota, ele descobre segredos que mudarão sua vida para sempre.'
  },
  {
    id: uuidv4(),
    title: 'Duna',
    author: 'Frank Herbert',
    genre: 'Ficção Científica',
    publishingCompany: 'Editora Aleph',
    publishingYear: 1965,
    numberOfPages: 604,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/81zN7udGRUL._SL1500_.jpg',
    synopsis:
      'Duna é um romance de ficção científica que se passa em um futuro distante, onde planetas são governados por famílias nobres e a luta pelo controle de um recurso valioso chamado "especiaria" é central. A história segue o jovem Paul Atreides, que se torna líder de um povo nômade no deserto do planeta Arrakis, também conhecido como Duna.'
  },
  {
    id: uuidv4(),
    title: 'Perdido em Marte',
    author: 'Andy Weir',
    genre: 'Ficção Científica',
    publishingCompany: 'Arqueiro',
    publishingYear: 2014,
    numberOfPages: 336,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/91-RDNvi8PS._SL1500_.jpg',
    synopsis:
      'Perdido em Marte é um romance de ficção científica que segue a história de Mark Watney, um astronauta que fica preso em Marte após uma tempestade. Ele luta pela sobrevivência enquanto a NASA e seus colegas astronautas tentam encontrar uma maneira de resgatá-lo.'
  },
  {
    id: uuidv4(),
    title: 'O Fim da Infância',
    author: 'Arthur C. Clarke',
    genre: 'Ficção Científica',
    publishingCompany: 'Aleph',
    publishingYear: 1953,
    numberOfPages: 256,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/71aSbmu4MzL._SL1280_.jpg',
    synopsis:
      'O Fim da Infância é um romance de ficção científica que explora o contato entre a humanidade e uma raça alienígena chamada "Os Senhores", que supervisionam a evolução da humanidade. Conforme a humanidade alcança uma nova era de paz e prosperidade, ela também enfrenta dilemas éticos e transformações sociais.'
  },
  {
    id: uuidv4(),
    title: 'Eu Que Nunca Conheci os Homens',
    author: 'Sylvia Buarque',
    genre: 'Ficção Científica',
    publishingCompany: 'Companhia das Letras',
    publishingYear: 1964,
    numberOfPages: 224,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/81IKyAwkU7L._SL1500_.jpg',
    synopsis:
      'Eu Que Nunca Conheci os Homens é um romance de ficção científica que se passa em um futuro distante, onde uma mulher é encontrada em um mundo devastado e desabitado. Ela é resgatada e levada para uma sociedade subterrânea, onde precisa se adaptar e descobrir sua identidade.'
  },
  {
    id: uuidv4(),
    title: 'O Fim da Eternidade',
    author: 'Isaac Asimov',
    genre: 'Ficção Científica',
    publishingCompany: 'Aleph',
    publishingYear: 1955,
    numberOfPages: 272,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/71tgD4z8zAL._SL1000_.jpg',
    synopsis:
      'O Fim da Eternidade é um romance de ficção científica que explora a existência de uma organização chamada "Eternidade", que permite viagens no tempo. O protagonista, Andrew Harlan, é um manipulador do tempo que se vê envolvido em dilemas éticos e pessoais ao longo de sua jornada.'
  },
  {
    id: uuidv4(),
    title: '1984',
    author: 'George Orwell',
    genre: 'Distopia',
    publishingCompany: 'Companhia das Letras',
    publishingYear: 1949,
    numberOfPages: 416,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/819js3EQwbL._SL1500_.jpg',
    synopsis:
      '1984 é um romance distópico que se passa em um mundo totalitário, onde o governo controla todos os aspectos da vida dos cidadãos. A história segue Winston Smith, um homem que trabalha no Ministério da Verdade e começa a questionar a realidade ao seu redor.'
  },
  {
    id: uuidv4(),
    title: 'O Caçador de Pipas',
    author: 'Khaled Hosseini',
    genre: 'Ficção',
    publishingCompany: 'Nova Fronteira',
    publishingYear: 2003,
    numberOfPages: 368,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/81yVzXTgLzL._SL1500_.jpg',
    synopsis:
      'O Caçador de Pipas é um romance que segue a história de Amir, um menino afegão que cresce em meio à guerra civil em seu país. A narrativa aborda temas como amizade, traição, redenção e a busca por perdão.'
  },
  {
    id: uuidv4(),
    title: 'O Colecionador',
    author: 'John Fowles',
    genre: 'Suspense',
    publishingCompany: 'L&PM Pocket',
    publishingYear: 1963,
    numberOfPages: 352,
    coverImageUrl:
      'https://darkside.vtexassets.com/arquivos/ids/173965/111-o-colecionador-6.png?v=637558194556230000',
    synopsis:
      'O Colecionador é um thriller psicológico que acompanha a história de Frederick Clegg, um homem solitário e obcecado por arte que decide sequestrar uma jovem chamada Miranda Grey. Ele a mantém em cativeiro em seu porão, esperando que ela aprenda a amá-lo.'
  },
  {
    id: uuidv4(),
    title: 'O Iluminado',
    author: 'Stephen King',
    genre: 'Terror',
    publishingCompany: 'Suma',
    publishingYear: 2009,
    numberOfPages: 464,
    coverImageUrl:
      'https://m.media-amazon.com/images/I/8147kKLLvOL._SL1500_.jpg',
    synopsis:
      'O Iluminado é um romance de terror que narra a história de Jack Torrance, um escritor alcoólatra que aceita um emprego como zelador de um hotel isolado durante o inverno. Ele se muda para o hotel com sua esposa Wendy e seu filho Danny, que possui poderes psíquicos. Conforme o inverno avança, eventos sobrenaturais começam a ocorrer no hotel, levando Jack à beira da loucura.'
  }
]

module.exports = {
  listUserBooks,
  books
}
