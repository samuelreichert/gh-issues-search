type Props = {
  orgName: string;
  repoName: string;
  page?: number;
  sorting?: { value: string };
};

const searchIssues = ({ queryKey }: any) => {
  const {
    orgName,
    repoName,
    page = 1,
    sorting,
  }: Props = queryKey[1];

  const value = sorting?.value ?? '';

  return fetch(`https://api.github.com/repos/${orgName}/${repoName}/issues?page=${page}&per_page=25${value}`)
    .then(res =>
      res.json()
    );
};

export default searchIssues;
