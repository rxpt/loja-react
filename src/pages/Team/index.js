import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TeamMember from "../../components/TeamMember";

function Team() {
  const members = [
    {
      name: "Elana Porto",
      position: "Dev. Full Stack",
      picture: "https://i.imgur.com/5OwW0oj.png",
      social: [
        {
          name: "Twitter",
          url: "#",
        },
        {
          name: "Instagram",
          url: "#",
        },
        {
          name: "Linkedin",
          url: "#",
        },
      ],
      bio: "Com vasta experiência em desenvolvimento web, Elana é especialista em criar soluções criativas e eficientes para os desafios tecnológicos. Ela é apaixonada por programação e está sempre em busca de aprimoramento.",
    },
    {
      name: "Jonas Henrique",
      position: "Estilista",
      picture: "https://i.imgur.com/oNXEdDH.png",
      social: [
        {
          name: "Twitter",
          url: "#",
        },
        {
          name: "Instagram",
          url: "#",
        },
        {
          name: "Linkedin",
          url: "#",
        },
      ],
      bio: "Com um olhar apurado para a moda, Jonas é responsável por criar as tendências e garantir que cada peça seja única e cheia de estilo. Sua criatividade e paixão pela moda o tornam um membro essencial da nossa equipe.",
    },
    {
      name: "Fabiola Mendes",
      position: "Gerente",
      picture: "https://i.imgur.com/S7pvn1D.png",
      social: [
        {
          name: "Twitter",
          url: "#",
        },
        {
          name: "Instagram",
          url: "#",
        },
        {
          name: "Linkedin",
          url: "#",
        },
      ],
      bio: "Com sua liderança inspiradora, Fabiola garante que nossa loja seja um ambiente acolhedor e eficiente. Ela é responsável por coordenar as equipes e garantir que nossos clientes tenham a melhor experiência de compra possível.",
    },
    {
      name: "José Santos",
      position: "Diretor Executivo",
      picture: "https://i.imgur.com/DYopRBM.png",
      social: [
        {
          name: "Twitter",
          url: "#",
        },
        {
          name: "Instagram",
          url: "#",
        },
        {
          name: "Linkedin",
          url: "#",
        },
      ],
      bio: "Como diretor executivo, José lidera nossa loja com uma visão estratégica e paixão pelo negócio. Ele é o responsável por garantir que a Loja do Zé seja referência em qualidade, estilo e atendimento excepcional.",
    },
  ];

  return (
    <Container className="text-center py-4">
      <h2>Nosso time</h2>
      <Row>
        {members.length &&
          members.map((member, index) => (
            <Col key={index} md={6} lg={3}>
              <TeamMember {...member} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Team;
