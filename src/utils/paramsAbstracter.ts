export function paramsAbstracter() {
	const lastPath = window.location.pathname.split('/').pop();
	if (lastPath === '') {
		return 'A';
	}
	return lastPath;
}
