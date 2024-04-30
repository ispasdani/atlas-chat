"use client";

import PricingCards from "@/components/pricingCards/PricingCards";
import React from "react";

const tiers = [
  {
    name: "Starter",
    id: null,
    href: "#",
    priceMonthly: null,
    description: "Start secure chatting right away with anyone, anywhere.",
    features: [
      "20 Messages Chat Limit in Chats",
      "2 Participant limit in Chat",
      "3 Chat Rooms limit",
      "Supports 2 languages",
      "48-hour support response time",
    ],
  },
  {
    name: "PRO",
    id: "pro",
    href: "#",
    priceMonthly: "$6.99",
    description: "Unlock the Full Potential with PRO!",
    features: [
      "Unlimited Messages in Chats",
      "Unlimited Participants in Chats",
      "Unlimited Chat Rooms",
      "Supports up to 10 languages",
      "Multimedia support in chats (coming soon)",
      "2-hour, dedicated support response time",
      "Early access to New Features",
    ],
  },
];

const PricingSection = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <h2 className="text-black text-4xl font-bold pt-10">Pricing</h2>
      <p className="text-lg font-bold pt-5 text-primary-slate-gray">
        Become a PRO member and break down the language barrier!
      </p>

      <div className="w-full flex justify-center items-center my-20">
        {tiers.map((tier, index) => (
          <PricingCards
            redirect={true}
            tier={tier}
            key={tier.id ? tier.id : index + 953498 * 957}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
