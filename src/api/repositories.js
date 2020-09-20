export function fetchUserRepositories(user) {
  return fetch(`https://api.github.com/users/${user}/repos`).then((res) => {
    return res.json()
  })
}