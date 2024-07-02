function Footer() {
  return (
    <footer>
      <div className="container-fluid bg-body-tertiary mt-3 py-4 text-center">
        <span>
          Confiança e estilo! - {new Date().getFullYear()}, Loja do Zé. Todos os
          direitos reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
