import SubscriptionPlans from "../../components/Subscriptions/SubPlans";

export default function SubscriptionsContent() {
  return (
    <section className="wrapper-hero bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Subscription Plan</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Subscribe to SEA Catering and enjoy consistent, healthy meals delivered to your doorstep every day.</p>
        </div>
        <SubscriptionPlans />
      </div>
    </section>
  );
}