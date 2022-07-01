import styles from "../../styles/Menu.module.css";
import { Button } from "../interface/Button";
import Link from "next/link";

export let Menu = () => {
	return (
		<div className={styles.container}>
			<menu className={styles.menu}>
				<div className={styles.logo}>
					<h4>Hack with</h4>
					<svg
						width="294"
						height="48"
						viewBox="0 0 294 48"
						fill="#EF4B56"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Hadrian</title>
						<path d="M293.058 4.57764e-05V48H286.886L264.258 15.4287V48H256.372V4.57764e-05H262.544L285.172 32.5714V4.57764e-05H293.058Z" />
						<path d="M235.002 30.9259L227.391 9.25729L219.779 30.9259H235.002ZM217.173 38.3313L213.813 48H205.242L222.659 1.52588e-05H232.122L249.471 48H240.968L237.608 38.3313H217.173Z" />
						<path d="M198.395 0H190.396V48H198.395V0Z" />
						<path
							d="M155.486 23.4514H166.8C170.983 23.4514 174.343 19.8859 174.343 15.4286C174.343 10.9027 170.983 7.40593 166.8 7.40593H155.486V23.4514ZM164.812 30.5141H155.486V48H147.6V1.52588e-05H166.8C175.371 1.52588e-05 182.228 6.85681 182.228 15.4286C182.228 21.6 178.32 27.0854 172.697 29.3486L183.6 48H174.96L164.812 30.5141Z"
							fill="#EF4B56"
						/>
						<path d="M133.079 24C133.079 14.4687 126.839 7.54276 117.719 7.54276H106.747V40.4573H117.719C126.839 40.4573 133.079 33.4627 133.079 24ZM140.691 24C140.691 37.3714 130.953 48 117.719 48H98.8621V4.57764e-05H117.719C130.953 4.57764e-05 140.691 10.56 140.691 24Z" />
						<path d="M77.6007 30.9259L69.9889 9.25729L62.3776 30.9259H77.6007ZM59.7721 38.3313L56.4121 48H47.8408L65.2576 1.52588e-05H74.7207L92.0689 48H83.5662L80.2067 38.3313H59.7721Z" />
						<path d="M40.9814 48H28.9814V4.57764e-05H40.9814V8.0002H36.9815V39.9999H40.9814V48Z" />
						<path d="M12.9816 20.0001V0H0.981613V8.00015H4.98145V40.0003H0.981613V48H12.9816V28.0003H24.9816V20.0001H12.9816Z" />
					</svg>
				</div>
				<nav className={styles.nav}>
					<ul>
						<li>
							<Link href={"/"} passHref replace>
								<a>Teams</a>
							</Link>
						</li>
						<li>
							<Link href={"/"} passHref replace>
								<a>Blog</a>
							</Link>
						</li>
						<li>
							<Link href={"/"} passHref replace>
								<a>Events</a>
							</Link>
						</li>
						<li>
							<Link href={"/"} passHref replace>
								<a>Recruitment</a>
							</Link>
						</li>
						<li>
							<Button href={"/"} label={"Jobs at Hardrian"} />
						</li>
					</ul>
				</nav>
			</menu>
		</div>
	);
};
