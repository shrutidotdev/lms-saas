"use client"
import { useParams, useSearchParams } from "next/navigation"

const CompanionSession = () => {
    const params = useParams()

    console.log(params.id)

  return (
    <div className="text-3xl font-bold">Welcome to my Companion: {params.id}</div>
  )
}

export default CompanionSession