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

  let link: string | null;
  return fetch(`https://api.github.com/repos/${orgName}/${repoName}/issues?page=${page}&per_page=25${value}`)
    .then(res => {
      link = res.headers.get('link');
      return res.json()
    })
    .then(body => ({
      data: body,
      link
    }));
};

export default searchIssues;
