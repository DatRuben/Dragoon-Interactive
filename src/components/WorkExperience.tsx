const workExperience = [
    {
        id: 'costco',
        role: 'Seasonal Food Court Employee',
        company: 'Costco Wholesale',
        location: 'San Antonio, TX',
        dates: 'November 2025 – January 2026',
        description:
            'Served 1,000+ customers per shift in a 3–7 member team while supporting order flow, restocking, and sanitation.',
    },
    {
        id: 'bill-miller',
        role: 'General Employee',
        company: 'Bill Miller Bar-B-Q',
        location: 'San Antonio, TX',
        dates: 'May 2021 – August 2024',
        description:
            'Served 250–400 customers per shift while maintaining order accuracy and supporting team workflow during high-volume periods.',
    },
]

function WorkExperience() {
    return (
        <>
            {workExperience.map((experience, index) => (
                <section
                    key={experience.id}
                    id={
                        index === 0
                            ? 'work-experience'
                            : `work-${experience.id}`
                    }
                    className="experience-screen work-screen"
                    data-scroll-screen
                    data-scroll-label={experience.company}
                    data-scroll-group="Work Experience"
                    data-scroll-subtitle={experience.role}
                    data-nav-section="experience"
                    data-experience-type="work"
                >
                    <div className="work-screen__content">
                        <p className="experience-screen__index">
                            {String(index + 1).padStart(2, '0')}
                            {' / '}
                            {String(workExperience.length).padStart(2, '0')}
                        </p>

                        <p className="work-screen__dates">
                            {experience.dates}
                        </p>

                        <h2>{experience.role}</h2>

                        <p className="work-screen__company">
                            {experience.company}
                        </p>

                        <p className="work-screen__location">
                            {experience.location}
                        </p>

                        <p className="work-screen__description">
                            {experience.description}
                        </p>
                    </div>
                </section>
            ))}
        </>
    )
}

export default WorkExperience