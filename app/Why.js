import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WhyAfriCoin = () => {
  return (
    <div className="w-full py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="grid border container p-10 rounded-xl grid-cols-1 gap-8 items-center lg:grid-cols-2 shadow-lg">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                {/* <Badge variant="outline">Platform</Badge> */}
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl font-bold lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Why AfriCoin?
                </h2>
                {/* <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              </p> */}
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-bold">A Proven Foundation</p>
                  <p className="text-muted-foreground text-sm">
                    AfriCoin is backed by AfriBNB, a trusted platform where investors earn 1% daily on staked BNB. With this solid base, AfriCoin extends financial empowerment through innovative DeFi tools.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-bold">Secure & Transparent</p>
                  <p className="text-muted-foreground text-sm">
                    Built on the Binance Smart Chain (BSC), AfriCoin ensures security, transparency, and seamless transactions.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-bold">Rewarding Opportunities</p>
                  <p className="text-muted-foreground text-sm">
                    Earn more through AfriCoin’s staking system and AfriDEX, where users can trade tokens safely and efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-img rounded-md aspect-square" />
        </div>
      </div>
    </div>
  )
}

export default WhyAfriCoin