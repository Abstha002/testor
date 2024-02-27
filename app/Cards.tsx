import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Label } from "@/components/ui/label"
  import { Textarea } from "@/components/ui/textarea";
  import { PrismaClient } from '@prisma/client'

const Cards = async () => {
    const prisma= new PrismaClient()
    const posts=await prisma.post.findMany();
  return (
    <div>
    {posts.map((post:any) => (
    <div className="p-5" key={post.id}>
     <Card className="w-[1000px]">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Code</Label>
              <Textarea id="name" placeholder="Name of your project" value={post.discription} />
            
            </div>
          </div>
      </CardContent>
    </Card>
      </div> 
             ))}
             
        </div>
  )
}

export default Cards