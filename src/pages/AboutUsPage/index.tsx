import styled from 'styled-components'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'

import Auction1 from '../../assets/aboutUs/auction1.png'
import Auction2 from '../../assets/aboutUs/auction2.png'
import Auction3 from '../../assets/aboutUs/auction3.png'
import SamantaPhoto from '../../assets/aboutUs/samanta.jpg'
import JanekPhoto from '../../assets/aboutUs/janek.jpg'
import TomaszPhoto from '../../assets/aboutUs/tomasBelling.webp'
import MediaSection from "../../features/MediaSection";

interface CustomStyledElement {
  marginTop?: string
  maxWidth?: string
  paddingTop?: string
}

const AboutUsPage = () => {
  return (
    <FullWidthContainer>
      <FullWidthContainer>
        <ExtendedAdjustingSection>
          <Header paddingTop={'8.5rem'}> Nasza misja </Header>
        </ExtendedAdjustingSection>

        <ExtendedAdjustingSection marginTop={'3rem'}>
          <BasicText>
            Jako Diamondscraft jesteśmy pierwszym domem aukcyjnym sprzedającym
            tokeny NFT, ale również dzieła sztuki. Pomysłodawcy firmy od wielu
            lat zajmują się sprzedażą obrazów, promocją artystów oraz
            organizacją wystaw. NFT Art/Diamondscraft zrzesza artystów
            tworzących cyfrowo oraz tradycyjnie. Tworzymy pomost pomiędzy
            rzeczywistym rynkiem sztuki, a tym wirtualnym. Diamondscraft
            organizuje aukcje dzieł sztuki – są to wyjątkowe imprezy, na których
            warto się pojawić. Zawsze wybieramy miejsca o najwyższym poziomie,
            aby nasz odbiorca czuł się wyjątkowo. Licytacje są prowadzone przez
            znanych i cenionych prezenterów, bądź aktorów: ostatnie przez
            Krzysztofa Ibisza czy tez Sandrę Staniszewską- Herbich.
          </BasicText>
        </ExtendedAdjustingSection>
        <ExtendedAdjustingSection marginTop={'4rem'}>
          <ColumnWrapper>
            <ImageShort src={Auction1} alt='Krzysztof Ibisz' />
          </ColumnWrapper>
          <ColumnWrapper>
            <ImageShort src={Auction2} alt='Pałac kultury' />
          </ColumnWrapper>
        </ExtendedAdjustingSection>
      </FullWidthContainer>

      <GradientFullWidthContainer>
        <ExtendedAdjustingSection>
          <ColumnWrapper>
            <BasicText>
              Pierwsza aukcja odbyła się w prestiżowym miejscu w Warszawie w
              wieżowcu na Złotej 44, na ostatnim piętrze z widokiem na całą
              Warszawę. Odwiedziło Nas wielu znamienitych gości, oprócz obrazów,
              można było zakupić pierwszy raz na aukcji w Polsce tokeny NFT,
              które wśród kolekcjonerów cieszyły się ogromną popularnością.
              Nasze aukcje to spotkania ludzi biznesu, świata kultury i sztuki
              oraz crypto i NFT. To również możliwość poszerzenia swojej wiedzy
              na tematy związane ze światowym rynkiem kryptowalut oraz tokenów.
              <br />
              <br />
              <br />
              Tworzymy eliatrny klub miłośników sztuki, ale również nowych
              technologii. Na naszych aukcjach zawsze mamy stoisko z OCULASAMI,
              gdzie do wejścia do naszej galerii Diamondscraft w przestrzeni
              METAVERSE.
              <br />
              <br />
              <br />
              Przecieramy nowe szlaki. Stworzyliśmy pierwszą Galerię Sztuki w
              METAVERSE, a kolejne aukcja w odbędą się nie tylko w siedzibie
              Galerii, ale również w METAVERSE. Zachęcamy do wejścia do Naszej
              Galerii na Spatial, należy tylko podpiąć się do swojego portfela
              na METAMASK i podłączyć Oculusa.
            </BasicText>
          </ColumnWrapper>
          <ColumnWrapper>
            <ImageLong src={Auction3} alt='Aukcje' />
          </ColumnWrapper>
        </ExtendedAdjustingSection>
      </GradientFullWidthContainer>

      <FullWidthContainerBlack>
        <ExtendedAdjustingSection>
          <BasicText paddingTop={'4rem'}>
            Tworzymy eliatrny klub miłośników sztuki, ale również nowych
            technologii. Na naszych aukcjach zawsze mamy stoisko z OCULASAMI,
            gdzie do wejścia do naszej galerii Diamondscraft w przestrzeni
            METAVERSE.
            <br />
            <br />
            Przecieramy nowe szlaki. Stworzyliśmy pierwszą Galerię Sztuki w
            METAVERSE, a kolejne aukcja w odbędą się nie tylko w siedzibie
            Galerii, ale również w METAVERSE.
            <br />
            <br />
            Zachęcamy do wejścia do Naszej Galerii na Spatial, należy tylko
            podpiąć się do swojego portfela na METAMASK i podłączyć Oculusa.
          </BasicText>
        </ExtendedAdjustingSection>

        <ExtendedAdjustingSection marginTop={'12rem'}>
          <Header> Nasz zespół </Header>
        </ExtendedAdjustingSection>
        <ExtendedAdjustingSection marginTop={'4rem'}>
          <ColumnWrapper>
            <FancyCard>
              <div className="content">
                <TeamMemberPhoto src={SamantaPhoto} alt='Samanta Belling' />
              </div>
              <div className="card"></div>
            </FancyCard>

            <Header marginTop={'4rem'}> Samanta Belling </Header>
            <BasicText marginTop={'2.5rem'} maxWidth={'420px'}>
              CEO i współzałożyciel „Diamondscraft” pierwszego Domu Aukcyjnego w Polsce sprzedającego dzieła sztuki oraz tokeny NFT,
              który posiada również swoją przestrzeń na platformie Metaverse Spatial,
              gdzie regularnie organizowane są wystawy NFT oraz aukcje,
              które symultanicznie odbywają się na żywo oraz online na platformie aukcyjnej.
              Diamondscraft tworzy pomost pomiędzy tradycyjną, a wirtualną sztuką.
              <br />
              <br />
              Tworząc projekty NFT starannie wyselekcjonowanym artystom.
              Diamondscraft tworzy również przestrzenie w rozszerzonej rzeczywistości AR,
              w której można spotykać się z przyjaciółmi i klientami.
              <br />
              <br />
              Historyk sztuki, studia na Katolickim Uniwersytecie Lubelskim, specjalizacja:
              inwentaryzatorska oraz konserwatorska, (praca magisterska – „Kolekcjonerzy,
              a Rynek Sztuki w Polsce po 1989 r.,
              wieloletni kurator wystaw, marszand, redaktor magazynu „Artysta i Sztuka”,
              Prezes „Belle Arte” – Galerii Sztuki w Centrum Praskim Koneser, wiceprezes
              „Fundacji Dziedzictwa Kultury Polskiej” przywracającej pamięć o utraconych dobrach kultury podczas II wojny światowej.
              <br />
              <br />
              Koordynator Aukcji Sztuki Fantastycznej w Desie Unicum,
              odpowiedzialna za: dobór prac, wycenę dzieł, ustalanie estymacji,
              potwierdzenie autentyczności prac, kontakty z kolekcjonerami, kontakty z artystami,
              przygotowanie katalogów: zakres merytoryczny oraz skład graficzny.
              <br />
              Promotorka polskich artystów w kraju i za granicą. Związana z rynkiem sztuki od kilkunastu lat
            </BasicText>
          </ColumnWrapper>
          <ColumnWrapper>
            <FancyCard>
              <div className="content">
                <TeamMemberPhoto src={TomaszPhoto} alt='Tomasz Belling' />
              </div>
              <div className="card"></div>
            </FancyCard>

            <Header marginTop={'4rem'}> Thomas Belling </Header>
            <BasicText marginTop={'2.5rem'} maxWidth={'420px'}>
              CoFounder & Board Member (Współzałożyciel i członek zarządu)
              NFT ART Spółka z ograniczoną odpowiedzialnością, twórca marki Diamondscraft.
              <br />
              <br />

              Kilkuletnie doświadczenie w branży reklamowej w firma RGB Gdańsk,
              13 lat doświadczenia w przemyśle energetycznym jako dyrektor w sektorze morza północnego dla kompanii energetyczny Shell i TAKA.
              <br />
              <br />

              Pasjonat i miłośnik sztuk pięknych, kolekcjoner sztuki i współwłaściciel galerii Belle Arte.
              Współorganizator wielu wystaw i eventów artystycznych.
            </BasicText>
          </ColumnWrapper>
        </ExtendedAdjustingSection>

        <ExtendedAdjustingSection marginTop={'6rem'}>
          <ColumnWrapper>
            <FancyCard>
              <div className="content">
                <TeamMemberPhoto src={JanekPhoto} alt='Jan' />
              </div>
              <div className="card"></div>
            </FancyCard>

            <Header marginTop={'4rem'}> Jan DrNico Okliński </Header>
            <BasicText marginTop={'2.5rem'} maxWidth={'420px'}>
              Artysta, muzyk, twórca tatuaży, rysunków, projektów graficznych
              oraz NFT.
              <br />
              Poświęcił wiele lat na samodzielny rozwój talentu, inspirując się
              rozmaitymi technikami oraz motywami. Doświadczenia nabierał
              pracując przy projektach graficzno-artystycznych dla setek firm,
              oraz tworząc dla przyjemności.
              <br />
              W swojej twórczości łączy wiele technik, często
              niekonwencjonalnych. Korzystając z wielorakich inspiracji, nie
              zamyka się na jeden określony styl.
              <br />
              Mocno związany z Sopotem. Natchnienie czerpie z obserwacji świata,
              refleksji oraz rozmów z napotkanymi ludźmi. W swoich pracach
              porusza często tematy trudne, nawet kontrowersyjne.
            </BasicText>
          </ColumnWrapper>
          <ColumnWrapper></ColumnWrapper>
        </ExtendedAdjustingSection>

        <ExtendedAdjustingSection>
          <MediaSection />
        </ExtendedAdjustingSection>
      </FullWidthContainerBlack>
    </FullWidthContainer>
  )
}

const FullWidthContainer = styled.div`
  width: 100%;
  background: #080924;
  box-sizing: border-box;
`

const FullWidthContainerBlack = styled.div`
  width: 100%;
  background: #000000;
  box-sizing: border-box;
`

const GradientFullWidthContainer = styled(FullWidthContainer)`
  background: linear-gradient(#080924, #000000);
  padding-top: 4rem;
`

const ExtendedAdjustingSection = styled(AdjustingSection)<CustomStyledElement>`
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  color: #ffffff;
  gap: 2rem;
  margin-top: ${({ marginTop }) => marginTop};
`

const ColumnWrapper = styled.div<CustomStyledElement>`
  flex: 1;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 320px;
  margin-top: ${({ marginTop }) => marginTop};
`

const Header = styled.h3<CustomStyledElement>`
  font-size: 2rem;
  line-height: 2rem;
  margin: ${({ marginTop }) => marginTop} 0 0 0;
  padding-top: ${({ paddingTop }) => paddingTop};
  box-sizing: border-box;
`

const BasicText = styled.div<CustomStyledElement>`
  font-size: 1rem;
  box-sizing: border-box;
  margin-top: ${({ marginTop }) => marginTop};
  max-width: ${({ maxWidth }) => maxWidth};
  padding-top: ${({ paddingTop }) => paddingTop};
`

const ImageShort = styled.img`
  width: 100%;
  height: 440px;
  object-fit: cover;
`

const ImageLong = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top;
  height: 660px;
`

const TeamMemberPhoto = styled.img<CustomStyledElement>`
  width: 320px;
  object-fit: cover;
  object-position: top;
  height: 400px;
  margin-top: ${({ marginTop }) => marginTop};
`

const FancyCard = styled.div`
  position: relative;
  
  @property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
  }
  
  .content {
    z-index: 100;
    position: absolute;
    height: 100%;
    background: #000000;
  }

  .card {
    width: 320px;
    height: 400px;
    position: relative;
    z-index: 10;
  }


  .card::before {
    content: "";
    width: 329px;
    height: 411px;
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -5px;
    left: -4px;
    animation: spin 2.5s linear infinite;
  }

  .card::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    width: 329px;
    height: 411px;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(130px);
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
    transition: opacity .5s;
    animation: spin 2.5s linear infinite;
  }

  @keyframes spin {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }

  
`

export default AboutUsPage
