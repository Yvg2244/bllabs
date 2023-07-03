"use client"
import React from 'react'
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
const SearchBar = () => {
  return (
    <div className="w-72">
      <Input label="Address" />
      <Button variant="gradient" className="flex items-center gap-3">
         Search Address
      </Button>
    </div>
  )
}

export default SearchBar