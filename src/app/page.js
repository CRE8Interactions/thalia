
import { getVenue } from '@/lib/venues'

import { HomeWrapper } from '@/components'

export default async function Home() {
    const venue = await getVenue('southport-hall')
    const events = venue;

    return (
        <HomeWrapper events={events} />
    )
}
