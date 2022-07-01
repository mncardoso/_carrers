import Link from "next/link";
import styles from "../../styles/Button.module.css";

export let Button = ({ href, label, red = true }) => {
	const style = red ? styles.Button_red : styles.Button_purple;
	return (
		<Link href={href} passHref replace>
			<a className={style} title={label}>
				{label}
			</a>
		</Link>
	);
};
