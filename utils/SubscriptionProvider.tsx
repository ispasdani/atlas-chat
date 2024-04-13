"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { onSnapshot } from "firebase/firestore";
import { subscriptionRef } from "@/lib/converters/Subscription";
import { useSubscriptionStore } from "@/store/store";

function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const setSubscription = useSubscriptionStore(
    (state) => state.setSubscription
  );

  useEffect(() => {
    if (!session?.user.id) return;

    return onSnapshot(
      subscriptionRef(session?.user.id),
      (snapshot) => {
        if (snapshot.empty) {
          // console.log("User has NO subscription");
          //set no subscription
          setSubscription(null);
          return;
        } else {
          // console.log("User has subscription");
          //set subscription
          setSubscription(snapshot.docs[snapshot.docs.length - 1].data());
        }
      },
      (error) => {
        console.log("error getting document", error);
      }
    );
  }, [session, setSubscription]);

  return <>{children}</>;
}

export default SubscriptionProvider;
