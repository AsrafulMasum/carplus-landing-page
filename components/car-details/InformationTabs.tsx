import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ContainerLayout from "@/layouts/ContainerLayout"
import { ShieldCheck } from "lucide-react"
import Image from "next/image"
import carBack from "@/app/assets/car-back.webp"
import carFront from "@/app/assets/car-front.webp"
import communication from "@/app/assets/communication.webp"

const InformationTabs = () => {
  return (
    <section className="information-tabs">
      <ContainerLayout>
        <Tabs defaultValue="description">
          <TabsList className="border-b w-full flex justify-start gap-20 rounded-none">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="additional-information">Additional information</TabsTrigger>
          </TabsList>

          <TabsContent className="tab-content" value="description" >
            <div className="flex-1">
              <h4 className="description-heading">Car information</h4>
              <p className="description-text">Lorem ipsum dolor sit amet consectetur. Non massa amet neque et egestas orci morbi. Non id mauris amet pretium posuere amet faucibus duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet ligula in felis viverra egestas. Donec egestas sit amet augue convallis fermentum. MauriGs at risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <h4 className="description-heading">CAR DETAILS</h4>
              <div className="space-y-2">
                <p className="description-text"><ShieldCheck className="text-primary" /> Lorem ipsum dolor sit amet consectetur. </p>
                <p className="description-text"><ShieldCheck className="text-primary" /> Lorem ipsum dolor sit amet consectetur. </p>
                <p className="description-text"><ShieldCheck className="text-primary" /> Lorem ipsum dolor sit amet consectetur. </p>
              </div>
            </div>

            <div className="flex-1 relative">
              <Image className="absolute top-16 left-0 w-72 rounded-2xl" src={carBack} alt="car" width={500} height={500} />
              <Image className="absolute top-60 right-16 w-72 rounded-2xl" src={communication} alt="car" width={500} height={500} />
            </div>
          </TabsContent>


          <TabsContent className="tab-content" value="additional-information">
            <div className="flex gap-28">
              <ol className="list-disc space-y-8 pt-10 px-8 flex-1">
                <li className="list-text"><span className="text-black font-semibold">Make and model : </span> Manufacturer and specific car name</li>
                <li className="list-text"><span className="text-black font-semibold">Engine type : </span> Gasoline, diesel, hybrid, or electric.</li>
                <li className="list-text"><span className="text-black font-semibold">Engine capacity : </span> Ranges from 1.0L to 8.0L or more</li>
                <li className="list-text"><span className="text-black font-semibold">Torque : </span> Ranges from 100 Nm in small cars to over 1000 Nm in sports or heavy-duty vehicles</li>
                <li className="list-text"><span className="text-black font-semibold">Exterior Design : </span> Aerodynamic body, LED headlights, alloy wheels, sunroof</li>
                <li className="list-text"><span className="text-black font-semibold">Weight : </span> Ranges from 800 kg to 2,500 kg</li>
                <li className="list-text"><span className="text-black font-semibold">Towing capacity : </span> Typically from 500 kg to 5,000 kg</li>
              </ol>
              <div className="pt-12 flex-1 w-full rounded-2xl">
                <Image className="w-full rounded-2xl" src={carFront} alt="car" width={500} height={500} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </ContainerLayout>
    </section>
  )
}

export default InformationTabs