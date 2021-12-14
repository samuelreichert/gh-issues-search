const searchIssues = ({ queryKey }: { queryKey: any }) => {
  const [,queryParams] = queryKey;
  const {
    orgName,
    page = 1,
    repoName,
    sorting,
  } = queryParams;

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
