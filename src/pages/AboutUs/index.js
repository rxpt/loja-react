import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import TeamMember from "../../components/TeamMember";
import teamMembers from "../../data/teamMembers";
import "./style.css";

function History() {
  return (
    <main>
      <Container className="py-4 background" fluid>
        <Container>
        <Row>
          <Col lg={{ span: 6, offset: 6 }} className="px-4">
            <h2 className="text-center mb-4">Nossa história</h2>
            <p>
              No ano de 2010, José realizou seu sonho de abrir a Loja do Zé, uma
              boutique de roupas em Maravilhosópolis. Sua visão era oferecer
              produtos de qualidade a preços acessíveis. Com o compromisso de
              satisfazer os clientes, a loja logo se tornou uma referência na
              região, atraindo pessoas de todos os estilos.
            </p>
            <p>
              Em 2015, José decidiu expandir os horizontes da Loja do Zé e
              lançou sua versão online. Essa nova abordagem permitiu que a loja
              atingisse um público mais amplo além das fronteiras de
              Maravilhosópolis. Com um site cuidadosamente projetado e uma
              equipe dedicada, a Loja do Zé oferece uma experiência de compra
              conveniente e acessível aos clientes.
            </p>
            <p>
              Hoje a Loja do Zé é reconhecida nacionalmente como uma referência
              em moda e estilo. Ela continua a crescer e oferecer uma ampla
              seleção de roupas e acessórios para atender a todos os gostos.
              Mantendo-se fiel aos valores de qualidade, estilo acessível e
              satisfação do cliente, a Loja do Zé convida você a explorar sua
              coleção cuidadosamente selecionada e encontrar seu próprio estilo
              único.
            </p>
          </Col>
        </Row>
        </Container>
      </Container>
      <Container className="text-center py-4">
        <h2>Nosso time</h2>
        <Row>
          {teamMembers.length &&
            teamMembers.map((member, index) => (
              <Col key={index} md={6} lg={3}>
                <TeamMember {...member} />
              </Col>
            ))}
        </Row>
      </Container>
    </main>
  );
}

export default History;
