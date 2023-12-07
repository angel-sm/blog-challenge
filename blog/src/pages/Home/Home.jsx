import styled from "styled-components";
import Card from "../../components/Card";
import Filter from "./Components/Filter";
import Form from "./Components/Form";
import Modal from "../../components/Modal";
import Details from "./Components/Details";
import { useHome } from "./useHome";

const Home = () => {
  const {
    fetching = true,
    entrance,
    entrances,
    handleSelectNotice,
    showModalDetails,
    handleCloseDetail,
  } = useHome();

  return (
    <>
      <Modal
        onClose={handleCloseDetail}
        isOpen={showModalDetails}
        content={() => <Details data={entrance} />}
      />
      <MainContent>
        <NoticeSection>
          <HeaderContainer>
            <Filter />
          </HeaderContainer>
          {fetching ? (
            <span>Cargando...</span>
          ) : (
            <CardGrid>
              {entrances.map((entrance) => (
                <Card
                  key={entrance?.id}
                  data={entrance}
                  onClick={() => handleSelectNotice(entrance)}
                />
              ))}
            </CardGrid>
          )}
        </NoticeSection>
        <TitleContent>
          <Title>New entrance</Title>
          <Form />
        </TitleContent>
      </MainContent>
    </>
  );
};

export default Home;

const MainContent = styled.div`
  display: flex;
  width: 70%;
  height: 80vh;
  margin: auto !important;
  transform: translateY(50px);
`;

const TitleContent = styled.div`
  height: 100%;
  width: 30%;
  padding: 0.75em;
`;

const Title = styled.h1`
  font-size: rem;
  color: #000;
  background: none !important;
  font-weight: bold;
`;

const NoticeSection = styled.section`
  width: calc(100% - 30%);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardGrid = styled.div`
  width: 100%;
  padding: 1em 0.75em 1em 1em;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
    position: absolute;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const HeaderContainer = styled.div`
  display: flex;
`;
