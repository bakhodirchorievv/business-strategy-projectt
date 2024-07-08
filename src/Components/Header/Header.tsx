import { Link } from "react-router-dom";

import "./Header.css";
import "./HeaderResponsive.css";
import { useEffect, useRef } from "react";

const Header = () => {
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let lastScrollTop = 0;

		const handleScroll = () => {
			const currentScrollTop =
				window.pageYOffset || document.documentElement.scrollTop;

			if (currentScrollTop > lastScrollTop) {
				// Scrolling down
				headerRef.current?.classList.add("hidden");
			} else {
				// Scrolling up
				headerRef.current?.classList.remove("hidden");
			}

			lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<header id="real-main-header" ref={headerRef} className="header">
				<Link to={"/"}>
					<img
						className="head-img"
						src="/business-strategy-project/MainPage/Vector (4).png"
						alt=""
					/>
				</Link>
				<ul className="ul-wrapper getNone">
					<Link to={"Cases"}>
						<li className="list-item head-case">Кейсы</li>
					</Link>
					<li className="list-item head-service">Услуги</li>
					<li className="list-item head-company">О компании</li>
					<Link to={"Contact"}>
						<li className="list-item head-contact">Контакты</li>
					</Link>
				</ul>
				<div className="header-burger">
					<button className="overallBtn hasHover head-btn getNone">
						время написать
					</button>
					<img
						src="/business-strategy-project/MainPage/realBurger.png"
						alt=""
						className="getBlock"
					/>
				</div>
			</header>
		</>
	);
};

export default Header;
