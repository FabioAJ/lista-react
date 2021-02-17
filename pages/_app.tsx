//classe pra importar a lista de estilos global css *tive que usar typescript pra solução funcionar
import './styles.css'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp