import { Title } from "../Title"

import { useFetch } from "../../hooks/useFetch"

type Repository = {
  name: string,
  description: string,
  html_url: string
}

export const Repositories = () => {
  const {
    data: repositories,
    error,
    isFetching
  } = useFetch<Repository[]>('users/rodrigoaraujo7/repos')

  return (
    <section className="w-2/4">
      <Title center={true} className="m-8">Repository List</Title>
      <ul className="flex flex-wrap justify-between gap-7 marker:text-primaryColor text-xl list-outside list-disc mx-11">
        {repositories?.map((repo, index) => (
          <li key={index} className="w-1/4">
            <a href={repo.html_url} target="blank" className="font-[inter] font-medium text-xl hover:underline cursor-pointer">
              {repo.name}
            </a>
            <p className="font-[poppins] font-regular text-sm text-gray500">{repo.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}