import Header from '@/components/Header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import React from 'react'

import MyListing from './components/MyListing'

function Profile() {
  return (
    <div>
      <Header />
      <div className=' px-10  md:px-10  my-10'>
        <Tabs defaultValue="my-listing" className=" w-full">
          <TabsList className=" w-full flex  justify-center">
            <TabsTrigger value="my-listing">Mes annonces</TabsTrigger>
            <TabsTrigger value="inbox">Boite de réception</TabsTrigger>
            <TabsTrigger value="profile">mon compte</TabsTrigger>
          </TabsList>
          <TabsContent value="my-listing" >
            <MyListing />
          </TabsContent>

          <TabsContent value="inbox">boite de réception</TabsContent>
          <TabsContent value="profile">Mon compte</TabsContent>
        </Tabs>


      </div>
    </div>
  )
}

export default Profile