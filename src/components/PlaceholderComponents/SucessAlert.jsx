import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

function SucessAlert() {

    const showAlert = () => {
        toast.success('Login Successful!!')
    }

  return (
    <div className="my-20 h-80 place-items-center grid">
        <Button variant="default" onClick={showAlert}>Show Alert</Button>
        <Toaster
        position="top-right"
        richColors
        closeButton />
    </div>
  )
}

export default SucessAlert