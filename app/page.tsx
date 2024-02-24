import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main>
     <div className="p-5">
        <h1>This is Main</h1>
        <Button  className="m-2">Click me</Button>
      </div> 
    </main>
    );
}
