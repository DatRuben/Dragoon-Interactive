type PortfolioProjectFeatureProps = {
  title: string
  contributors: string
  description: string
  tech: string
}

function PortfolioProjectFeature({
  title,
  contributors,
  description,
  tech,
}: PortfolioProjectFeatureProps) {
  return (
    <article className="portfolio-project">
      <div className="portfolio-project__image">
        PROJECT IMAGE
      </div>

      <div className="portfolio-project__content">
        <p className="portfolio-project__tech">
          {tech}
        </p>

        <h2>{title}</h2>

        <p className="portfolio-project__contributors">
          {contributors}
        </p>

        <p className="portfolio-project__description">
          {description}
        </p>
      </div>
    </article>
  )
}

export default PortfolioProjectFeature