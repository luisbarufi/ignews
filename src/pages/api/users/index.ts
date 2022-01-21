import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Luis'},
    { id: 2, name: 'Daiane'},
    { id: 3, name: 'Nayelle'}
  ]

  return response.json(users);
}
