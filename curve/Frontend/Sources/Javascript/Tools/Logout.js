import { initializePage } from '../router.js';

export async function LogoutProc() {
	try{
		const response = await fetch('/api/logout/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		});

		const data = await response.json();
		if (response.ok) {
			if (data.authenticated === false) {
				initializePage();
				alert("Logout Sucessfull!");
			}
		}
	} catch (error) {
        console.error('Error during logout:', error);
    }
}
