export async function getVenue(slug) {
    // Call an external API endpoint to get venues.
    const res = await fetch(`${process.env.API}/venues?filters[slug][$eq]=${slug}`)
    const data = await res.json()
    return await data.find(venue => venue.slug === slug)
}