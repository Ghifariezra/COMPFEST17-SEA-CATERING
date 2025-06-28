import MenuPlans from "../../components/MenuPlans/MenuPlans";

export default function MenuContent() {
  return (
    <section className="wrapper-hero bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Meal Plans & <span className="text-green-600">Menu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover our carefully crafted meal plans designed to meet your health and fitness goals. Each plan is customizable and delivered fresh to your door.</p>
        </div>
        <MenuPlans />
      </div>
    </section>
  );
}