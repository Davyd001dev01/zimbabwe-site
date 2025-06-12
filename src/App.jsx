import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Crown, Gem, Sword, Calendar, Globe, BookOpen } from 'lucide-react';
import Timeline from './components/Timeline';
import DataVisualization from './components/DataVisualization';
import ClickableImage from './components/ClickableImage';
import './App.css';

// Import images
import mapaZimbabwe from './assets/mapa_zimbabwe.jpg';
import grandeZimbabwe1 from './assets/grande_zimbabwe_1.jpg';
import grandeZimbabwe2 from './assets/grande_zimbabwe_2.jpg';
import grandeZimbabwe3 from './assets/grande_zimbabwe_3.jpg';
import cecilRhodes from './assets/cecil_rhodes.jpg';
import colonizacaoMapa from './assets/colonizacao_mapa.png';
import guerraIndependencia from './assets/guerra_independencia.jpg';
import robertMugabe from './assets/robert_mugabe.jpg';
import economiaAtual from './assets/economia_atual.jpg';
import moedaZimbabue from './assets/moeda_zimbabue.jpg';
import gukurahundi from './assets/gukurahundi.png';
import gukurahumdiMemorial from './assets/gukurahundi_memorial.jpg';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 text-gray-800">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="sticky top-0 z-50 bg-white bg-opacity-90 shadow-lg backdrop-blur-md p-4 flex justify-center items-center"
      >
        <h1 className="text-3xl font-extrabold text-amber-700 tracking-tight">
          Zimbábue: Neocolonialismo e Formação
        </h1>
      </motion.header>

      {/* Introdução */}
      <section className="container mx-auto p-8 my-8 bg-white rounded-xl shadow-xl">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="text-4xl font-bold text-amber-800 mb-6 flex items-center"
        >
          <BookOpen className="mr-3 text-amber-600" size={36} /> Introdução
        </motion.h2>
        <p className="text-lg leading-relaxed mb-4">
          Este trabalho explora a profunda influência do neocolonialismo no processo de formação do Zimbábue, um país africano com uma história rica e complexa. Analisaremos como as potências coloniais moldaram seu destino, desde a demarcação de suas fronteiras até os desafios contemporâneos.
        </p>
        <p className="text-lg leading-relaxed">
          O Zimbábue, anteriormente conhecido como Rodésia do Sul, é um exemplo vívido das cicatrizes deixadas pela exploração e dominação externa, e como a luta pela autodeterminação continua a definir sua trajetória.
        </p>
      </section>

      {/* Linha do Tempo Interativa */}
      <Timeline />

      {/* Visualização de Dados */}
      <DataVisualization />

      {/* Localização Geográfica */}
      <section className="container mx-auto p-8 my-8 bg-white rounded-xl shadow-xl">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="text-4xl font-bold text-amber-800 mb-6 flex items-center"
        >
          <MapPin className="mr-3 text-amber-600" size={36} /> Localização Geográfica
        </motion.h2>
        <p className="text-lg leading-relaxed mb-4">
          O Zimbábue é um país localizado na África Austral, sem saída para o mar. Faz fronteira com a África do Sul ao sul, Botsuana a sudoeste, Zâmbia a noroeste e Moçambique a leste. Sua capital é Harare.
        </p>
        <div className="rounded-lg overflow-hidden shadow-md">
          <ClickableImage
            src={mapaZimbabwe}
            alt="Mapa de localização do Zimbábue"
            title="Localização Geográfica do Zimbábue"
            caption="Clique para ampliar o mapa"
          />
        </div>
      </section>

      {/* Etnias Existentes e/ou Extintas */}
      <section className="container mx-auto p-8 my-8 bg-white rounded-xl shadow-xl">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="text-4xl font-bold text-amber-800 mb-6 flex items-center"
        >
          <Users className="mr-3 text-amber-600" size={36} /> Etnias Existentes e/ou Extintas
        </motion.h2>
        <p className="text-lg leading-relaxed mb-4">
          A população do Zimbábue é composta por diversos grupos étnicos, sendo os principais os Shona (aproximadamente 82%) e os Ndebele (aproximadamente 14%). Outros grupos minoritários incluem os Tonga, Shangaan, Venda, Chewa, Sotho, bem como uma pequena população de brancos e asiáticos.
        </p>
        <p className="text-lg leading-relaxed">
          Historicamente, a região foi habitada por povos Khoisan antes da chegada dos grupos bantos, como os Shona, que estabeleceram impérios poderosos como o Grande Zimbábue. A colonização britânica e a subsequente formação da Rodésia do Sul levaram a uma complexa dinâmica étnica e racial, com a imposição de uma minoria branca no poder.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ClickableImage
            src={grandeZimbabwe1}
            alt="Ruínas do Grande Zimbábue"
            title="Ruínas do Grande Zimbábue - Testemunho dos primeiros estados organizados"
            caption="As impressionantes ruínas de pedra do Grande Zimbábue, um testemunho da antiga civilização Shona."
          />
          <ClickableImage
            src={grandeZimbabwe2}
            alt="Detalhe das ruínas do Grande Zimbábue"
            title="Detalhe Arquitetônico do Grande Zimbábue"
            caption="Detalhe da construção em pedra seca, sem uso de argamassa, demonstrando a avançada engenharia da época."
          />
          <ClickableImage
            src={grandeZimbabwe3}
            alt="Vista aérea do Grande Zimbábue"
            title="Vista Aérea do Complexo do Grande Zimbábue"
            caption="Uma perspectiva aérea do vasto complexo, que foi um centro comercial e político vital."
          />
        </div>
      </section>

      {/* País Colonizador e Motivos da Neocolonização */}
      <section className="container mx-auto p-8 my-8 bg-white rounded-xl shadow-xl">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="text-4xl font-bold text-amber-800 mb-6 flex items-center"
        >
          <Crown className="mr-3 text-amber-600" size={36} /> País Colonizador e Motivos da Neocolonização
        </motion.h2>
        <p className="text-lg leading-relaxed mb-4">
          O Zimbábue foi colonizado pela <span className="font-semibold text-amber-700">Grã-Bretanha</span>, principalmente através da <span className="font-semibold text-amber-700">Companhia Britânica da África do Sul (BSAC)</span>, liderada por <span className="font-semibold text-amber-700">Cecil Rhodes</span>. A demarcação do território ocorreu na década de 1890, e a região tornou-se a colônia autônoma da Rodésia do Sul em 1923.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Os motivos para a neocolonização foram multifacetados, incluindo a busca por recursos minerais (especialmente ouro e diamantes), a expansão do Império Britânico, o controle de rotas comerciais estratégicas e a crença na superioridade racial europeia, que justificava a dominação e exploração dos povos africanos. A BSAC, sob o pretexto de desenvolver a região, estabeleceu um controle rigoroso sobre a terra e os recursos, desapropriando terras dos nativos e impondo um sistema de trabalho forçado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ClickableImage
            src={cecilRhodes}
            alt="Cecil Rhodes"
            title="Cecil Rhodes - O Colonizador"
            caption="Cecil Rhodes, fundador da Rodésia e figura central na colonização britânica da África Austral."
          />
          <ClickableImage
            src={colonizacaoMapa}
            alt="Mapa da colonização"
            title="Injustiças Territoriais Coloniais"
            caption="Mapa mostrando a divisão da África durante a Conferência de Berlim, ignorando as fronteiras étnicas e culturais."
          />
        </div>
      </section>

      {/* Riquezas e Exploração do Território */}
      <section className="container mx-auto p-8 my-8 bg-white rounded-xl shadow-xl">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="text-4xl font-bold text-amber-800 mb-6 flex items-center"
        >
          <Gem className="mr-3 text-amber-600" size={36} /> Riquezas e Exploração do Território
        </motion.h2>
        <p className="text-lg leading-relaxed mb-4">
          O Zimbábue é rico em recursos naturais, incluindo ouro, diamantes, cromo, platina, carvão e níquel. Durante o período colonial, essas riquezas foram intensamente exploradas pela Grã-Bretanha, com a maior parte dos lucros sendo desviada para a metrópole. A economia foi estruturada para atender aos interesses coloniais, com a monocultura de tabaco e a mineração em larga escala, em detrimento do desenvolvimento local e da subsistência das comunidades africanas.
        </p>
        <p className="text-lg leading-relaxed">
          A exploração dos recursos naturais e a imposição de um sistema econômico extrativista deixaram um legado de desigualdade e dependência que ainda afeta o Zimbábue hoje. A terra fértil, que era a base da subsistência das comunidades, foi confiscada para grandes fazendas de propriedade de colonos brancos, gerando conflitos e desequilíbrios sociais.
        </p>
      </section>

      {/* Processo de Emancipação (Independência) e Formação do País */}
      <section className="container mx-auto p-8 my-8 bg-white rounded-xl shadow-xl">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="text-4xl font-bold text-amber-800 mb-6 flex items-center"
        >
          <Sword className="mr-3 text-amber-600" size={36} /> Processo de Emancipação (Independência) e Formação do País
        </motion.h2>
        <p className="text-lg leading-relaxed mb-4">
          O processo de independência do Zimbábue foi longo e violento, marcado pela luta armada contra o regime minoritário branco da Rodésia. A guerra de libertação, que durou de 1965 a 1979, envolveu grupos nacionalistas africanos como a ZANU (União Nacional Africana do Zimbábue) e a ZAPU (União do Povo Africano do Zimbábue).
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Após anos de conflito e negociações, o Zimbábue finalmente conquistou sua independência em 18 de abril de 1980, com Robert Mugabe tornando-se o primeiro primeiro-ministro. A formação do novo país foi um momento de grande esperança, mas também de desafios significativos, incluindo a reconciliação nacional e a reconstrução de uma economia devastada pela guerra.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ClickableImage
            src={guerraIndependencia}
            alt="Guerra de Independência do Zimbábue"
            title="Guerra de Libertação do Zimbábue"
            caption="Combatentes da liberdade durante a guerra de independência, que levou à formação do Zimbábue."
          />
          <ClickableImage
            src={robertMugabe}
            alt="Robert Mugabe"
            title="Robert Mugabe - Primeiro Líder do Zimbábue"
            caption="Robert Mugabe, figura central na luta pela independência e primeiro líder do Zimbábue."
          />
        </div>
      </section>

      {/* Guerra Civil/Conflitos Pós-Emancipação */}
      <section className="container mx-auto p-8 my-8 bg-white rounded-xl shadow-xl">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="text-4xl font-bold text-amber-800 mb-6 flex items-center"
        >
          <Sword className="mr-3 text-amber-600" size={36} /> Guerra Civil/Conflitos Pós-Emancipação
        </motion.h2>
        <p className="text-lg leading-relaxed mb-4">
          Apesar da independência, o Zimbábue enfrentou conflitos internos significativos, como o massacre de Gukurahundi (1983-1987), onde milhares de civis Ndebele foram mortos por forças governamentais. Este período sombrio da história do país revelou tensões étnicas e políticas que persistiram após a emancipação.
        </p>
        <p className="text-lg leading-relaxed">
          Outros conflitos e instabilidades políticas, incluindo disputas por terras e crises econômicas, continuaram a desafiar a estabilidade do Zimbábue, impactando seu desenvolvimento e a vida de sua população.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ClickableImage
            src={gukurahundi}
            alt="Gukurahundi"
            title="Massacre de Gukurahundi"
            caption="Representação visual dos eventos do Gukurahundi, um período de violência política no Zimbábue."
          />
          <ClickableImage
            src={gukurahumdiMemorial}
            alt="Memorial Gukurahundi"
            title="Memorial às Vítimas do Gukurahundi"
            caption="Um memorial dedicado às vítimas do massacre de Gukurahundi, um lembrete sombrio da história do Zimbábue."
          />
        </div>
      </section>

      {/* Situação/Características na Atualidade */}
      <section className="container mx-auto p-8 my-8 bg-white rounded-xl shadow-xl">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="text-4xl font-bold text-amber-800 mb-6 flex items-center"
        >
          <Globe className="mr-3 text-amber-600" size={36} /> Situação/Características na Atualidade
        </motion.h2>
        <p className="text-lg leading-relaxed mb-4">
          Atualmente, o Zimbábue enfrenta desafios econômicos significativos, incluindo alta inflação, desemprego e pobreza. A instabilidade política e a corrupção também contribuem para a difícil situação do país. No entanto, há esforços contínuos para a recuperação econômica e a melhoria das condições de vida da população.
        </p>
        <p className="text-lg leading-relaxed">
          Apesar dos desafios, o Zimbábue possui um grande potencial, com recursos naturais abundantes e uma população jovem. O futuro do país dependerá da capacidade de seus líderes e cidadãos de superar os legados do passado e construir um futuro mais próspero e equitativo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ClickableImage
            src={economiaAtual}
            alt="Economia atual do Zimbábue"
            title="Desafios Econômicos Atuais"
            caption="Representação visual da difícil situação econômica do Zimbábue, com alta inflação e desemprego."
          />
          <ClickableImage
            src={moedaZimbabue}
            alt="Moeda do Zimbábue"
            title="A Moeda do Zimbábue"
            caption="A moeda atual do Zimbábue, refletindo as mudanças e desafios econômicos do país."
          />
        </div>
      </section>

      {/* Fontes de Pesquisa */}
      <section className="container mx-auto p-8 my-8 bg-white rounded-xl shadow-xl">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="text-4xl font-bold text-amber-800 mb-6 flex items-center"
        >
          <BookOpen className="mr-3 text-amber-600" size={36} /> Fontes de Pesquisa
        </motion.h2>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>Wikipedia: <a href="https://pt.wikipedia.org/wiki/Zimbabwe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://pt.wikipedia.org/wiki/Zimbabwe</a></li>
          <li>BBC News: <a href="https://www.bbc.com/news/world-africa-14113177" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.bbc.com/news/world-africa-14113177</a></li>
          <li>Human Rights Watch: <a href="https://www.hrw.org/africa/zimbabwe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.hrw.org/africa/zimbabwe</a></li>
          <li>The World Bank: <a href="https://www.worldbank.org/en/country/zimbabwe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.worldbank.org/en/country/zimbabwe</a></li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-amber-800 text-white p-6 text-center">
        <p>&copy; 2025 Zimbábue: Neocolonialismo e Formação. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;


