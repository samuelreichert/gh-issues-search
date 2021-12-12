import './style.css';

type ResultsItem = {
  created_at: string;
  draft: boolean;
  id: number;
  title: string;
  updated_at: string;
  pull_request?: {};
  html_url: string;
  user: {
    avatar_url: string;
    html_url: string;
    login: string;
  };
};

type Props = {
  item: ResultsItem;
};

const SearchResultsItem = ({
  item: {
    created_at,
    draft,
    id,
    title,
    updated_at,
    pull_request,
    html_url,
    user,
  }
}: Props) => {
  const createdAt = new Date(created_at);
  const updatedAt = new Date(updated_at);
  const deltaCreated = (createdAt.getTime() - Date.now()) / (1000*3600*24);
  const deltaUpdated = (updatedAt.getTime() - Date.now()) / (1000*3600*24);
  const formatter = new Intl.RelativeTimeFormat();

  const formattedCreatedAt = formatter.format(Math.round(deltaCreated), 'days');
  const formattedUpdatedAt = formatter.format(Math.round(deltaUpdated), 'days');

  return (
    <div className='results-item'>
      <a href={html_url}>
        <p className='results-item__title'>
          {title}
          <small> (#{id})</small>
        </p>
      </a>

      <div className='results-item__data'>
        <a href={user.html_url} className='badge user-data'>
          <img className='user-data__img' src={user.avatar_url} alt={`${user.login} avatar`} />
          <span className='user-data__login'>{user.login}</span>
        </a>

        <span className='badge badge--date'>Created {formattedCreatedAt}</span>

        <span className='badge badge--date'>Updated {formattedUpdatedAt}</span>

        {draft &&
          <span className='badge'>Draft</span>
        }

        {pull_request !== undefined &&
          <span className='badge badge--pr'>Pull Request</span>
        }
      </div>
    </div>
  );
};

export default SearchResultsItem;
