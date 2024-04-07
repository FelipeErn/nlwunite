interface MeuBotaoProps {
  texto: string
}

function MeuBotao(props: MeuBotaoProps) {
  return <button className="bg-orange-400">{props.texto}</button>
}

export function App() {
  return (
    <div>
      <MeuBotao texto="Clique aqui" />
      <MeuBotao texto="Botao 2" />
      <MeuBotao texto="Botao 3" />
    </div>
  )
}


