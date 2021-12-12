type Props = {
  orgName: string;
  repoName: string;
  page?: number;
};

const searchIssues = ({ queryKey }: any) => {
  const {
    orgName,
    repoName,
    page = 1,
  }: Props = queryKey[1];

  return fetch(`https://api.github.com/repos/${orgName}/${repoName}/issues?page=${page}&per_page=25`)
    .then(res =>
      res.json()
    );
};

export default searchIssues;
