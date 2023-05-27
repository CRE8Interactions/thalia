
import { UpcomingEvents } from "./UpcomingEvents"

export default function HomeWrapper({ events }) {
    console.log(events);
    return (
        <section className="spacer">
            <UpcomingEvents events={events} />
        </section>
    )
}
