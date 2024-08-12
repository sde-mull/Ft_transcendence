export async function Check_Authentication() {
	try {
		const response = await fetch('/api/auth-status/', {
			method: 'GET',
			credentials: 'include',
		});

		if (response.ok) {
			const data = await response.json();
			if (data.authenticated) {
				return true;
			}
		} else {
			console.error('Error fetching authentication status:', response.statusText);
		}
	} catch (error) {
		console.error('Error fetching authentication status:', error);
		return false;
	}
	return false;
}
		