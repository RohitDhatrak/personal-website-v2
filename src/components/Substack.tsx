export default function SubstackEmbed() {
	return (
		<>
			<style>
				{`
					@media (max-width: 480px) {
						.substack-embed {
							height: 400px;
						}
					}
				`}
			</style>
			<iframe
				className="substack-embed"
				src="https://rohitdhatrak.substack.com/embed"
				width="700"
				height="320"
				style={{
					margin: "0 auto",
					width: "600px",
					maxWidth: "95%",
					marginBottom: "50px",
					borderRadius: "20px",
				}}
			></iframe>
		</>
	)
}