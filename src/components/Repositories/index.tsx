import { Title } from "../Title"

import { useFetch } from "../../hooks/useFetch"

type Repository = {
  name: string,
  description: string
}

export const Repositories = () => {
  const {
    data: repositories,
    error,
    isFetching
  } = useFetch<Repository[]>('users/rodrigoaraujo7/repos')

  return (
    <section className="py-8">
      <Title center={true}>Repository List</Title>
      <ul className="marker:text-primaryColor list-outside list-disc mx-11">
        {repositories?.map((repo, index) => (
          <li key={index}>
            <strong>{repo.name}</strong>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}