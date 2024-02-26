import Image from "next/image";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";


export default function Home() {
  const title:string="title";
  const disc:string="blah blah blaha"
  return (
    <main>
     <div className="p-5">
     <Card className="w-[1000px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Code</Label>
              <Textarea id="name" placeholder="Name of your project"  />
              {/* value={disc} */}
            </div>
          </div>
      </CardContent>
    </Card>
      </div> 
    </main>
    );
}
