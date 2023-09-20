import { Title } from "../../Title"

import { useFetch } from "../../../hooks/useFetch"

type IRepositoryProps = {
  username: string | undefined
}

interface Repository {
  name: string,
  description: string,
  html_url: string
}

export const Repositories = ({ username }: IRepositoryProps) => {
  const {
    data: repositories,
    error,
    isFetching
  } = useFetch<Repository[]>(`users/${username}/repos`)

  return (
    <section className="w-2/4 border-t border-gray700">
      {isFetching ? <></> : (
        <>
          <Title center={true} className="my-11">Repository List</Title>
          {error ? (<Title center={true} className="underline">User not found! 🤕</Title>) : (
            <ul className="flex flex-wrap justify-between gap-10 marker:text-secondaryColor text-xl list-outside list-disc mx-11">
              {repositories?.map((repo, index) => (
                <li key={index} className="w-1/4">
                  <a href={repo.html_url} target="blank" className="font-[inter] font-medium text-xl hover:underline cursor-pointer">
                    {repo.name}
                  </a>
                  <p className="font-[poppins] font-regular text-sm text-gray500">{repo.description}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  )
}