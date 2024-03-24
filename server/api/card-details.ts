export default defineEventHandler((event) => {
	return sendRedirect(event, 'https://frontend-mentor-card-details-production.up.railway.app', 302)
})
