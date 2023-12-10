import Link from 'next/link'

async function fetchRepoContents(name) {
  const username = 'PSJ03'
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch(`
  https://api.github.com/repos/${username}/${name}/contents`)
  const contents = await response.json()

  return contents
}

const RepoDirs = async ({ name }) => {
  const username = 'PSJ03'
  const contents = await fetchRepoContents(name)
  const dirs = contents.filter((content) => content.type === 'dir')

  return (
    <div className="mt-2 bg-gray-400/50 w-full rounded-lg pt-3 pb-5 px-5">
      <h3 className="text-xl font-bold">Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link
              className="underline"
              href={`https://github.com/${username}/${name}/tree/master/${dir.path}`}
            >
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RepoDirs
