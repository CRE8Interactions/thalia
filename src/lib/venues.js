export async function getVenue(slug) {
    // Call an external API endpoint to get venues.
    const res = await fetch(`${process.env.API}/venues/${slug}/events`)
    const data = await res.json()
    return data
}