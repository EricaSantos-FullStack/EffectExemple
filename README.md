# Utilizando React Hook useEffect

Mais um projeto realizado com o intuito de aperfeiçoar os meus conhecimentos em programação e avançar em React.js.

## ✨ Página:
- [x] Cada clique o número vai mudando na aba.
- [x] Gif para descontrair :P
- [x] Depois de 10 sec o projeto some da pagina
- [x] A aba apresenta o resultado: "Apagado".

### ✨ useEffect fazendo sua magia:
~~~javascript
export default function EffectExample() {
    const [ counter, setCounter ] = useState(0);

    useEffect(() => {
        document.title = counter;

        return () => document.title = "Apagado";
    }, [counter]);
~~~

### ✨ Página Completa:

![effect](https://user-images.githubusercontent.com/71906862/114952644-13553400-9e2d-11eb-80e5-40341e8f4eb4.PNG)

### ✨ Ação:

~~~javascript
function App() {
  const [visible, setVisible] = useState(true);
  
  setTimeout(()  => {
    setVisible(false);
  }, 10000);

  return visible && <PaginaInicial />;
  
}
~~~

![apagado](https://user-images.githubusercontent.com/71906862/114952678-22d47d00-9e2d-11eb-8567-6b4157d7931e.PNG)

### ✨ Deploy:

Deploy realizado pelo Github pages:
https://ericasantos-fullstack.github.io/EffectExemple/

Many thanks to:
https://rodrilima.medium.com/react-como-fazer-o-deploy-no-github-pages-87f6a6fde370
