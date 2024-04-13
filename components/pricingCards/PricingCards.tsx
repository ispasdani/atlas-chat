import { CheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import CheckOutButton from "../checkOutButton/CheckOutButton";

interface Tier {
  name: string;
  id: string | null;
  href: string;
  priceMonthly: string | null;
  description: string;
  features: string[];
}

type PricingCardsProps = {
  redirect: boolean;
  tier: Tier;
};

const PricingCards = ({ redirect, tier }: PricingCardsProps) => {
  return (
    <div className="h-[400px] w-[350px] bg-blue-300 mx-5 my-10 rounded-xl p-4 flex flex-col justify-between items-start">
      <div>
        <h3>{tier.name}</h3>
        <h2>{tier.priceMonthly}</h2>
        <p>{tier.description}</p>
      </div>
      <ul>
        {tier.features.map((feature, index) => (
          <li key={(index + 9857) * 90285} className="flex gap-x-3">
            <CheckIcon
              className="h-6 w-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
      <div className="w-full">
        {redirect ? (
          <Link
            href="/register"
            prefetch={false}
            className="text-sm bg-coral-red"
          >
            Get Started Today
          </Link>
        ) : (
          tier.id && <CheckOutButton />
        )}
      </div>
    </div>
  );
};

export default PricingCards;
