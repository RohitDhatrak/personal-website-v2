self.addEventListener("install", (event) => {
	self.skipWaiting(); // Force activation
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		// Unregister all service workers under this scope
		self.registration.unregister()
			.then(() => self.clients.matchAll())
			.then((clients) => {
				clients.forEach((client) => {
					// Check if the service worker is not related to Google Analytics
					if (!client.url.includes("partytown")) {
						client.navigate(client.url);
					}
				});
			})
	);
});