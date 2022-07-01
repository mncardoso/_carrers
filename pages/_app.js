import "../styles/globals.css";
import "normalize.css/normalize.css";
import { Menu } from "../components/Layout/Menu";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Menu />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
