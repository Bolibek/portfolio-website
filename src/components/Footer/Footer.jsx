function Footer() {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	return (
		<footer className="section black darken-4 white-text center">
			<p className="flow-text">Bolibek Fayzullaev &copy; {currentYear} </p>
		</footer>
	);
}

export default Footer;
