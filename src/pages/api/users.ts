// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type DataList = [
  {
    name: string,
    age: number,
    address: {
      name: string,
      location: string,
      number: number
    },
    phone: [number, string]
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataList>
) {
  res.status(200).json([{
    name: "John Doe",
    age: 13,
    address: {
      name: "Ambohibao",
      location: "Lot II B 43",
      number: 43
    },
    phone: [261436842736, "Madagascar"]
  }])
}
