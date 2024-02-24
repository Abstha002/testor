'use client';
import React from 'react'
import {useForm} from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea';
interface upload{
    title:string,
    disc:string,
}
const NewForm = () => {
    const form=useForm()
    const {register,control,handleSubmit}=useForm<upload>();
  return (
    <div className='container  m-2 p-5 justify-center align-item bg-zinc-700 rounded-md'>
    <Form  {...form}>
    <form onSubmit={handleSubmit((data)=>{
      console.log(data)
    
    })} className="space-y-8 p-10">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...register('title')}  {...field}/>
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="Text"
        render={({ field }) => (
          <FormItem>
            <FormLabel>TextArea</FormLabel>
            <FormControl>
              <Textarea {...register('disc')} {...field}/>
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button type="submit">Submit</Button>
    </form>
  </Form>
  </div>

  )
}

export default NewForm