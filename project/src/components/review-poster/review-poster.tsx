type ReviewPosterProp = {
  posterLink: string,
  name: string
};

const ReviewPoster = ({name, posterLink}: ReviewPosterProp): JSX.Element => (
  <div className="film-card__poster film-card__poster--small">
    <img src={posterLink} alt={`${name} poster`} width="218" height="327" />
  </div>
);

export default ReviewPoster;
