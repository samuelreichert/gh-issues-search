import { ResultsItemProps } from '../../config/types';
import './style.css';

const SearchResultsItem = ({
  comments,
  created_at,
  draft,
  html_url,
  id,
  title,
  updated_at,
  pull_request,
  user,
}: ResultsItemProps) => {
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
        <p className='results-item__title' data-testid="result-item-title">
          {title}
          <small> (#{id})</small>
        </p>
      </a>

      <div className='results-item__data'>
        {user &&
          <a href={user.html_url} className='badge user-data'>
            <img
              className='user-data__img'
              src={user.avatar_url}
              alt={`${user.login} avatar`}
            />

            <span className='user-data__login'>{user.login}</span>
          </a>
        }

        <span className='badge badge--comments'>{comments} comments</span>

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
