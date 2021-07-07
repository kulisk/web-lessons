import './styles/timeline.css'
import {InView} from 'react-intersection-observer';
import {timestamps} from "../const/timestamps";

export default function Timeline() {
    return (
        <section className="timeline">
            <ul>
                {timestamps.map(stamp => {
                    return (
                        <InView key={stamp.time} as="li" onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add('in-view');
                            }
                        }}>
                            <div>
                                <time>{stamp.time}</time>
                                {stamp.text}
                            </div>
                        </InView>
                    )
                })}
            </ul>
        </section>
    )
}