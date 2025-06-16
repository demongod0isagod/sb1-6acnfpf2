import React, { createContext, useContext, useState } from 'react';

interface SubscriptionContextType {
  isSubscribed: boolean;
  subscriptionPlan: string | null;
  showSubscriptionGate: boolean;
  setShowSubscriptionGate: (show: boolean) => void;
  subscribe: (plan: string) => void;
  unsubscribe: () => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionPlan, setSubscriptionPlan] = useState<string | null>(null);
  const [showSubscriptionGate, setShowSubscriptionGate] = useState(false);

  const subscribe = (plan: string) => {
    setIsSubscribed(true);
    setSubscriptionPlan(plan);
    setShowSubscriptionGate(false);
  };

  const unsubscribe = () => {
    setIsSubscribed(false);
    setSubscriptionPlan(null);
  };

  return (
    <SubscriptionContext.Provider value={{
      isSubscribed,
      subscriptionPlan,
      showSubscriptionGate,
      setShowSubscriptionGate,
      subscribe,
      unsubscribe
    }}>
      {children}
    </SubscriptionContext.Provider>
  );
};