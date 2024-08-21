import React, { act } from "react";
import Radio from "./Form/Radio";
let acont = 0;
const App = () => {
  const [resposta, setResposta] = React.useState("");
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState("");

  const perguntas = [
    {
      pergunta: "Qual método é utilizado para criar componentes?",
      options: [
        "React.makeComponent()",
        "React.createComponent()",
        "React.createElement()",
      ],
      certa: "React.createElement()",
      id: "p1",
    },
    {
      pergunta: "Como importamos um componente externo?",
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      certa: 'import Component from "./Component"',
      id: "p2",
    },
    {
      pergunta: "Qual hook não é nativo?",
      options: ["useEffect()", "useFetch()", "useCallback()"],
      certa: "useFetch()",
      id: "p3",
    },
    {
      pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
      options: ["set", "get", "use"],
      certa: "use",
      id: "p4",
    },
  ];

  function handleChange(id, value) {
    setResposta({ ...resposta, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    acont++;
    setSlide(acont);

    let acertos = 0;
    perguntas.forEach((pergunta, index) => {
      if (resposta[pergunta.id] === pergunta.certa) {
        acertos++;
      }
    });
    if (acont === 4) {
      setResultado(`Você acertou ${acertos} de ${perguntas.length} perguntas.`);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {perguntas.map(({ pergunta, options, id }, index) => (
          <Radio
            key={options}
            active={slide === index}
            options={options}
            value={resposta[id]}
            setValue={(value) => handleChange(id, value)}
            pergunta={pergunta}
          />
        ))}

        {resultado ? (
          <p style={{ padding: "20px", border: "1px solid gray" }}>
            {resultado}
          </p>
        ) : (
          <button>Enviar</button>
        )}
      </form>
    </>
  );
};

export default App;
