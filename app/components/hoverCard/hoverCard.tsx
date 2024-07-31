import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BsExclamationOctagon } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CustomerType {
  avatar: string | any;
  title: string;
  mail: string;
}
interface HoverCardType {
  customer: CustomerType;
  purchase: string;
}

export function HoverCardDemo({ customer, purchase }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="default">
          <BsExclamationOctagon size={20} />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-70">
        <div className="flex ">
          <Avatar>
            <AvatarImage src={customer.avatar} />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h4 className="text-sm font-semibold">{customer.title}</h4>
            <p className="text-sm">{customer.mail}</p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">{purchase}</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
